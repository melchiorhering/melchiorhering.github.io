---
// src/leaderboard/components/Hero.astro
import { useEffect, useState } from 'react'

type Team = {
	team: string
	score: number
	members: string[]
}

const DATA_URL =
	'https://raw.githubusercontent.com/your-username/leaderboard-data/main/teams.json'

const Hero = () => {
	const [topThree, setTopThree] = useState<Team[]>([])

	useEffect(() => {
		fetch(DATA_URL)
			.then((res) => res.json())
			.then((data: Team[]) => {
				const sorted = [...data].sort((a, b) => b.score - a.score)
				setTopThree(sorted.slice(0, 3))
			})
	}, [])

	const [first, second, third] = topThree

	return (
		<section className="py-16 text-center text-white bg-gray-800">
			<img
				src="/hero-image.jpg"
				alt="Hero Image"
				className="w-32 mx-auto mb-4 rounded-full"
			/>
			<h1 className="text-4xl font-bold">Leaderboard Showdown</h1>
			<p className="mt-2 text-lg">Track the scores. Rule the board.</p>

			{topThree.length === 3 && (
				<div className="flex items-end justify-center max-w-xl gap-4 mx-auto mt-12">
					{/* 2nd place */}
					<div className="flex flex-col items-center justify-end w-24 h-40 p-2 bg-gray-700 rounded-lg">
						<p className="mb-1 text-sm text-gray-300">2nd</p>
						<div className="text-lg font-semibold">{second.team}</div>
						<div className="text-sm text-gray-400">{second.score} pts</div>
					</div>

					{/* 1st place */}
					<div className="flex flex-col items-center justify-end w-24 p-2 text-black bg-yellow-500 rounded-lg shadow-lg h-52">
						<p className="mb-1 text-sm font-bold">🥇 1st</p>
						<div className="text-lg font-bold">{first.team}</div>
						<div className="text-sm">{first.score} pts</div>
					</div>

					{/* 3rd place */}
					<div className="flex flex-col items-center justify-end w-24 h-32 p-2 bg-gray-600 rounded-lg">
						<p className="mb-1 text-sm text-gray-300">3rd</p>
						<div className="text-lg font-semibold">{third.team}</div>
						<div className="text-sm text-gray-400">{third.score} pts</div>
					</div>
				</div>
			)}
		</section>
	)
}

export default Hero
