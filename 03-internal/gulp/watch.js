var gulp = require('gulp')
var path = require('path')
var watch = require('gulp-watch')

var watchTask = function() {
    var watchableTasks = ['fonts', 'images', 'misc', 'stylesheets', 'javascript']

    function getTaskPathFor(taskName) {
        switch (taskName) {
            case 'iconFont':
                return PATH_CONFIG.icons
            case 'svgSprite':
                return PATH_CONFIG.icons
            default:
                return PATH_CONFIG[taskName]
        }
    }

    watchableTasks.forEach(function(taskName) {
        var taskConfig = TASK_CONFIG[taskName]
        var taskPath = getTaskPathFor(taskName)
        var watchConfig = {}

        if (taskConfig) {
            var srcPath = path.resolve(process.env.PWD, PATH_CONFIG.src, taskPath.src)
            var globPattern = '**/*' + (taskConfig.extensions ? '.{' + taskConfig.extensions.join(',') + '}' : '')
            watch(path.join(srcPath, globPattern), watchConfig, function() {
                require('./' + taskName)()
            })
        }
    })
}

gulp.task('watch', watchTask)

module.exports = watchTask
