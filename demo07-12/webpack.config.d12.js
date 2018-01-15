/**
 * (5)webpack基本配置，将合并后的css进行优化，去重等操作。   ---- 未生效 
 * huanghui 20171215
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CleanWebpackPlugin = require("clean-webpack-plugin");

var precss       = require('precss');
var autoprefixer = require('autoprefixer');

var ExtractTextPlugin = require("extract-text-webpack-plugin");//将css单独提取出来，放一个文件里面。

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        a : "./static/js/optimize.js"
    },
    output: {
        path: __dirname + "/build/demo12",
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
        new CleanWebpackPlugin('./build/demo12/*', {//清除dist目录
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
};
