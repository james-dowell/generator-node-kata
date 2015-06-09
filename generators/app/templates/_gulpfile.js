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

gulp.task('test:auto', function (done) {

    gulp.task('test:watch', ['test']);
    gulp.watch(files, ['test:watch']);

});
