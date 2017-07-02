const changed     = require('gulp-changed')
const gulp        = require('gulp')
const path        = require('path')

const fontsTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.fonts.src, '**/*'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dist, PATH_CONFIG.fonts.dist)
    }

    return gulp.src([paths.src, '*!README.md'])
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(gulp.dest(paths.dest))
}

gulp.task('fonts', fontsTask)
module.exports = fontsTask
