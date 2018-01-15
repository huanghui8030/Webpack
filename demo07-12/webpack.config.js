/**
 * huanghui 20171222   
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将css单独提取出来，放一个文件里面。
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        a : "./static/js/optimize.js"
    },
    output: {
        path: __dirname + "/build/demo07/",
        filename: "js/[name]-[hash:8].js"
    },
    devtool: 'eval-source-map',//开发是使用
    module: {
        rules: [
            {   
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader",'postcss-loader']
                })
            },{
                test: /\.less$/, 
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","less-loader",'postcss-loader']
                })
            },{
                test: /\.(png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',//转成base64格式图片
                        options: {
                            limit: 2000   //图片大小限制(b)
                        }
                    }
                ]
            },{
                test: /\.(jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: 'images/[name].[ext]?[hash:8]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('这是我的注释！'),//压缩文件，注释
        new HtmlWebpackPlugin({
            template: __dirname + "/static/html/optimize.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin('./build/demo07/*', {//清除dist目录
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin("custom.css"),//合并css
        new OptimizeCssAssetsPlugin({   //去掉重复的css
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        })
    ],
    devServer: {  
        colors: true,  
        historyApiFallback: true,  
        inline: true,  
        hot: true  
    },
    resolve:{
        
    }
};
