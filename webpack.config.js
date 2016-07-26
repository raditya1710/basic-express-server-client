var path = require('path');

var assetsPath = path.join(__dirname, "public", "assets");

module.exports = [{
  entry: [
    './app/index.js'
  ],
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}];
