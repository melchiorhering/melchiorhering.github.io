import { defineConfig } from 'astro/config'
// import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import svelte from '@astrojs/svelte'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://stijnhering.nl',
	// site: 'https://melchiorhering.github.io',
	// 'https://stijnhering.nl' for now using Github Pages
	integrations: [sitemap(), icon(), tailwind(), svelte()],
	prefetch: true,
	output: 'static'
})
