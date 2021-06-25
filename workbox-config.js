module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{eot,svg,ttf,woff,woff2,png,js,webmanifest,wav,css,ico,html,json,md}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};