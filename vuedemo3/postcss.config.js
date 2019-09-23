module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375, //设置ip6尺寸   750*1334
      viewportHeight:667,//视窗高度
      unitPrecision:5, //小数位数，单位精度
      viewportUnit:'vw', 
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],//不需要转换的类class
      minPixedValue:1, //小于等于1不转换
      mediaQuery:false //是否允许在媒体查询中转换
    }
  }
}
