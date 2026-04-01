import type { Labels, BlogPost, Tool, Job } from '@/types'
import { fetchMediumPosts } from '../utils/blog'

// Icons
import linkedinIcon from '@/icons/linkedin.svg'
import githubIcon from '@/icons/github.svg'

// Logos
import postnlLogo from '@/assets/postnl-logo.png'
import amsterdamLogo from '@/assets/amsterdam-flag.png'

export const heroData = {
	description: {
		text: 'I’m a versatile Data/ML Engineer and habitual tinkerer who builds scalable, user-friendly solutions from the infrastructure up. Driven by a fast-learning mindset, I bridge the gap between DevOps and Intelligence—leveraging a deep stack of Python, TypeScript, Kubernetes, and Cloud architecture to orchestrate production-ready ML/AI systems and autonomous Agents.',
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

export const toolsData: Tool[] = [
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
		name: 'Kubernetes',
		iconName: 'devicon:kubernetes'
	},
	{
		name: 'Pulumi',
		iconName: 'logos:pulumi-icon'
	},
	{
		name: 'Terraform',
		iconName: 'logos:terraform-icon'
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
		name: 'Databricks',
		iconName: 'simple-icons:databricks',
		colorClass: 'text-[#FF3621]' // Databricks Brand Color
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
		name: 'Zed',
		iconName: 'devicon:zed'
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
	"I’m a Data/ML/AI Engineer who thrives in the 'grassroots' stage of a project—building order from chaos when the path forward isn't yet defined. With a foundation spanning Data, AI, DevOps, and Full-Stack, I specialize in architecting end-to-end systems that turn raw data into production-ready impact. I’m a firm believer in Infrastructure as Code (IaC), whether I’m orchestrating Kubernetes clusters or deploying cloud-native pipelines on AWS and Azure. From tinkering with autonomous AI Agents to bridging the gap between complex backend logic and intuitive interfaces, I use a modern stack of Python, TypeScript, and Rust to build scalable solutions that solve real-world problems."

export const experience: Job[] = [
	{
		company: 'Team Rockstars IT',
		role: 'Data, ML & AI Engineer',
		period: 'May 2025 – Present',
		logo: '/src/assets/teamrockstars-logo.webp',
		borderColorClass: 'border-yellow-400 dark:border-yellow-500',
		achievements: [
			'Employed as a consultant focusing on data engineering, machine learning, and AI solutions for enterprise clients.'
		],
		clients: [
			{
				company: 'Rabobank',
				role: 'Data Scientist | AI Engineer',
				period: 'Apr 2026 – Present',
				logo: '/src/assets/rabobank-logo.png',
				achievements: [
					'Part of the Agentic team.',
					'Building agentic workflows and setups to automate complex internal processes.'
				]
			},
			{
				company: 'TenneT TSO',
				role: 'Data Engineer | ML Engineer',
				period: 'May 2025 – Dec 2025',
				logo: '/src/assets/tennet-logo.jpg',
				achievements: [
					'Worked on a critical data migration project, moving from an on-premise solution to an Azure cloud data platform.',
					'Built robust data pipelines to ingest and process data across various external and internal sources.',
					'Leveraged Azure, Azure Databricks, PySpark, and Azure Data Factory.'
				]
			}
		]
	},
	{
		company: 'PostNL',
		role: 'Data Scientist | Software Engineer | AI Engineer',
		period: 'Feb 2024 – May 2025',
		logo: '/src/assets/postnl-logo.png',
		borderColorClass: 'border-[#f06601] dark:border-[#f06601]',
		achievements: [
			'Transitioned to internal employee.',
			'Led the development of the internal Data Science Portal using AWS CDK and CI/CD pipelines — now hosting 40+ Data Scientists and 30+ production apps.',
			'Created the initial PostLit Python package for integrating Streamlit dashboards into the PostNL ecosystem.',
			'Developed PostNLChat, an internal ChatGPT-like interface, and built a GenAI workflow that automates call summaries for the sales team.'
		]
	},
	{
		company: 'Aurai',
		role: 'Data Engineer',
		period: 'Dec 2022 – Feb 2024',
		logo: '/src/assets/aurai-logo.png',
		borderColorClass: 'border-black dark:border-white',
		achievements: [
			'Completed a rigorous traineeship and transitioned into consultancy, applying data engineering principles to real-world client problems.'
		],
		clients: [
			{
				company: 'PostNL',
				role: 'Data Scientist | Data Engineer',
				period: 'Jun 2022 – Feb 2024',
				logo: '/src/assets/postnl-logo.png',
				achievements: [
					'Delivered insights via dashboards and reports to support data-driven decisions.',
					'Guided stakeholders on data architecture and integration strategy.',
					'Maintained and extended ETL pipelines and managed data lake ingestion in AWS.',
					'Improved operational efficiency by embedding data-driven workflows.'
				]
			}
		]
	}
]

// Fetch dynamic Medium posts and merge with static posts
export const allBlogPosts: Promise<BlogPost[]> = (async () => {
	const username = 'stijn.hering' // Medium username
	const mediumPosts = await fetchMediumPosts(username)
	return [...mediumPosts] // Merge with static posts
})()
