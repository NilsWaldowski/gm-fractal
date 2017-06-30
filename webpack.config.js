
var path = require('path');

module.exports = {
    entry: './01-src/javascript/main.js',
    output: {
        //path: __dirname + '/dist',
        path: path.resolve(__dirname, 'dist/javascript'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
