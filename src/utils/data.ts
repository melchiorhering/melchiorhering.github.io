import type { Labels, BlogPost } from '@/types'
import { fetchMediumPosts } from './blog'

// Icons
import workIcon from '../assets/svg/work.svg' // Import SVG path data as strings
import locationIcon from '../assets/svg/location.svg'
import linkedinIcon from '../assets/svg/linkedin.svg'
import githubIcon from '../assets/svg/github.svg'

// Logos
import postnlLogo from '../assets/postnl-logo.png'
import amsterdamLogo from '../assets/amsterdam-logo.png'
import linkLogo from '../assets/svg/link.svg'

export const labels: Labels[] = [
	{
		title: 'PostNL',
		icon: workIcon, // Ensure this is a string containing SVG path data
		logo: postnlLogo,
		website: 'https://www.postnl.nl/'
	},
	{
		title: 'Amsterdam',
		icon: locationIcon,
		logo: amsterdamLogo
	},
	{
		title: 'LinkedIn',
		icon: linkedinIcon,
		logo: linkLogo,
		website: 'https://www.linkedin.com/in/stijn-hering-contact/'
	},
	{
		title: 'GitHub',
		icon: githubIcon,
		logo: linkLogo,
		website: 'https://github.com/melchiorhering'
	}
]

export const about =
	'I’m a versatile Data Scientist with a strong background in Machine Learning, AI, Data Engineering, Web Development, and Cloud Computing. Technology excites me, and I have a knack for quickly picking up and applying new innovations. I balance creativity with practicality, aiming to deliver the best possible solutions. I’m proficient in a range of programming languages and cloud tools, and I enjoy taking on interdisciplinary projects where I can contribute in multiple roles. I’m committed to continuous learning, making sure I stay ahead of the curve in this fast-evolving field.'

// Static Blog Posts (as a fallback or default)
export const staticBlogPosts: BlogPost[] = [
	// {
	// 	title: 'The Rust programming language',
	// 	url: 'https://medium.com/auraidata/the-rust-programming-language-ff4c4627364',
	// 	imagePath: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*mSK2gjXEpD4tdFxe'
	// }
	// Add more articles if needed
]

// Fetch dynamic Medium posts and merge with static posts
export const allBlogPosts: Promise<BlogPost[]> = (async () => {
	const username = 'stijn.hering' // Medium username
	const mediumPosts = await fetchMediumPosts(username)
	return [...mediumPosts, ...staticBlogPosts] // Merge with static posts
})()
