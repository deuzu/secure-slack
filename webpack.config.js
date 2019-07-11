const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
    background: './src/background.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin([
      { from: './manifest.json', to: './manifest.json' },
    ]),
  ]
}
