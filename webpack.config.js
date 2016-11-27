const webpack = require("webpack");

var environment = process.env.NODE_ENV;

module.exports = {
  context: __dirname + "/app/assets/components",
  entry: "./main.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/public/build",
    publicPath: "http://localhost:3020/build/"
  },

  plugins: environment == "production" ? [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("production")}
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, loaders: ["style", "css"] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url-loader" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] }
    ]
  }
}