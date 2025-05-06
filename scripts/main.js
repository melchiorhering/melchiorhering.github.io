/**
 * ---- TEAM LOGIC ----
 */

// Update GitHub with teams.json
function updateTeamScores() {
	try {
		const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teams')
		const data = sheet.getDataRange().getValues() // includes headers
		const json = []

		for (let i = 1; i < data.length; i++) {
			const row = data[i]
			json.push({
				team: row[0],
				score: isNaN(parseInt(row[1])) ? 0 : parseInt(row[1]),
				members: row[2] ? row[2].split(',').map((name) => name.trim()) : []
			})
		}

		const payload = JSON.stringify(json, null, 2)
		const githubToken = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN')
		const repo = 'melchiorhering/melchiorhering.github.io'
		const path = 'src/data/teams.json'
		const branch = 'main'

		// Fetch current file SHA
		const sha = JSON.parse(
			UrlFetchApp.fetch(`https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`, {
				headers: { Authorization: `token ${githubToken}` }
			}).getContentText()
		).sha

		// Commit to GitHub
		UrlFetchApp.fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
			method: 'put',
			contentType: 'application/json',
			headers: {
				Authorization: `token ${githubToken}`,
				Accept: 'application/vnd.github.v3+json'
			},
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

// Update score on 'Win' or 'Draw'
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

// Manually test the onEdit handler
function testOnEdit() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teams')
	const range = sheet.getRange('D2')
	range.setValue('Win')

	onEdit({ source: SpreadsheetApp.getActiveSpreadsheet(), range })
}

// Return full JSON list of teams
function doGet() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teams')
	const data = sheet.getDataRange().getValues()
	const headers = data[0]

	const rows = data.slice(1).map((row) => {
		const obj = {}
		headers.forEach((h, i) => (obj[h.toLowerCase()] = row[i]))
		if (obj.members) obj.members = obj.members.split(',').map((name) => name.trim())
		return obj
	})

	return ContentService.createTextOutput(JSON.stringify(rows)).setMimeType(
		ContentService.MimeType.JSON
	)
}

/**
 * ---- SPELERS LOGIC ----
 */

// Accept POSTs to add a name to the "Spelers" sheet
function doPost(e) {
	Logger.log(JSON.stringify(e)) // Inspect the event object

	if (!e || !e.parameter || !e.parameter.name) {
		return ContentService.createTextOutput('Missing name').setMimeType(ContentService.MimeType.TEXT)
	}

	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Spelers')
	sheet.appendRow([new Date(), e.parameter.name])
	return ContentService.createTextOutput('Success')
}
