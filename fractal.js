const paths = require('./package.json').paths

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create()

// set logger const
const logger = fractal.cli.console // keep a reference to the fractal CLI console utility

/* Set the title of the project */
fractal.set('project.title', 'CPS-IT GoldenMaster')

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/02-fractal/docs')

// Engine
const engineInstance = fractal.components.engine()

// Using handlebars-layouts (https://www.npmjs.com/package/handlebars-layouts)
const layouts = require('handlebars-layouts')
layouts.register(engineInstance.handlebars)

fractal.components.set('default.preview', '@preview')
fractal.components.set('default.status', 'wip')
fractal.components.set('path', __dirname + '/02-fractal/src')


/*
* Web UI config
*/
const mandelbrot = require('@frctl/mandelbrot')({
    favicon: paths.assets + '/' + paths.images.dest + '/favicon/favicon.ico',
    'styles': [
        'default',
        paths.assets + '/' + paths.stylesheets.dest + '/fractal-theme.css'
    ]
})

fractal.web.theme(mandelbrot)


/*
* Assets
*/

// Development path
fractal.web.set('static.path', __dirname + '/dest')

// Build path - will be deployed by jenkins or manually for public project visibility
fractal.web.set('builder.dest', __dirname + '/public')

// match /dest path with deploy environment in TYPO3
fractal.web.set('static.mount', paths.assets)

fractal.web.set('server.syncOptions', {
    open: true,
    //browser: ['google chrome', 'firefox'],
    notify: true
})

module.exports = {
    fractal: fractal,
    logger: logger
}
