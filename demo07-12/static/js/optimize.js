var Common = require('./common.js');

require('../styles/less/url.less');
require('../styles/less/a.less');
require('../styles/css/url.css');

a();

function a(){
    console.log('我是app.js');
    //Styele;
    console.log('执行a方法');

    Common.commonTest1();

   // var a = document.getElementById('root-css');
   // a.className = 'cname';
}


