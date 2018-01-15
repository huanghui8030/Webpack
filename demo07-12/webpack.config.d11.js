/**
 * (4)webpack基本配置，用到插件，将所有样式单独提取出来
 * huanghui 20171215
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require("clean-webpack-plugin");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将css单独提取出来，放一个文件里面。

module.exports = {
    entry: {a : "./static/js/extract.js"},
    output: {
        path: __dirname + "/build/demo11",
        filename: "[name].js?[hash:8]"
    },
    devtool: 'eval-source-map',//开发时使用
    module: {
        rules: [
            {   
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader",'postcss-loader'],
                    fallback: "style-loader"
                })
            },{
                test: /\.less$/, 
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },"less-loader",'postcss-loader'],
                    fallback: "style-loader"
                })
                
            },{
                test: /\.(png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',//转成base64格式图片
                        options: {
                            limit: 4000   //图片大小限制(b)
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
        new webpack.BannerPlugin('将css单独分离出来！'),//压缩文件，注释
        new HtmlWebpackPlugin({
            template: __dirname + "/static/html/extract.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin('./build/demo11/*', {//清除dist目录
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin("custom.css"),//合并css
    ],
    devServer: {  
        colors: true,  
        historyApiFallback: true,  
        inline: true,  
        hot: true  
    }  
};
