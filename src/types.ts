export type SiteConfig = {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	date: {
		locale: string | string[] | undefined
		options: Intl.DateTimeFormatOptions
	}
}

export type PaginationLink = {
	url: string
	text?: string
	srLabel?: string
}

export type SiteMeta = {
	title: string
	description?: string
	ogImage?: string | undefined
	// articleDate?: string | undefined
}

// Update type definition if necessary
export type Labels = {
	title: string
	icon: ImageMetadata // Ensure this is a string type for SVG path data
	logo?: ImageMetadata
	website?: string
}

// Define the structure for a blog post
export type BlogPost = {
	title: string
	url: string
	pubDate: string
	imagePath: string
}

export interface Tool {
	name: string
	iconName: string // Changed from logoUrl to iconName
}
