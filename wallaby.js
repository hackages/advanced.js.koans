module.exports = function (wallaby) {
  return {
    files: [
      'examples/*.js',
      'src/*.js'
    ],

    tests: [
      'test/*spec.js'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};
