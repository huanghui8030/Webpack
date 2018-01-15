module.exports = {
  plugins: [
    require('autoprefixer')({               //加厂商前缀
        browsers: ['Android 2.3','Android >= 4','iOS >= 6',
          'Explorer >= 6','Chrome >= 20','Firefox >= 24','Opera >= 12'],
        cascade: true,                  //是否美化属性值 默认：true 
        remove:true                     //是否去掉不必要的前缀 默认：true 
    })
  ]
}