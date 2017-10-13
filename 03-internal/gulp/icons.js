const changed   = require('gulp-changed')
const gulp      = require('gulp')
const imagemin  = require('gulp-imagemin')
const svgSprite = require('gulp-svg-sprite')
const path      = require('path')
const fancyLog  = require('fancy-log')
const chalk     = require('chalk')
const emoji     = require('node-emoji')
const npmRun    = require('npm-run')

const iconsTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src,
            PATH_CONFIG.icons.src, '**/*.{' + TASK_CONFIG.icons.extensions + '}'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.icons.dest)
    }

    fancyLog(chalk.bgGreen.white.bold(' ' + emoji.get('heart') + '  ' +
        'Optimize Icons & create Sprite' + ' ' + emoji.get('heart') + '  '))

    /*
    @TODO: try to implement SVGSON directy to the icon task!
    npmRun.exec('svgson -i ../../01-src/icons -t -p', function (err, stdout, stderr) {
        // err Error or null if there was no error
        // stdout Buffer|String
        // stderr Buffer|String
        console.log(stdout);
    })
    */

    return gulp.src([paths.src, '*!README.md'])
        //.pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dest))
        .pipe(svgSprite(TASK_CONFIG.icons.settings))
        .pipe(gulp.dest(paths.dest))
}

gulp.task('icons', iconsTask)
module.exports = iconsTask
