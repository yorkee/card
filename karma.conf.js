module.exports = function (karma) {

  'use strict';

  karma.set({

    singleRun: false,
    autoWatch: false,
    logLevel: karma.LOG_ERROR,

    browsers: ['PhantomJS'],

    frameworks: [
      'mocha',
      'chai'
    ],
    
    files: [
      'src/card/*.js',
      'test/*.spec.js'
    ]

  });

};
