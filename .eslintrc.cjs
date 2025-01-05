/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		'plugin:astro/recommended',
		'plugin:@typescript-eslint/recommended' // Ensure TypeScript recommendations are included
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		sourceType: 'module',
		ecmaVersion: 'latest',
		extraFileExtensions: ['.astro']
	},
	plugins: ['@typescript-eslint'], // Ensure TypeScript plugin is loaded
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
				ecmaVersion: 'latest'
			},
			extends: ['plugin:astro/recommended', 'plugin:@typescript-eslint/recommended'],
			rules: {
				// Add Astro-specific or TypeScript-specific rules here
				// Example:
				// 'astro/no-set-html-directive': 'error'
			}
		}
	],
	rules: {
		// Global rules for your project
		'no-unused-vars': 'off', // Let TypeScript handle unused vars
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
	}
}
