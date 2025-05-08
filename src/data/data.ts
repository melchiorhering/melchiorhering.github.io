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
	'I’m an engineer with a background in Data Science, Data Engineering, and Software Development. I work across the stack, with deep expertise in Python and TypeScript, and experience in SQL and Rust. I build scalable solutions that combine data pipelines, machine learning, and modern web applications. I’ve led projects involving predictive modeling, ETL workflows, and generative AI using tools like HuggingFace, ChatGPT, Claude, and SageMaker. I also design cloud-native systems using AWS, Azure, and infrastructure-as-code with CDK. My focus is on turning data into impact — creating intuitive applications with frameworks like FastAPI, Streamlit, React, Astro, and Django.'

export const experience = [
	{
		company: 'PostNL',
		role: 'Data Scientist | Software Engineer',
		period: 'Feb 2024 – May 2025',
		logo: '/src/assets/postnl-logo.png',
		achievements: [
			'Led the development of the internal Data Science Portal using AWS CDK and CI/CD pipelines — now hosting 40+ Data Scientists and 30+ production apps.',
			'Created the initial PostLit Python package for integrating Streamlit dashboards into the PostNL ecosystem.',
			'Developed PostNLChat, an internal ChatGPT-like interface, and built a GenAI workflow that automates call summaries for the sales team.'
		]
	},
	{
		company: 'PostNL',
		role: 'Data Scientist | Data Engineer',
		period: 'Jun 2022 – Feb 2024 ',
		logo: '/src/assets/postnl-logo.png',
		achievements: [
			'Delivered insights via dashboards and reports to support data-driven decisions.',
			'Guided stakeholders on data architecture and integration strategy.',
			'Maintained and extended ETL pipelines and managed data lake ingestion in AWS.',
			'Improved operational efficiency by embedding data-driven workflows.'
		]
	},
	{
		company: 'Aurai',
		role: 'Junior Data Engineer',
		period: 'Dec 2022 - Nov 2023',
		logo: '/src/assets/aurai-logo.png',
		achievements: [
			'Completed traineeship and transitioned into consultancy, applying data engineering principles to real-world client problems.'
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
		text: 'I’m a versatile Data/ML Engineer skilled in Python, TypeScript, ML/AI, the Web, Cloud, Databases, and DevOps. I build scalable, user-friendly solutions using modern technologies and a fast-learning mindset.',
		class: 'text-gray-600 dark:text-white'
	},
	buttons: [
		{
			text: 'Resume',
			href: '/resume-stijn-hering.pdf',
			iconName: 'download',
			class: 'bg-blue-600 hover:bg-blue-900'
		},
		{
			text: 'Contact',
			href: 'https://www.linkedin.com/in/stijn-hering-contact/',
			iconName: 'e-mail',
			class: 'bg-slate-700 hover:bg-slate-400'
		}
	],
	heading: {
		class: 'font-mono text-[34px] md:text-5xl font-semibold text-gray-800 dark:text-white'
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
			text: 'And Software Engineering...',
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
		name: 'VSCode',
		iconName: 'devicon:vscode'
	},
	{
		name: 'Git',
		iconName: 'logos:git-icon'
	},
	{
		name: 'GitHub Copilot',
		iconName: 'logos:github-copilot'
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
