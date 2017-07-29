const gulp = require('gulp')
const path = require('path')
const requireDir = require('require-dir')

const f = require('./fractal.js')

// Fallback for windows backs out of node_modules folder to root of project
process.env.PWD = process.env.PWD || path.resolve(process.cwd(), '../../')

// Globally expose config objects
const packageJson = require('./package.json')
global.PATH_CONFIG = packageJson.paths
global.TASK_CONFIG = packageJson.taskConfig


// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./03-internal/gulp', { recurse: false })


/**
* Fractal Browser-Sync
*/
gulp.task('fractal:start', function(){
    const server = f.fractal.web.server({
        sync: true
    })
    server.on('error', err => f.logger.error(err.message))
    return server.start().then(() => {
        f.logger.success(`Fractal server is now running at ${server.url}`)
    })
})

/**
* Fractal Build
*/
gulp.task('fractal:build', function(){
    const builder = f.fractal.web.builder()
    builder.on('progress', (completed, total) => f.logger.update(`Exported ${completed} of ${total} items`, 'info'))
    builder.on('error', err => f.logger.error(err.message))
    return builder.build().then(() => {
        f.logger.success('Fractal build completed!')
    })
})

/**
* Init Assets
*/
gulp.task('init', gulp.series('clean',
    gulp.parallel(
        'stylesheets',
        'javascript',
        'javascriptInline',
        'modernizr',
        'images',
        'icons',
        'misc',
        'fonts'
    )
))


/**
* Init Assets with Production Mode
*/
gulp.task('build', gulp.series(function(done) {
    global.production = true
    done()
}, 'init'))


/**
* Watchs Assets & Start Fractal Browser-Sync
*/
gulp.task('watch-and-serve', gulp.parallel('watch', 'fractal:start'))


/**
* Init Assets and start Watcher & Fractal Browser-Sync afterwards
*/
gulp.task('default', gulp.series('init', 'watch-and-serve'))


/**
* Deploy
*/
gulp.task('deploy', gulp.series('build', 'copyBuild'))


/**
* Jenkins
*/
gulp.task('jenkins', gulp.series('build', 'fractal:build'))
