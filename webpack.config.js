/**
 * @class       : webpack.config
 * @author      : DevEkla (ekla@ArchLinuxEkla)
 * @created     : jeudi janv. 19, 2023 17:36:37 CET
 * @description : webpack.config
 */

const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "./"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
      static:[{
          directory:path.join(__dirname, "public/"),
          publicPath: "http://localhost:3000/"
      },
          {
              directory:path.join(__dirname,"src/pages/"),
              publicPath: "http://localhost:3000/notes"
          }],
    port: 3000,
    historyApiFallback: true,
    // hot: "only"

  },
    plugins: [
    new HtmlWebpackPlugin({template:"./public/index.html"})
  ]
};

