const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        // web pack provides contenthash to deal with caching issues of the assets. With each build the hash is updated.
        // https://webpack.js.org/guides/caching/
        filename: '[name][contenthash].js',
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            // template is required to have custom code enabled so that webpack does not overwrite the contents that were modified in the dist folder
            template: 'src/template.html',
        })
    ]
}
