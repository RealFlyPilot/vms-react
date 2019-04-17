const path = require('path')

const config = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../src')
      }
    ]
  }
}

module.exports = async ({ config }) =>
  console.dir(config.plugins, { depth: null }) || config
