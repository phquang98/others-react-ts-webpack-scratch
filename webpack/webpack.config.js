const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // where webp should start to create the dependency tree
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  // allow to import swhere/sth, not swhere/sth.tsx
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  //? if file is a module and regex check ending is .tsx, .ts, .js exclude node_modules folder
  //? -> use babel-loader as loader
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  // reduce everything into a file, put it under /build folder, give it the name `bundle.js`
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  // required by webp
  mode: "development",
  // inject `bundle.js` above into `index.html` + place the `index.html` under `/build`
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
