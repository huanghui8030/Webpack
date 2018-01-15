/**
 * huanghui 增加HtmlWebpackPlugin
 */
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //第二种Array类型
    entry: ["./src/js/a.js","./src/js/b.js"],
    output: {
        path: __dirname + "/build/demo04/",
        filename: "index.js?v=[hash:8]"  
    },
    plugins:[
        new HtmlWebpackPlugin()  //默认加载一个index.html页面
    ]
};