module.exports = {

    stylesheets: {

        extensions: ['sass', 'scss', 'css'],
        autoprefixer: {
            browsers: [
                '> 1% in DE',
                'Android >= 4.1',
                'Explorer >= 9',
                'Firefox >= 17',
                'iOS >= 6',
                'last 4 versions',
                'Opera >= 12.1',
                'Safari >= 7'
            ],
            cascade: true
        },
        sass: {
            outputStyle: 'expanded'
        },
        cssnano: {},
        rename: {
            suffix: '.min'
        },

        styleLint: {
            reporters: [
                {formatter: 'string', console: true}
            ]
        }
    },

    images: {
        extensions: ['jpg', 'png', 'gif']
    },

    fonts: {
        extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
    },

    javascript: {
        extensions: ['js', 'jsx'],
        rename: {
            suffix: '.min'
        }
    },

    javascriptInline: {
        extensions: ['js', 'jsx'],
        rename: {
            suffix: '.min'
        }
    },

    modernizr: {
        extensions: ['js', 'jsx'],
        outputName: 'modernizr.js',
        rename: {
            suffix: '.min'
        },
        settings: {
            cache : true,
            options : [
                'setClasses',
                'addTest',
                'testProp',
                'fnBind'
            ],
            tests: [
                'forms_placeholder',
                'history',
                'inlinesvg',
                'svg',
                'touchevents',
                'csstransforms',
                'csstransforms3d',
                'cssvwunit',
                'video'
            ]
        }
    },

    misc: {
        extensions: ['mp4', 'webm']
    },

    icons: {
        extensions: ['svg', 'ico'],
        settings: {
            shape: {
                dimension: {
                    maxWidth: 128,
                    maxHeight: 128,
                    attribute: true
                },
                dest: '/'
            },
            mode: {
                viewDEACTIVATED: {
                    render: {
                        scss: false
                    }
                },
                symbol: {
                    dest: '',
                    sprite: 'sprite.svg'
                }
            }
        }
    },
}
