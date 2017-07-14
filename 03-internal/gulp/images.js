const changed   = require('gulp-changed')
const gulp      = require('gulp')
const imagemin  = require('gulp-imagemin')
const path      = require('path')
const fancyLog      = require('fancy-log')
const chalk         = require('chalk')
const emoji         = require('node-emoji')

const imagesTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src,
            PATH_CONFIG.images.src, '**/*.{' + TASK_CONFIG.images.extensions + '}'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.dest)
    }

    fancyLog(chalk.bgGreen.white.bold(' ' + emoji.get('heart') + '  ' +
        'Optimize Images' + ' ' + emoji.get('heart') + '  '))

    return gulp.src([paths.src, '*!README.md'])
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest(paths.dest))
}

gulp.task('images', imagesTask)
module.exports = imagesTask
