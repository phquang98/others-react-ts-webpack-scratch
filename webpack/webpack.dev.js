const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // enable hot reload
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true, // same effect when provided in npm script
    open: true, // same effect in npm script --open
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Sonny"),
    }),
    new ReactRefreshWebpackPlugin(),
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
    }),
  ],
};
