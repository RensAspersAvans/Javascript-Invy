const path = require('path');

module.exports = {
    entry: './js/controller/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};