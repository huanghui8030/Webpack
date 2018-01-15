/**
 * huanghui 增加HtmlWebpackPlugin，设置项
 */
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        ajs : "./src/js/a.js",
        bjs : "./src/js/b.js",
    },
    output: {
        path: __dirname + "/build/demo06/",
        filename: "[name].js",
        publicPath:"https://t1.chei.com.cn/"  //静态路径替换
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/test.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ]
};
