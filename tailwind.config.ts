import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				slideIn: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				slideOut: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-120%)" },
				},
			},
			animation: {
				"slide-in": "slideIn 0.3s ease-out forwards",
				"slide-out": "slideOut 0.3s ease-out forwards",
			},
		},
	},
	plugins: [],
};
export default config;
