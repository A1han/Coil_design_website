const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Coil_design_website/' // 改为你的仓库名称
      : '/'
})
