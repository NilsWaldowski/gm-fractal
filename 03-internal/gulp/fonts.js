const changed   = require('gulp-changed')
const gulp      = require('gulp')
const path      = require('path')
const fancyLog      = require('fancy-log')
const chalk         = require('chalk')
const emoji         = require('node-emoji')

const fontsTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src,
            PATH_CONFIG.fonts.src, '**/*.{' + TASK_CONFIG.fonts.extensions + '}'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.fonts.dest)
    }

    fancyLog(chalk.bgGreen.white.bold(' ' + emoji.get('heart') + '  ' +
        'Copy Fonts' + ' ' + emoji.get('heart') + '  '))

    return gulp.src([paths.src, '*!README.md'])
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(gulp.dest(paths.dest))
}

gulp.task('fonts', fontsTask)
module.exports = fontsTask
