'use strict'
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const merge = require('webpack-merge')

module.exports = {
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('^@/', resolve('src'))
  },
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
}
