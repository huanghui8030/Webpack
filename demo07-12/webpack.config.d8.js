/**
 * (1)webpack基本配置-css文件简单配置，其中所有样式内置。
 * huanghui 20171213
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: "./static/js/css.js",
    output: {
        path: __dirname + "/build/demo08",
        filename: "[name]-[hash:8].js"
    },
    devtool: 'eval-source-map',//开发时使用
    module: {
        rules: [
            {test: /\.css$/,
                use: [
                    {loader: "style-loader"}, 
                    {loader: "css-loader",
                        options: {
                            modules: true  //css是否局部
                        }
                    },
                    {loader: "postcss-loader"}  //厂商前缀
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究！'),//压缩文件，注释
        new HtmlWebpackPlugin({
            template: __dirname + "/static/html/css.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin('./build/demo08/*.*', {//清除dist目录
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
};
