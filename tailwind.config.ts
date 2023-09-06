import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				sm: '600px',
				md: '900px',
				lg: '1028px',
				xl: '1440px',
			},

			animation: {
				fade: 'fadeOut 5s ease-in-out',
			},

			keyframes: (theme: any) => ({
				fadeOut: {
					'0%': { backgroundColor: theme('colors.red.300') },
					'100%': { backgroundColor: theme('colors.transparent') },
				},
			}),

			boxShadow: {
				'3xl': '0 10px 30px -15px rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [],
}
export default config
