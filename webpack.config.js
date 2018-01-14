module.exports = {
    entry: './src/browser/index.js'  ,
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
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
            }
        ]
    },
    devtool: 'inline-source-map'
};