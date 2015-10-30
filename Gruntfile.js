module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    bower: {
      install: {
        options: {
          targetDir: 'www/lib',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: true
        }
      }
    },
    browserify: {
      dist: {
        src: 'node_modules/mqtt/mqtt.js',
        dest: 'www/lib/mqtt/mqtt.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', [
    'bower:install',
    'browserify:dist'
  ]);
};
