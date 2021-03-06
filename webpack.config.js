const webpack = require('webpack');

module.exports = {
    entry: './src/browser/index.js'  ,
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    // plugins: [
    //   new webpack.DefinePlugin({
    //     'process.env': {
    //       'NODE_ENV': JSON.stringify('production')
    //     }
    //   }),
    //   new webpack.optimize.UglifyJsPlugin()
    // ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2'],
                        plugins: ["transform-class-properties"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    devtool: 'inline-source-map'
};