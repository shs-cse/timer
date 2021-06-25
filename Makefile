build: npm postcss uglifyjs

npm:
	npm i

postcss: npm
	npm run postcss

uglifyjs: npm
	npm run uglifyjs