import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['one-dark-pro'],
				langs: ['javascript', 'typescript', 'java']
			})
			await highlighter.loadLanguage('javascript', 'typescript', 'java')
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'one-dark-pro' }))
			return `{@html \`${html}\` }`
		}
	},
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		prerender: {
			entries: [
				'/',
				'/blog',
				// '/blog/1'
			]
		},

		adapter: adapter({
			fallback: '404.html',
			strict: false,
		}),

		// paths: {
		// 	base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		// }
	},

	extensions: [
		'.svelte',
		'.svx',
		'.md', // read markdown extension
	]
};

export default config;