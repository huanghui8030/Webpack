/**
 * (2)webpack基本配置，less 文件后，css内容内置，但是样式不是局部的。
 * huanghui 20171215
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require("clean-webpack-plugin");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        a : "./static/js/less.js"
    },
    output: {
        path: __dirname + "/build/demo09",
        filename: "[name]-[hash:8].js"
    },
    devtool: 'eval-source-map',//开发是使用
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
            },{test: /\.less$/, 
               use: [
                {loader: "style-loader" }, 
                {loader: "css-loader"}, 
                {loader: "less-loader"},
                {loader: "postcss-loader"}]  //厂商前缀
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('压缩a.js'),//压缩文件，注释
        new HtmlWebpackPlugin({
            template: __dirname + "/static/html/less.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin('./build/demo09/*.*', {//清除dist目录
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
};
