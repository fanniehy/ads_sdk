const path = require('path');
const webpack=require('webpack');

module.exports = {
	entry: __dirname + '/src/index.ts',
	output: {
		path: path.join(__dirname, './dest/'),
		filename: 'app.js',
		publicPath: '/dest/',
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	devServer: {
		port: 1311,
		open: true,
        historyApiFallback: true,
        inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: '/node_modules/',
			},
		]
	}
}