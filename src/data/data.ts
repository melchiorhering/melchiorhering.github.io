import type { Labels, BlogPost } from '@/types'
import { fetchMediumPosts } from '../utils/blog'

// Icons
import linkedinIcon from '@/icons/linkedin.svg'
import githubIcon from '@/icons/github.svg'

// Logos
import postnlLogo from '@/assets/postnl-logo.png'
import amsterdamLogo from '@/assets/amsterdam-flag.png'

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

export const heroData = {
	description: {
		text: 'I’m a versatile Data/ML Engineer skilled in Python, TypeScript, ML/AI, Cloud, Databases and DevOps. With a background in ML, AI, Data Engineering, Web Development, and Cloud, I swiftly adopt new technologies to build scalable, user-friendly solutions that solve real problems.',
		class: 'text-gray-600 dark:text-white'
	},
	buttons: [
		{
			text: 'Resume',
			href: '/resume-stijn-hering.pdf',
			iconName: 'download',
			class:
				'flex justify-center items-center space-x-2 w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:w-auto font-mono'
		},
		{
			text: 'Contact',
			href: '#contact',
			iconName: 'e-mail',
			class:
				'flex justify-center items-center space-x-2 w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-slate-700 rounded-lg hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:w-auto font-mono'
		}
	],
	heading: {
		class: 'font-mono text-4xl md:text-5xl font-semibold text-gray-800 dark:text-white'
	},
	texts: [
		{
			text: 'Hi. Welcome!',
			class:
				'text-transparent bg-clip-text bg-gradient-to-r from-black to-sky-400 dark:from-white dark:to-sky-400',
			delay: 70
		},
		{
			text: 'I do some Data Science...',
			class:
				'text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 dark:from-sky-400 dark:to-sky-600',
			delay: 70
		},
		{
			text: 'Also some Data Engineering...',
			class:
				'text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-sky-700 dark:from-sky-300 dark:to-sky-500',
			delay: 70
		},
		{
			text: 'Lots of Software Engineering...',
			class:
				'text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-500 dark:from-sky-500 dark:to-sky-300',
			delay: 70,
			pauseFor: 1500
		},
		{
			text: 'I build things!',
			class:
				'text-transparent bg-clip-text bg-gradient-to-r from-black to-sky-600 dark:from-white dark:to-sky-600',
			delay: 70,
			pauseFor: 1500
		},
		{
			text: "Hi, I'm Stijn.",
			class:
				'text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-black dark:from-sky-400 dark:via-sky-500 dark:to-white font-bold',
			delay: 100,
			final: true
		}
	]
}

export const toolsData = [
	{
		name: 'Python',
		iconName: 'logos:python'
	},
	{
		name: 'TypeScript',
		iconName: 'logos:typescript-icon'
	},
	{
		name: 'Rust',
		iconName: 'logos:rust'
	},
	{
		name: 'Streamlit',
		iconName: 'logos:streamlit'
	},
	{
		name: 'Astro',
		iconName: 'logos:astro-icon'
	},
	{
		name: 'React',
		iconName: 'logos:react'
	},
	{
		name: 'TailwindCSS',
		iconName: 'logos:tailwindcss-icon'
	},
	{
		name: 'Docker',
		iconName: 'logos:docker-icon'
	},
	{
		name: 'AWS',
		iconName: 'logos:aws'
	},
	{
		name: 'Azure',
		iconName: 'logos:azure-icon'
	},
	{
		name: 'Hono',
		iconName: 'logos:hono'
	},
	{
		name: 'Deno',
		iconName: 'logos:deno'
	},
	{
		name: 'Bun',
		iconName: 'logos:bun'
	},
	{
		name: 'Github Actions',
		iconName: 'logos:github-actions'
	},
	{
		name: 'Figma',
		iconName: 'logos:figma'
	},
	{
		name: 'HuggingFace',
		iconName: 'logos:hugging-face-icon'
	},
	{
		name: 'Linux',
		iconName: 'logos:linux-tux'
	},
	{
		name: 'Zsh',
		iconName: 'logos:zsh'
	},
	{
		name: 'Bash',
		iconName: 'logos:bash-icon'
	},
	{
		name: 'FastAPI',
		iconName: 'logos:fastapi-icon'
	},
	{
		name: 'SurrealDB',
		iconName: 'logos:surrealdb-icon'
	},
	{
		name: 'Milvus',
		iconName: 'logos:milvus-icon'
	},
	{
		name: 'PostgreSQL',
		iconName: 'logos:postgresql'
	}
]
