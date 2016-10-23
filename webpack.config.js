var path = require('path');

module.exports = {
  entry: {
    '00_intro_testing': './test/00_intro_testing.spec.js',
    '01_array': './test/01_array.spec.js',
    '02_object': './test/02_object.spec.js',
    '03_mutability': './test/03_mutability.spec.js',
    '04_function': './test/04_function.spec.js',
    '05_inheritance': './test/05_inheritance.spec.js',
    '06_context': './test/06_context.spec.js',
    'lodash': 'lodash.spec.js'
  },
  output: {
    filename: '[name].spec.js',
    path: path.join(__dirname, 'test/dist')
  },
  module: {
    loaders: [{
      test: /\.js$/, loader: 'babel-loader',  exclude: /node_module/
    }]
  }
};
