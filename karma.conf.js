var  brfs = require('brfs');

module.exports = function (karma) {

  'use strict';

  karma.set({

    frameworks: [
      'mocha',
      'chai',
      'browserify'
    ],
    
    files: [
      {pattern: 'src/*.js', included: false, served: false},
      {pattern: 'test/*.spec.js', included: true}
    ],


    browserify:{
      debug: true,
      transform: [brfs],
    },
    preprocessors: {
      'test/**/*.js': ['browserify']
    },

    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: karma.LOG_ERROR,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });

};
