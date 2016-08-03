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
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000' },
      { exclude: /node_modules/,
        loader: 'babel',
        query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}];
