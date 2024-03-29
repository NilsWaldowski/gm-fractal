const gulp          = require('gulp')
const gulpif        = require('gulp-if')
const sass          = require('gulp-sass')
const sourcemaps    = require('gulp-sourcemaps')
const handleErrors  = require('./handleErrors')
const autoprefixer  = require('gulp-autoprefixer')
const gulpStylelint = require('gulp-stylelint');
const path          = require('path')
const cssnano       = require('gulp-cssnano')
const rename        = require('gulp-rename')
const fancyLog      = require('fancy-log')
const chalk         = require('chalk')
const emoji         = require('node-emoji')

const stylesheetsTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src,
            PATH_CONFIG.stylesheets.src, '**/*.{' + TASK_CONFIG.stylesheets.extensions + '}'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.stylesheets.dest)
    }

    fancyLog(chalk.bgGreen.white.bold(' ' + emoji.get('heart') + '  ' +
        'Compiling Stylesheets' + ' ' + emoji.get('heart') + '  '))

    const cssnanoConfig = TASK_CONFIG.stylesheets.cssnano || {}
    cssnanoConfig.autoprefixer = false // this should always be false, since we're autoprefixing separately

    return gulp.src([paths.src, '*!README.md'])
        .pipe(gulpif(!global.production, sourcemaps.init()))
        .pipe(gulpStylelint(TASK_CONFIG.stylesheets.styleLint))
        .on('error', handleErrors)
        .pipe(sass(TASK_CONFIG.stylesheets.sass))
        .on('error', handleErrors)
        .pipe(autoprefixer(TASK_CONFIG.stylesheets.autoprefixer))
        .pipe(gulpif(!global.production, sourcemaps.write()))
        .pipe(gulp.dest(paths.dest))
        .pipe(gulpif(global.production, cssnano(cssnanoConfig)))
        .pipe(gulpif(global.production, rename(TASK_CONFIG.stylesheets.rename)))
        .pipe(gulpif(global.production, gulp.dest(paths.dest)))
}

gulp.task('stylesheets', stylesheetsTask)
module.exports = stylesheetsTask
