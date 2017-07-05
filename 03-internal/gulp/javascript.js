const webpack       = require('webpack2-stream-watch')
const webpackConfig = require('../../webpack.config.js')
const gulp          = require('gulp')
const path          = require('path')

// @TODO replace webpack2-stream-watch -> https://css-tricks.com/combine-webpack-gulp-4/
const javascriptTask = function() {

    const paths = {
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascript.dest)
    }

    return webpack(webpackConfig)
        .pipe(gulp.dest(paths.dest));
}

gulp.task('javascript', javascriptTask)
module.exports = javascriptTask
