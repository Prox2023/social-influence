const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		specPattern: './tests/integration/*.spec.js',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
