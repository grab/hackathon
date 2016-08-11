'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var webserver = require('gulp-webserver');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['sass', 'sass:watch', 'serve']);
