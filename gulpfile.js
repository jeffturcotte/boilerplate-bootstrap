'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var csscomb = require('gulp-csscomb');
var autoprefixer = require('gulp-autoprefixer');

/* == Config == */

var directoryConfig = {
    sass: './docroot/css/',
    source: [this.sass + '*', '!**/node_modules/**'],
    destination: './docroot/css'
};

var fileConfig = {
    source: './docroot/css/**/*.scss',
    destination: './docroot/css'
};

/* == End Config == */

gulp.task('comb', function() {
    return gulp.src(fileConfig.source)
        .pipe(csscomb())
        .pipe(gulp.dest(directoryConfig.sass));
});

gulp.task('sass', function () {
    gulp.src(fileConfig.source)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer([
            'Android >= 4.1',
            'last 5 Chrome versions',
            'last 5 Firefox versions',
            'Explorer >= 11',
            'iOS >= 8',
            'Safari >= 9'
        ]))
        .pipe(gulp.dest(fileConfig.destination));
});

gulp.task('watch', function () {
    //Just Compile Sass
    gulp.watch(fileConfig.source, ['sass']);

});
