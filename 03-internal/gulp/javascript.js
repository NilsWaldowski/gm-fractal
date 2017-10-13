const webpack       = require('webpack2-stream-watch')
const webpackConfig = require('../../webpack.config.js')
const gulp          = require('gulp')
const gulpif        = require('gulp-if')
const uglify        = require('gulp-uglify')
const path          = require('path')
const rename        = require('gulp-rename')
const fancyLog      = require('fancy-log')
const chalk         = require('chalk')
const emoji         = require('node-emoji')

// @TODO replace webpack2-stream-watch -> https://css-tricks.com/combine-webpack-gulp-4/
const javascriptTask = function() {

    const paths = {
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascript.dest)
    }

    fancyLog(chalk.bgGreen.white.bold(' ' + emoji.get('heart') + '  ' +
        'Compiling Javascript' + ' ' + emoji.get('heart') + '  '))

    return webpack(webpackConfig)
        .pipe(gulp.dest(paths.dest))
        .pipe(gulpif(global.production, rename(TASK_CONFIG.javascript.rename)))
        .pipe(gulpif(global.production, uglify()))
        .pipe(gulpif(global.production, gulp.dest(paths.dest)))
}

gulp.task('javascript', javascriptTask)
module.exports = javascriptTask
