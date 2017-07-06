const gulp      = require('gulp')
const path      = require('path')
const modernizr = require('gulp-modernizr')
const gulpif    = require('gulp-if')
const uglify    = require('gulp-uglify')
const rename    = require('gulp-rename')

const modernizrTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src,
            PATH_CONFIG.javascript.src, '**/*.{' + TASK_CONFIG.javascript.extensions + '}'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascriptInline.dest)
    }

    return gulp.src([paths.src, '*!README.md'])
        .pipe(modernizr('modernizr-custom.js', TASK_CONFIG.modernizr.settings))
        .pipe(gulp.dest(paths.dest))
        .pipe(gulpif(global.production, rename(TASK_CONFIG.modernizr.rename)))
        .pipe(gulpif(global.production, uglify()))
        .pipe(gulpif(global.production, gulp.dest(paths.dest)))
}

gulp.task('modernizr', modernizrTask)
module.exports = modernizrTask
