module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        singleRun: false,
        background: false,
        autoWatch: true,
        logLevel: 'ON'
      }
    },
    browserify: {
      options: {
          browserifyOptions: {
              standalone: 'cardApi',
          },
      },
      'dest/card.js': ['src/*.js']
      // src: 'src/*.js',
      // dest: 'dest/card.js'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-browserify');
  
  grunt.registerTask('default', ['jshint', 'karma:unit']);

  
};