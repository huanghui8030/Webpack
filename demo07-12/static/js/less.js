var Common = require('./common.js');

require('../styles/less/a.less');

a();

function a(){
    console.log('我是app.js13312323222222');
    //Styele;
    console.log('执行a方法');

    Common.commonTest1();

    var a = document.getElementById('root');
    a.className = 'div2';
    a.innerHTML = "我是aaaa11111";
}


