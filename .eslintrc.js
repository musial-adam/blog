module.exports = {
  globals: {
    __PATH_PREFIX__: true,
	},
	
	
	// extends: `react-app`,
	"env": {
		"browser": true,
	},
	"extends": [
		"airbnb",
		"prettier",
		"prettier/react"
	],
	"rules": {
		"react/jsx-filename-extension": 0,
		"prettier/prettier": [
			"error",
			{
				"trailingComma": "es5",
				"singleQuote": true,
				"printWidth": 80,
				"useTabs": false,
			}
		],
	},
	"parser": "babel-eslint",
	"plugins": [
		"prettier"
	]
}