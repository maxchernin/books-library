/**
 * Created by Max on 3/8/2017.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
var OpenBrowserPlugin =  require("open-browser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports =  {
	entry: {
		main: './index.js',
		vendors: './vendors.js'
	},
	output: {
		filename: '[name].js',
		chunkFilename: "[name].[chunkhash].js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
			rules: [
				{
					test: /\.scss$/,
					use: [{
						loader: "style-loader" // creates style nodes from JS strings
					}, {
						loader: "css-loader" // translates CSS into CommonJS
					}, {
						loader: "sass-loader" // compiles Sass to CSS
					}]
				},
				{
					test: /\.sass$/,
					use: [{
						loader: "style-loader" // creates style nodes from JS strings
					}, {
						loader: "css-loader" // translates CSS into CommonJS
					}, {
						loader: "sass-loader" // compiles Sass to CSS
					}]
				},
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						use: 'css-loader'
					})
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						{loader: 'file-loader'}
					]
				},
				{
					test: /\.json$/,
					use: 'json-loader',
					exclude: /(\/node_modules)/
				},
				{
					test: /\.html/,
					use: 'raw-loader',
					exclude: /(\/node_modules)/
				}
			]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: 'body'}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
			minChunks: function (module) {
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		new ChunkManifestPlugin({
			filename: "chunk-manifest.json",
			manifestVariable: "webpackManifest"
		}),
		new webpack.HashedModuleIdsPlugin(),
		new WebpackChunkHash(),
		new ExtractTextPlugin('app/assets/booklib.scss'),
		new OpenBrowserPlugin({ url: 'http://localhost:4200' }),
		new webpack.ProvidePlugin({
			moment: 'moment'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery'
		}),
		new webpack.ProvidePlugin({
			toastr: 'toastr'
		}),
		new webpack.ProvidePlugin({
			_: 'lodash'
		}),
		new CopyWebpackPlugin([
			{from: 'app/assets', to: 'app/assets'},
			{from: 'app/lib', to: 'app/lib'}
		])

	],
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, "app"),
		watchContentBase: true,
		watchOptions: {
			poll: true
		},
		compress: true,
		port: 4200,
		clientLogLevel: 'error'
	}
};