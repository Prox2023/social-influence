const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {resolve} = require("path");

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: resolve(__dirname, '../assets/dist'),
		filename: 'bundle.min.js'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(), // Minify JavaScript
			new CssMinimizerPlugin(), // Minify CSS
		],
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, // Extracts CSS into separate files
					'css-loader',  // Translates CSS into CommonJS
					'sass-loader'  // Compiles Sass to CSS
				],
			},
			// Rule for Jav
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
		// Plugin for extracting CSS into separate files
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
};
