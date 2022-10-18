const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
})

// module.exports = ({
//   
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           require('postcss-pxtorem')({ rootValue: 16 , propList: ['*']}),
// ], 
// },
// }, },
// })
