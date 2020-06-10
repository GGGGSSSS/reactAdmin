const CracoLessPlugin = require('craco-less');
const path = require("path");

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            modifyVars: { '@primary-color': '#332222' },
            javascriptEnabled: true,
          },
        },
      },
    ],
  //   resolve: {
  //     alias: {
  //       "@src": path.resolve('src'),
  //     }
  //   }
  // } 
}