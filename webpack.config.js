module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
	devtool: false,
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(jsx|js)$/,
                exclude: /node_modules/
            }
        ]
    }
};