const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');
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
      {
        plugin: CracoAlias,
        options: {
          baseUrl: './src',
          source: 'options',
          aliases: {
            "@file": "./src/file.js",
            "@dir": "./src/some/dir",
            // you can alias packages too
            "@material-ui": "./node_modules/@material-ui-ie10",
            "@src": "./"
        }
      }
    }
    ]

}