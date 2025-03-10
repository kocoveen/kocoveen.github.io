import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.md'], // read markdown extension
	})],

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