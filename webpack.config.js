const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const isDev=process.env.NODE_ENV==="development";
module.exports = {
	entry: "index.js",
	mode:process.env.NODE_ENV,
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "bundle.js",
	},
	plugins: [
		!isDev && new BundleAnalyzerPlugin({
			analyzerMode: "static",
			reportFilename: "report.html",
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
		}),
	].filter(Boolean),
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat",
		},
  },
};
