const gulp      = require('gulp')
const del       = require('del')
const path      = require('path')
const fancyLog      = require('fancy-log')
const chalk         = require('chalk')
const emoji         = require('node-emoji')

const cleanTask = function() {

    fancyLog(chalk.bgGreen.white.bold(' ' + emoji.get('heart') + '  ' +
        'Clean Dest' + ' ' + emoji.get('heart') + '  '))

    return del([path.resolve(process.env.PWD, PATH_CONFIG.dest)], {
        force: true
    })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
