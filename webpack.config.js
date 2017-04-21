const path = require('path');

//Directory which will contain third party libraries and build js
const BUILD_DIR = path.resolve(__dirname, 'public');

//Directory which contains our app source codes
const APP_DIR = path.resolve(__dirname, 'src'); 

module.exports = {
  //Entry point to our app
  entry: {
    app: APP_DIR + '/index.js',
  },
  //Where the bundled js file to be located after successful build
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        //Babel to lookup for js/jsx files except node_modules folder
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
           plugins: [
             'transform-object-rest-spread',
             'transform-class-properties',
             'transform-runtime',
             'add-module-exports',
             'transform-decorators-legacy',
             'transform-react-display-name'
           ],
           presets: ['es2015', 'stage-0', 'react'],
         }
      }
   ]
  }
}
