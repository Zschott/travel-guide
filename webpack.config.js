const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
      }),
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };