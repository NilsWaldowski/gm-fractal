const gulp      = require('gulp')
const path      = require('path')
const watch     = require('gulp-watch')

const watchTask = function() {
    const watchableTasks = ['fonts', 'images', 'icons', 'misc', 'stylesheets', 'javascript', 'javascriptInline']

    function getTaskPathFor(taskName) {
        return PATH_CONFIG[taskName]
        /*
        switch (taskName) {
            case 'iconFont':
                return PATH_CONFIG.icons
            case 'svgSprite':
                return PATH_CONFIG.icons
            default:
                return PATH_CONFIG[taskName]
        }
        */
    }

    watchableTasks.forEach(function(taskName) {
        const taskConfig = TASK_CONFIG[taskName]
        const taskPath = getTaskPathFor(taskName)
        const watchConfig = {}

        if (taskConfig) {
            const srcPath = path.resolve(process.env.PWD, PATH_CONFIG.src, taskPath.src)
            const globPattern = '**/*' + (taskConfig.extensions ? '.{' + taskConfig.extensions.join(',') + '}' : '')
            watch(path.join(srcPath, globPattern), watchConfig, function() {
                require('./' + taskName)()
            })
        }
    })
}

gulp.task('watch', watchTask)
module.exports = watchTask
