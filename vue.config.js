// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            // 设计稿除以10
            rootValue: 37.5,
            exclude: /(node_module)/,
            minPixelValue: 3
          })
        ]
      }
    }
  }
}
