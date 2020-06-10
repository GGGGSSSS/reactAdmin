const { override } = require('customize-cra');
const path = require('path');
module.exports = {
    resolve: {
      alias: {
        "@src": path.resolve('src'),
      }
    }
} 
