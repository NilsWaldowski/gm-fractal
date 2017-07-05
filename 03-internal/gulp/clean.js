const gulp = require('gulp')
const del = require('del')
const path = require('path')

const cleanTask = function() {
    return del([path.resolve(process.env.PWD, PATH_CONFIG.dest)], {
        force: true
    })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
