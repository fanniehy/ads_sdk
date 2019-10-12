const path = require('path');

module.exports = {
	mode: 'development',
	entry: __dirname + '/src/index.ts',
	output: {
		path: path.join(__dirname, './dest/'),
		filename: 'app.js',
	},
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', ',js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: ['ts-loader'],
			},
		]
	}
}