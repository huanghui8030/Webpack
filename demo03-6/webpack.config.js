/**
 * huanghui 第一种String类型
 */
var webpack = require('webpack');
module.exports = {
    entry:"./src/js/a.js",
    output: {
        path: __dirname + "/build/demo03/",
        filename: "[name]-[hash:8].js"
    }
};
