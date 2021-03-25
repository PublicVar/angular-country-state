var gulp = require('gulp'),
    concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber')
;

gulp.task('minify-js', function(){
    return gulp.src(['./app/app.js', './app/directives/countryStateSelect.js'])
        .pipe(plumber())
        .pipe(gp_sourcemaps.init())
        .pipe(concat('angular-country-state.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(gp_rename('angular-country-state.min.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'))
    ;
});

gulp.task('watch',function(){
    gulp.watch(['app/**/*.js'],['minify-js']);
});

gulp.task('default', gulp.series('minify-js','watch'));