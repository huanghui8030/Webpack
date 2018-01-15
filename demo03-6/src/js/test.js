/**
 * 通过命令行，来打包css和js等文件到同一个js中。无配置文件
 * 执行：webpack src/test.js bulid/index.js
 * webpack src/test.js bulid/index.js --module-bind 'css=style-loader!css-loader'
 * 加入loader：cnpm install webpack style-loader css-loader --save-dev
 *  * css-loader，webpack能够处理.css文件
 *  * style-loader，将.css文件通过style加入到打包的js中，而且在页面显示到style标签里面。
 */

require('style-loader!css-loader!./test.css');

//require('./test.css');
require('./a.js'); 

b();

function b(){
    console.log('test.js1111');
}