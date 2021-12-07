// module.exports = {
//   transpileDependencies: [
//     'vuetify'
//   ],
// }
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: '../src/main/resources/static',
  devServer: {
      port: 3030,
      proxy: {
          '/api': {
              target: 'http://localhost:3000'
          }
      }
  },
  configureWebpack: {
  module: {
      exprContextCritical: false
      }
}
}