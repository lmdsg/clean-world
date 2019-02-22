const path = require('path');
const { SRC, DIST, ASSETS } = require('./paths');
const { presets } = require('./babel.config.js');

module.exports = {
  entry: {
    index: path.resolve(SRC, 'index.js'),
    gallery: path.resolve(__dirname, '../src', 'gallery.js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets },
        }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: DIST,
    filename: '[name].js',
    publicPath: ASSETS
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
}
