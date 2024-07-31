/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/apps/navigation/*.{html,jsx, js}",
		"./src/apps/navigation/*.js",
		"./src/apps/navigation/*.html",
		
		"!.hoverpreview.temp.html"
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#0A8DD3',
				secondary: "#080808",
				outlineColor: "#1F2123"
			}
		},
	},
	plugins: [],
}

