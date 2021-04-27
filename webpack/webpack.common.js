const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
      // any css files will be interpret by these 2 loaders
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //! position important
      },
      // any files with these extensions are treated as resources by webp
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // any files with these extensions are treated as inline ele by webp
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  // reduce everything into a file, put it under /build folder, give it the name `bundle.js`
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  // inject `bundle.js` above into `index.html` + place the `index.html` under `/build`
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: "./assets" }], //! to: "./build/assets" is wrong
    }),
  ],
};
