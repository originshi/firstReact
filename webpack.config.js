    //webpack.config.js
    var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
    var OpenBrowserPlugin = require('open-browser-webpack-plugin');
    let HappyPack=require('happypack');
    const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
    module.exports = {
        devtool: 'eval-source-map',
        entry: {
            'main':[
                'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8881',
            'webpack/hot/only-dev-server',
            'babel-polyfill', __dirname + '/app/main.js'],
        },
        output: {
            path: __dirname + '/build/',
            filename: '[name].js'
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'happypack/loader?id=js',
                },
                 {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader', 'autoprefixer-loader']
                }, {
                    test: /\.less/,
                    use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader'],
                }, {
                    test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                    use: 'file-loader?name=[hash].[ext]'
                }, {
                    test: /\.(png|jpg)$/,
                    use: 'url-loader?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                }

            ]
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),//热模块替换插件
            new OpenBrowserPlugin({ url: 'http://localhost:8881' }),
            new webpack.NamedModulesPlugin(),
            new HappyPack({
                id:'js',
                threadPool:happyThreadPool,
                loaders:[{
                    loader:'babel-loader',
                    options:{
                        presets: ['es2015', 'stage-0','env','react'],
                        plugins: [
                          "add-module-exports",
                          "transform-decorators-legacy",
                          "transform-class-properties",
                          "syntax-dynamic-import"
                        ]
                      }
                }]
            })
        ],

        devServer: {
            contentBase: './build',
            //colors: true,
            filename:'index.html',
            historyApiFallback: true,
            inline: true,
            port: 8881,
            
            //process: true,
            hot:true
        }
    };