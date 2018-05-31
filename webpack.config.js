    //webpack.config.js
    var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
    var OpenBrowserPlugin = require('open-browser-webpack-plugin');
    module.exports = {
        devtool: 'eval-source-map',
        entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],
        output: {
            path: __dirname + '/build',
            filename: 'bundle.js'
        },

        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel'
                },
                , {
                    test: /\.css$/,
                    loaders: ['style', 'css', 'autoprefixer']
                }, {
                    test: /\.less/,
                    loaders: ['style', 'css', 'autoprefixer', 'less'],
                }, {
                    test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                    loader: 'file-loader?name=[hash].[ext]'
                }, {
                    test: /\.(png|jpg)$/,
                    loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                }

            ]
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),//热模块替换插件
            new OpenBrowserPlugin({ url: 'http://localhost:8080' })
        ],

        devServer: {
            contentBase: './build',
            colors: true,
            historyApiFallback: true,
            inline: true,
            port: 8080,
            process: true
        }
    };