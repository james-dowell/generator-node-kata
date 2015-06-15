'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var files = [
  './helpers.js',
  './app/*.js',
  './app/*.spec.js',
  './app/**/*.js',
];

gulp.task('test', function () {

    return gulp.src(files, {read: false})
        .pipe($.mocha({
            reporter: 'nyan'
        }));

});

gulp.task('test:auto', ['test'], function (done) {

    gulp.task('test:watch', ['test']);
    gulp.watch(files, ['test:watch']);

});

<% if (babel == true) { %>

  gulp.task('es6', function () {

    return gulp.src(files)
      .pipe($.babel())
      .pipe(gulp.dest('dist'));
  });

<% } %>
