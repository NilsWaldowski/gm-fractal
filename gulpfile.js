const path = require('path')
const requireDir = require('require-dir')

// Fallback for windows backs out of node_modules folder to root of project
process.env.PWD = process.env.PWD || path.resolve(process.cwd(), '../../')

// Globally expose config objects
global.PATH_CONFIG = require('./03-internal/gulp/config/dirs.json')
global.TASK_CONFIG = require('./03-internal/gulp/config/config.json')

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./03-internal/gulp', { recurse: false })
