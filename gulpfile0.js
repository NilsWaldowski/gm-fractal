/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulpfile.js/tasks. Any files in that directory get
  automatically required below.
*/

const path = require('path')
const gulp = require('gulp')
const requireDir = require('require-dir')

// Fallback for windows backs out of node_modules folder to root of project
process.env.PWD = process.env.PWD || path.resolve(process.cwd(), '../../')

// Globally expose config objects
global.PATH_CONFIG = require('./lib/get-path-config')
global.TASK_CONFIG = require('./lib/get-task-config')

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', { recurse: true })

// Initialize any additional user-provided tasks
TASK_CONFIG.additionalTasks.initialize(gulp, PATH_CONFIG, TASK_CONFIG)




const gulp = require('gulp');

/*
 * Import
 *  Fractal Instance
 *  Fractal logger
 */
var f = require('./fractal.js');

gulp.task('fractal:test', function(){
    console.log(f.logger);
});

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */
gulp.task('fractal:start', function(){
    const server = f.fractal.web.server({
        sync: true
    });
    server.on('error', err => f.logger.error(err.message));
    return server.start().then(() => {
        f.logger.success(`Fractal server is now running at ${server.url}`);
    });
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build', function(){
    const builder = f.fractal.web.builder();
    builder.on('progress', (completed, total) => f.logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => f.logger.error(err.message));
    return builder.build().then(() => {
        f.logger.success('Fractal build completed!');
    });
});
