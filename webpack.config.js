var webpack = require("webpack");
var path = require("path");
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	devtool: "source-map",
	entry: [
		path.resolve(ROOT_PATH, "./src/app.js"),
	],
	module: {
		preLoaders: [{
			test: /\.js?$/,
			loaders: ['eslint'],
			include: path.resolve(ROOT_PATH, 'app')
		}],
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel']
		},
		{
			test: /\.less$/,
			loaders: ["style", "css", "less"]
		}]
	},
	resolve: {
		extensions: ["", ".js"]
	},
	output: {
		path: __dirname,
		publicPath: "/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./",
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: "react",
			ReactDOM: "react-dom"
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	]
};
