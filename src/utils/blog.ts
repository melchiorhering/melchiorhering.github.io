import type { BlogPost } from '@/types'
import Parser from 'rss-parser'

import { getFormattedDate } from './date'

// Function to fetch Medium posts and format them as blog posts
export async function fetchMediumPosts(username: string): Promise<BlogPost[]> {
	const parser = new Parser()
	const mediumRssFeedUrl = `https://medium.com/feed/@${username}`
	const feed = await parser.parseURL(mediumRssFeedUrl)
	const posts: BlogPost[] = feed.items.map((item) => ({
		title: item.title || 'No title',
		url: item.link || 'No link',
		pubDate: getFormattedDate(item.pubDate || '', {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		}),
		imagePath: extractImageFromContent(item['content:encoded'] || '')
	}))

	return posts
}

export function extractImageFromContent(content: string): string {
	// Regular expression to match the first image tag and capture the src attribute value
	const imgTagMatch = content.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/i)

	// If an image tag is found, return the source (src) URL of the first image
	// Otherwise, return the local placeholder image
	return imgTagMatch ? imgTagMatch[1] : 'https://i.imgur.com/1P0pTeK.png'
}
