const { defineConfig } = require('@vue/cli-service')

const target = 'http://localhost:8080';
module.exports = defineConfig({
    devServer: {
      port: 8080,
      proxy: {
          //proxy 요청을 보낼 api 시작 부분
          '^/api': {
              target,
              changeOrigin: true
          }
      }
  },
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave:false,
})

