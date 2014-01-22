'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        paths: {
            src: 'src',
            dest: 'build',
            js: 'js',
            css: 'css',
            res: 'res',
            src_js: '<%= paths.src %>/<%= paths.js %>',
            src_css: '<%= paths.src %>/<%= paths.css %>',
            src_res: '<%= paths.src %>/<%= paths.res %>',
            dest_js: '<%= paths.dest %>/<%= paths.js %>',
            dest_css: '<%= paths.dest %>/<%= paths.css %>',
            dest_res: '<%= paths.dest %>/<%= paths.res %>'
        },

        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },

        pkg: grunt.file.readJSON('package.json'),

        clean: [
            '<%= paths.dest %>'
        ],

        copy: {
            main: {
                expand: true,
                cwd: '<%= paths.src %>',
                src: [
                    '**'
                ],
                dest: '<%= paths.dest %>'
            }
        },

        processhtml: {
            dist: {
                files: {
                    '<%= paths.dest %>/index.html': [
                        '<%= paths.src %>/index.html'
                    ]
                }
            }
        },

        browserify: {
            dist: {
                files: {
                    '<%= paths.dest_js %>/bundle.js':[
                        '<%= paths.src_js %>/main.js'
                    ]
                }
            }
        },

        uglify: {
            phaser: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: ['<%= paths.dest_js %>/bundle.js'],
                dest: '<%= paths.dest_js %>/bundle.min.js'
            }
        }
    });

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'processhtml',
        'browserify',
        'uglify'
    ]);

}
