var user = require('../../service/user');
var header = new (require('../../utils/my_header'))();
var left_filter = require('../../utils/left_filter');
var template = require('../../templates/school_intro.erb');
var para = require('../../common').para;
var province_names = require('../../common').province_names;



class controller {
  constructor() {
    var me  = this;
    this.renderer = _.template(template);
    this.left_filter = new left_filter({is_hide:true});
    this.container = $('#g_content');
    this.school_id = para('school_id');
    this.data = {};
    this.init();
  }

  init(){
    var data = {
      user_province: province_names[user.user_province],
      user_subject: user.user_subject,
    };


    var me = this;

    $.get(`http://api.learningrabbit.qinixapp.com/v1/universities/${me.school_id}`,data,'json')
    .done((res)=>{
      if(res.code == 0){
        me.data = res.payload;
        me.render();
      }else{
        alert('网络异常,请稍后刷新重试!');
      }
    })
  }

  render(){
    this.data.introduction = this.data.introduction.decodeHTML();
    var html = this.renderer({school:this.data});
    $('.g__filter-result-wrapper', this.container).remove();
    $(html).insertAfter('#g_left_filter');
    this.clearNillPElements();
  }

  clearNillPElements(){
    $.each($('.school-intro-wrapper p'),(index,elem)=>{
      var ele = $(elem);
      if($.trim(ele.text()).length == 0){
        ele.remove();
      }
    })
  }
}

module.exports = controller;
