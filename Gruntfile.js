/*
 * marionette-boilerplate
 * https://github.com/shaekuronen/marionette-boilerplate
 *
 * Copyright (c) 2014 Shae Kuronen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var rewrite = require('connect-modrewrite');

  // Project configuration.
  grunt.initConfig({

    handlebars: {
      compile: {
        options: {
          namespace: "JST"
        },
        files: {
          "dev/templates/compiled.js": "dev/templates/**/*.hbs"
        }
      }
    },

    // start a node server
    connect: {
      preview: {
        options: {
          port: 9000,
          livereload: 35729,
          keepalive: true,
          base: './dev',
          hostname: 'localhost',

          // http://danburzo.ro/grunt/chapters/server/
          middleware: function(connect, options) {

            var middleware = [];

            // 1. mod-rewrite behavior
            var rules = [
                '!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html'
            ];
            middleware.push(rewrite(rules));

            // 2. original middleware behavior
            var base = options.base;
            if (!Array.isArray(base)) {
                base = [base];
            }
            base.forEach(function(path) {
                middleware.push(connect.static(path));
            });

            return middleware;

          }

        }
      }
    },

    watch: {
      dev: {
        files: 'dev/**/*',
        tasks: ['preview'],
        options: {
          debounceDelay: 250,
          livereload: true
        },
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'dev/js/site/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    }

  });

  // preview task
  grunt.registerTask('preview', [], function () {

    // load plugins for the task
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // execute the task
    grunt.task.run(
      'handlebars',
      'connect:preview',
      'watch'
    );

  });
  // end preview task

  // task
  grunt.registerTask('optimize', [], function () {

    // load plugins for the task
    grunt.loadNpmTasks('grunt-contrib-connect');

    // execute the task
    grunt.task.run(
      ''
    );

  });
  // end task

};
