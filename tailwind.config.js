/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/apps/traveler/*.{html,jsx, js}",
		"./src/apps/traveler/*.js",
		"./src/apps/traveler/*.html",
		
		"!.hoverpreview.temp.html"
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#fff',
				secondary: "#000",
			}
		},
	},
	plugins: [],
}

