/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: "hsla(228, 4%, 23%, 1)",
				texto: "hsla(0, 0%, 100%, 1)",
				textohover: "#9ca3af"
			},
			fontFamily: {
				roboto: ["Roboto", "serif"]
			},
			animation: {
				squeeze: "squeeze 0.6s ease-in-out infinite"
			},
			keyframes: {
				"squeeze": {
					"0%, 100%": {
						"transform": "scale(1, 1)"
					},
					"50%": {
						"transform": "scale(1.1, 0.9)"
					}
				}
			}
		},
	},
	plugins: [],
}
