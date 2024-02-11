const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {resolve} = require("path");

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, '../assets/dist'),
		filename: 'bundle.min.js'
	},
	module: {
		rules: [
			// ...
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		],
	},

	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new MiniCssExtractPlugin(),
	],
};
