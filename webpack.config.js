
var path = require('path');

module.exports = {
    entry: './01-src/javascript/main.js',
    output: {
        //path: __dirname + '/dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
