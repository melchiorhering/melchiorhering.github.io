import { defineConfig } from 'astro/config'
// import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://melchiorhering.github.io',
	// 'https://stijnhering.nl' for now using Github Pages

	integrations: [sitemap(), icon(), tailwind()],
	prefetch: true,
	output: 'static'
})
