import type { Labels, BlogPost } from '@/types'
import { fetchMediumPosts } from '../utils/blog'

// Icons
import linkedinIcon from '../assets/svg/linkedin.svg'
import githubIcon from '../assets/svg/github.svg'

// Logos
import postnlLogo from '../assets/postnl-logo.png'
import amsterdamLogo from '../assets/amsterdam-logo.png'

export const labels: Labels[] = [
	{
		title: 'PostNL',
		icon: postnlLogo, // Ensure this is a string containing SVG path data
		website: 'https://www.postnl.nl/'
	},
	{
		title: 'Amsterdam',
		icon: amsterdamLogo
	},
	{
		title: 'LinkedIn',
		icon: linkedinIcon,
		website: 'https://www.linkedin.com/in/stijn-hering-contact/'
	},
	{
		title: 'GitHub',
		icon: githubIcon,
		website: 'https://github.com/melchiorhering'
	}
]

export const about: string =
	'I’m a versatile Data Scientist with a strong background in Machine Learning, AI, Data Engineering, Web Development, and Cloud Computing. Technology excites me, and I have a knack for quickly picking up and applying new innovations. I balance creativity with practicality, aiming to deliver the best possible solutions. I’m proficient in a range of programming languages and cloud tools, and I enjoy taking on interdisciplinary projects where I can contribute in multiple roles. I’m committed to continuous learning, making sure I stay ahead of the curve in this fast-evolving field.'

export const experience = [
	{
		company: 'PostNL',
		role: 'Data Scientist | Software Engineer',
		period: '2024 – Today',
		logo: '/src/assets/postnl-logo.png',
		achievements: [
			'Led the development of the PostNL Data Science Platform, establishing the main infrastructure and implementing CI/CD pipelines for efficient deployment.',
			'Created the initial PostLit package, an internal Python package that seamlessly integrates with Streamlit.',
			'Initiated and developed the pipeline for a GenAI project aimed at reducing manual administrative workload.'
		]
	},
	{
		company: 'PostNL',
		role: 'Data Scientist | Data Engineer',
		period: '2022 – 2024',
		logo: '/src/assets/postnl-logo.png',
		achievements: [
			'Specialize in delivering valuable insights to business stakeholders through dashboards and reports.',
			'Advise on data matters, providing guidance to ensure effective data strategies.',
			'Integrate new data sources into our data lake and manage ETL processes in AWS.',
			'Focus on leveraging data to enhance operational efficiency and improve process reliability at PostNL.'
		]
	},
	{
		company: 'Aurai',
		role: 'Junior Data Engineer',
		period: 'Dec 2022 - Nov 2022',
		logo: '/src/assets/aurai-logo.png',
		achievements: [
			'Upon completion of the traineeship, I transitioned into a consultant role, undertaking assignments that apply my data engineering expertise to solve client challenges.'
		]
	}
]

// Fetch dynamic Medium posts and merge with static posts
export const allBlogPosts: Promise<BlogPost[]> = (async () => {
	const username = 'stijn.hering' // Medium username
	const mediumPosts = await fetchMediumPosts(username)
	return [...mediumPosts] // Merge with static posts
})()
