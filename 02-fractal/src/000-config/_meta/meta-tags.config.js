const paths = require('../../../../package.json').paths

module.exports = {
    title: 'Page Meta Tags',
    description: '',
    status: 'wip',
    context: {

        domain: paths.domain,
        description: 'A description of the page',
        img: {
            share: paths.assets + '/' + paths.images.dest + '/logo.png',
            favicon: {
                ico: paths.assets + '/' + paths.images.dest + '/favicon/favicon.ico',
                s16: paths.assets + '/' + paths.images.dest + '/favicon/favicon-16.png',
                s32: paths.assets + '/' + paths.images.dest + '/favicon/favicon-32.png',
                s48: paths.assets + '/' + paths.images.dest + '/favicon/favicon-48.png',
                s62: paths.assets + '/' + paths.images.dest + '/favicon/favicon-62.png',
                s192: paths.assets + '/' + paths.images.dest + '/favicon/favicon-192.png'
            },
            apple: {
                touch: paths.assets + '/' + paths.images.dest + '/favicon/favicon-16.png'
            }
        }
    }
}
