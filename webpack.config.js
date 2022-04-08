const path = require('path');
module.exports = {
    mode: 'development',
    // for single entry point
    // entry: path.resolve(__dirname, 'src/index.js'),

    // for multiple entry point we can create it as an object
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
        bundle2: path.resolve(__dirname, 'src/test.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    }
}
