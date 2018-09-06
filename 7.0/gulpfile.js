const { src, dest, watch } = require('gulp');
const uglify = require('gulp-uglify');
const csso   = require('gulp-csso');
const rename = require('gulp-rename');

// css
exports.css = function () {
    return src('styles/*.css')
    .pipe(src('styles/*.css'))
    .pipe(dest('styles/'))
    .pipe(csso({
        restructure: true
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('styles/'));
}

// js
exports.js = function () {
    return src('scripts/*.js')
    .pipe(src('scripts/*.js'))
    .pipe(dest('scripts/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('scripts/'));
}

// default