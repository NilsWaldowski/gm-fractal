const gulp      = require('gulp')
const gulpif    = require('gulp-if')
const uglify    = require('gulp-uglify')
const path      = require('path')
const rename    = require('gulp-rename')
const fancyLog      = require('fancy-log')
const chalk         = require('chalk')
const emoji         = require('node-emoji')

const javascriptInlineTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src,
            PATH_CONFIG.javascriptInline.src, '**/*.{' + TASK_CONFIG.javascriptInline.extensions + '}'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascriptInline.dest)
    }

    fancyLog(chalk.bgGreen.white.bold(' ' + emoji.get('heart') + '  ' +
        'Process Javascript Inline' + ' ' + emoji.get('heart') + '  '))

    return gulp.src([paths.src, '*!README.md'])
        .pipe(gulp.dest(paths.dest))
        .pipe(gulpif(global.production, rename(TASK_CONFIG.javascriptInline.rename)))
        .pipe(gulpif(global.production, uglify()))
        .pipe(gulpif(global.production, gulp.dest(paths.dest)))
}

gulp.task('javascriptInline', javascriptInlineTask)
module.exports = javascriptInlineTask
