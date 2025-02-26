/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			screens: {
			  // Custom height breakpoints
			  'h-sm': { raw: '(min-height: 670px)' },
			  'h-md': { raw: '(min-height: 720px)' },
			  'h-lg': { raw: '(min-height: 1024px)' },
			  'xs': { raw: '(min-width: 420px)' },
			},
		}
	},
	plugins: [
        require('flowbite/plugin'),
		require('tailwindcss-animated')
    ],
}
