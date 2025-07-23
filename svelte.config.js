import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang) => {
					const highlighter = await createHighlighter({
						themes: ['github-dark', 'github-light'],
						langs: [
							'javascript',
							'typescript',
							'python',
							'rust',
							'go',
							'cpp',
							'c',
							'java',
							'haskell',
							'ocaml',
							'zig',
							'swift',
							'bash',
							'json',
							'html',
							'css',
							'svelte',
							'markdown'
						]
					});

					// Clean up the code by removing leading whitespace consistently
					const lines = code.split('\n');
					const minIndent = lines
						.filter(line => line.trim().length > 0)
						.map(line => line.match(/^(\s*)/)[1].length)
						.reduce((min, indent) => Math.min(min, indent), Infinity);
					
					const cleanCode = lines
						.map(line => line.slice(minIndent))
						.join('\n')
						.trim();

					const html = highlighter.codeToHtml(cleanCode, {
						lang: lang || 'text',
						theme: 'github-dark'
					});
					return `{@html \`${html.replace(/`/g, '\\`')}\`}`;
				}
			}
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : ''
		}
	}
};

export default config;
