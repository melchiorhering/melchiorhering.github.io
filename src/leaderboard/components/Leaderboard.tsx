// src/leaderboard/components/Leaderboard.tsx
import { useState, useEffect } from 'react'

type Team = {
	team: string
	score: number
	members: string[]
}

const DATA_URL = 'https://raw.githubusercontent.com/your-username/leaderboard-data/main/teams.json'

const Leaderboard = () => {
	const [teams, setTeams] = useState<Team[]>([])

	useEffect(() => {
		fetch(DATA_URL)
			.then((res) => res.json())
			.then((data: Team[]) => setTeams(data))
	}, [])

	const sortedTeams = [...teams].sort((a, b) => b.score - a.score)

	return (
		<section className='max-w-xl mx-auto mt-8'>
			<h2 className='mb-4 text-2xl font-bold'>Leaderboard</h2>
			<ul className='bg-white rounded-lg shadow'>
				{sortedTeams.map((team) => (
					<li className='p-4 border-b' key={team.team}>
						<div className='flex justify-between'>
							<span className='font-semibold'>{team.team}</span>
							<span className='text-xl'>{team.score}</span>
						</div>
						<div className='text-sm text-gray-600'>Members: {team.members.join(', ')}</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Leaderboard
