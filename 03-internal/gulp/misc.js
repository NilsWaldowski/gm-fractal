const changed     = require('gulp-changed')
const gulp        = require('gulp')
const path        = require('path')

const miscTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.misc.src, '**/*'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dist, PATH_CONFIG.misc.dist)
    }

    return gulp.src([paths.src, '*!README.md'])
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(gulp.dest(paths.dest))
}

gulp.task('misc', miscTask)
module.exports = miscTask
