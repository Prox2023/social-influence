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
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
	],
};
