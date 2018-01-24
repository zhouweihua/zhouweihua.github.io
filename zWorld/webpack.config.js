var path = require('path')
var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

function resolve(dir) {
	console.log(__dirname);
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: __dirname + "/app/main.js",
	devtool: "source-map", //"source-map"  "cheap-module-source-map" "eval-source-map"
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},

	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': resolve('app'),
			'app': resolve('app')
		}
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			use: 'babel-loader'
		}, {
			test: /\.(css)$/,
			use: ['style-loader', 'css-loader'],
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 1000
			}
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
	],
}