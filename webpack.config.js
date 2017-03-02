const webpack = require.main.require('webpack')

module.exports = {
  devtool: false,
  output: {
    publicPath: '/vue-web-compiler/' // same path as online version
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(require('./package.json').version)
    })
  ]
}
