function para(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),results = regex.exec(window.location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function session() {
  if(arguments.length == 1){
    //get
    return sessionStorage.getItem(arguments[0]);
  }else if(arguments.length == 2){
    //set
    return sessionStorage.setItem(arguments[0],arguments[1]);
  }
}

var province_names = {
  "北京市": "北京",
  "天津市": "天津",
  "重庆市": "重庆",
  "上海市": "上海",
  "河北省": "河北",
  "山西省": "山西",
  "辽宁省": "辽宁",
  "吉林省": "吉林",
  "黑龙江省": "黑龙江",
  "江苏省": "江苏",
  "浙江省": "浙江",
  "安徽省": "安徽",
  "福建省": "福建",
  "江西省": "江西",
  "山东省": "山东",
  "河南省": "河南",
  "湖北省": "湖北",
  "湖南省": "湖南",
  "广东省": "广东",
  "海南省": "海南",
  "四川省": "四川",
  "贵州省": "贵州",
  "云南省": "云南",
  "陕西省": "陕西",
  "甘肃省": "甘肃",
  "青海省": "青海",
  "台湾省": "台湾",
  "内蒙古自治区": "内蒙古",
  "广西壮族自治区": "广西",
  "西藏自治区": "西藏",
  "宁夏回族自治区": "宁夏",
  "新疆维吾尔自治区": "新疆",
  "香港特别行政区": "香港",
  "澳门特别行政区": "澳门"
};
var province_names_reverse = (function(){
  var obj = {};
  _.each(province_names,(val,name)=>{
    obj[val] = name;
  })
  return obj;
})();

 var is = {
   phone:function(phone){
     return (/(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/.test(phone));
   }
 }
 var myExtends = function(){
   String.prototype.decodeHTML = function() {
    var str = this.replace(new RegExp('\r?\n','g'), '<\p><p>');
    return str;
  };
 }
module.exports = {
  para: para,
  session: session,
  province_names: province_names,
  province_names_reverse: province_names_reverse,
  is: is,
  myExtends : myExtends
};
