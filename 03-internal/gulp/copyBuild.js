const changed     = require('gulp-changed')
const gulp        = require('gulp')
const path        = require('path')

const copyBuildTask = function() {

    const paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.dest, '**/*'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dist)
    }

    return gulp.src([paths.src, '*!README.md'])
        .pipe(gulp.dest(paths.dest))
}

gulp.task('copyBuild', copyBuildTask)
module.exports = copyBuildTask
