const gulp      = require('gulp')
const path      = require('path')
const fancyLog      = require('fancy-log')
const chalk         = require('chalk')
const emoji         = require('node-emoji')

const copyBuildTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.dest, '**/*'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dist)
    }

    fancyLog(chalk.bgGreen.white.bold(' ' + emoji.get('heart') + '  ' +
        'Deploy' + ' ' + emoji.get('heart') + '  '))

    return gulp.src([paths.src, '*!README.md'])
        .pipe(gulp.dest(paths.dest))
}

gulp.task('copyBuild', copyBuildTask)
module.exports = copyBuildTask
