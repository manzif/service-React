const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = {
    entry: "./src/index.js", 
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      stats: 'minimal',
      overlay: true,
      historyApiFallback: true,
      disableHostCheck: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      https: false,
    },
    module: { 
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [ "babel-loader"]
        },
        {
          test: /(\.css)$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ]
        },
      ]
    },
    plugins: [htmlPlugin]
  };
