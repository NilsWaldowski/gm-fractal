/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

// set logger const
const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

/* Set the title of the project */
fractal.set('project.title', 'FooCorp Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/02-fractal/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/02-fractal/docs');

// Project config
fractal.set('project.title', 'CPS-IT GoldenMaster');

// Components config
const engineInstance = fractal.components.engine();

// Using handlebars-layouts (https://www.npmjs.com/package/handlebars-layouts)
const layouts = require('handlebars-layouts');
layouts.register(engineInstance.handlebars);

fractal.components.set('default.preview', '@preview');

// Build - will be deployed by jenkins or manually for public project visibility
fractal.web.set('builder.dest', __dirname + '/public');

/*
* Assets
*/
fractal.web.set('static.path', __dirname + '/dest');
// match /dest path with deploy environment in TYPO3
fractal.web.set('static.mount', '/typo3conf/ext/gm8_sitepackage/Resources/Public/_Default/Frontend');

fractal.web.set('server.syncOptions', {
    open: true,
    //browser: ['google chrome', 'firefox'],
    notify: true
});

module.exports = {
    fractal: fractal,
    logger: logger
};
