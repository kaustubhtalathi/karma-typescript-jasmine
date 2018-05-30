// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      'karma-typescript'
    ],
    files: 
      [ './src/test.ts', './src/*.ts' ]
    ,
    exclude:['./node_modules/*.ts'],
    preprocessors: {
      './src/test.ts': ['karma-typescript']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
