/**
 * huanghui 增加HtmlWebpackPlugin，设置项
 */
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //第二种Object类型
    entry: {
        ajs : "./src/js/a.js",
        bjs : "./src/js/b.js",
    },
    output: {
        path: __dirname + "/build/demo05/",
        filename: "[name].js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'测试webpack',
            filename: 'test.html',
            inject: 'header',
            hash:'true'   //自动添加参数去，缓存。
        })  //默认加载一个index.html页面
    ]
};
