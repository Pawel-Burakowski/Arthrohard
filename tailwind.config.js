/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#111111",
				red: "#AB303C",
				green: "#30AB4C",
				backgroundColor: "#f6f6f6",
				backgroundColor2: "#D9D9D9"
			},
			fontSize: {
				heading: "120px",
			},
			fontFamily: {
				lato: ["Lato"],
			},
			boxShadow: {
				custom: "0px 4px 4px 0px rgba(0,0,0,25%)",
			},
			transitionDuration: {
				200: "200ms",
			},
			screens: {
				vsm: "425px",
			},
		},
	},
	plugins: [],
}
