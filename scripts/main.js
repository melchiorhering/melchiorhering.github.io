/** =============================
 * PUBLIC API ROUTES
 * ============================= */

function doGet(e) {
	if (e?.parameter?.config === 'github') return getConfigFromGithub()
	if (e?.parameter?.names === '1') return getPlayerNames()

	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teams')
	const data = sheet.getDataRange().getValues()
	const headers = data[0]

	const rows = data.slice(1).map((row) => {
		const obj = {}
		headers.forEach((h, i) => (obj[h.toLowerCase()] = row[i]))
		if (obj.members) obj.members = obj.members.split(',').map((name) => name.trim())
		return obj
	})

	const json = JSON.stringify(rows)
	const output = ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON)

	if (e?.parameter?.nocache === '1') {
		output.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
	}

	return output
}

function doPost(e) {
	try {
		// 👇 Handle form-style submissions (e.g., from <form>)
		if (e?.parameter?.name) {
			const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Spelers')
			sheet.appendRow([new Date(), e.parameter.name])
			return ContentService.createTextOutput('Success')
		}

		// 👇 Handle JSON payloads
		if (e?.postData?.contents) {
			const parsed = JSON.parse(e.postData.contents)

			if (parsed.enableFetch !== undefined || parsed.ttl !== undefined) {
				e.parsedBody = parsed
				return setConfigToGithub(e)
			}

			if (Array.isArray(parsed) && parsed[0]?.members) {
				e.parsedBody = parsed
				return setTeams(e)
			}
		}

		return ContentService.createTextOutput('Missing or invalid input').setMimeType(
			ContentService.MimeType.TEXT
		)
	} catch (err) {
		Logger.log('❌ Error in doPost: ' + err.message)
		return ContentService.createTextOutput('Error: ' + err.message).setMimeType(
			ContentService.MimeType.TEXT
		)
	}
}

/** =============================
 * CONFIG MANAGEMENT (GitHub JSON)
 * ============================= */

// Upload updated config to GitHub
function setConfigToGithub(e) {
	if (!e || (!e.parsedBody && !e.postData?.contents)) {
		return ContentService.createTextOutput('Missing payload')
	}

	const config = e.parsedBody || JSON.parse(e.postData.contents)
	const payload = JSON.stringify(config, null, 2)
	const { repo, path, branch } = getConfigInfo()
	const token = getGithubToken()

	const sha = fetchFileSHA(repo, path, branch, token)

	const res = UrlFetchApp.fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
		method: 'put',
		contentType: 'application/json',
		headers: getGithubHeaders(token),
		payload: JSON.stringify({
			message: 'Update live-config.json from admin panel',
			content: Utilities.base64Encode(payload),
			sha,
			branch
		})
	})

	return ContentService.createTextOutput(res.getContentText()).setMimeType(
		ContentService.MimeType.JSON
	)
}

// Fetch config from GitHub
function getConfigFromGithub() {
	const { repo, path, branch } = getConfigInfo()
	const token = getGithubToken()

	const res = UrlFetchApp.fetch(
		`https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`,
		{
			headers: getGithubHeaders(token)
		}
	)

	const data = JSON.parse(res.getContentText())
	const decoded = Utilities.newBlob(Utilities.base64Decode(data.content)).getDataAsString()

	return ContentService.createTextOutput(decoded).setMimeType(ContentService.MimeType.JSON)
}

// Config constants
function getConfigInfo() {
	return {
		repo: 'melchiorhering/melchiorhering.github.io',
		path: 'src/data/live-config.json',
		branch: 'main'
	}
}

// Token getter
function getGithubToken() {
	return PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN')
}

// Standard headers for GitHub API
function getGithubHeaders(token) {
	return {
		Authorization: `token ${token}`,
		Accept: 'application/vnd.github.v3+json'
	}
}

// Fetch SHA for existing file on GitHub
function fetchFileSHA(repo, path, branch, token) {
	const res = UrlFetchApp.fetch(
		`https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`,
		{
			headers: { Authorization: `token ${token}` }
		}
	)
	return JSON.parse(res.getContentText()).sha
}

/** =============================
 * TEAM DATA (Google Sheets + GitHub)
 * ============================= */

// Sync current sheet to GitHub
function updateTeamScores() {
	try {
		const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teams')
		const data = sheet.getDataRange().getValues()
		const teams = []

		for (let i = 1; i < data.length; i++) {
			const row = data[i]
			teams.push({
				team: row[0],
				score: isNaN(parseInt(row[1])) ? 0 : parseInt(row[1]),
				members: row[2] ? row[2].split(',').map((name) => name.trim()) : []
			})
		}

		const payload = JSON.stringify(teams, null, 2)
		const repo = 'melchiorhering/melchiorhering.github.io'
		const path = 'src/data/teams.json'
		const branch = 'main'
		const token = getGithubToken()
		const sha = fetchFileSHA(repo, path, branch, token)

		UrlFetchApp.fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
			method: 'put',
			contentType: 'application/json',
			headers: getGithubHeaders(token),
			payload: JSON.stringify({
				message: 'Update teams.json from Google Sheet',
				content: Utilities.base64Encode(payload),
				sha,
				branch
			})
		})

		Logger.log('✅ GitHub updated successfully')
	} catch (err) {
		Logger.log('❌ Error: ' + err.message)
	}
}

// Update score on edit (Win +3 / Draw +1)
function onEdit(e) {
	const sheet = e.source.getActiveSheet()
	const range = e.range

	if (sheet.getName() === 'Teams' && range.getColumn() === 4 && range.getRow() > 1) {
		const result = range.getValue()
		const scoreCell = sheet.getRange(range.getRow(), 2)
		const teamName = sheet.getRange(range.getRow(), 1).getValue()
		let score = parseInt(scoreCell.getValue()) || 0

		if (result === 'Win') score += 3
		else if (result === 'Draw') score += 1

		scoreCell.setValue(score)
		range.clearContent()
		Logger.log(`✅ Updated score for ${teamName}`)
	}
}

// Admin trigger for local testing
function testOnEdit() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teams')
	const range = sheet.getRange('D2')
	range.setValue('Win')

	onEdit({ source: SpreadsheetApp.getActiveSpreadsheet(), range })
}

/** =============================
 * SHEET HELPERS
 * ============================= */

// Return only player names
function getPlayerNames() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Spelers')
	const data = sheet.getDataRange().getValues()

	if (data.length < 2) {
		return ContentService.createTextOutput(JSON.stringify([])).setMimeType(
			ContentService.MimeType.JSON
		)
	}

	const names = data
		.slice(1)
		.map((row) => row[1])
		.filter(Boolean)
	return ContentService.createTextOutput(JSON.stringify(names)).setMimeType(
		ContentService.MimeType.JSON
	)
}

// Reset the Teams sheet and populate with new data
function setTeams(e) {
	try {
		if (!e?.postData?.contents) {
			return ContentService.createTextOutput('Missing payload').setMimeType(
				ContentService.MimeType.TEXT
			)
		}

		const teams = JSON.parse(e.postData.contents)
		const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teams')

		sheet.clearContents()
		sheet.clearFormats()

		const headers = ['Team', 'Score', 'Members', 'Result']
		sheet.getRange(1, 1, 1, headers.length).setValues([headers])
		sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#f1f3f4')
		sheet.setColumnWidths(1, 4, 140)
		sheet.setColumnWidth(3, 250)
		sheet.getRange(1, 1, 1, headers.length).setHorizontalAlignment('center')

		teams.forEach((team, i) => {
			sheet
				.getRange(i + 2, 1, 1, 4)
				.setValues([[team.team, team.score || 0, (team.members || []).join(', '), '']])
		})

		// Add dropdown to Result column
		const validationRange = sheet.getRange(2, 4, teams.length)
		const rule = SpreadsheetApp.newDataValidation()
			.requireValueInList(['Win', 'Draw'], true)
			.setAllowInvalid(false)
			.build()
		validationRange.setDataValidation(rule)

		return ContentService.createTextOutput('Teams updated with headers and dropdown').setMimeType(
			ContentService.MimeType.TEXT
		)
	} catch (err) {
		Logger.log('❌ Error in setTeams: ' + err.message)
		return ContentService.createTextOutput('Error: ' + err.message).setMimeType(
			ContentService.MimeType.TEXT
		)
	}
}
