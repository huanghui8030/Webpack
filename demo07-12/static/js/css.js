
var Common = require('./common.js');

var Styele = require('../styles/css/atest.css');

test();

function test(){
    console.log('执行b方法！ ');

    Common.commonTest2();

    var rootB = document.getElementById('root');
    rootB.className = Styele.cname;
    rootB.innerHTML = "哈哈哈test";

}