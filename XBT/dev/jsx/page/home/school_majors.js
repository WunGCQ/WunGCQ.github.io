var user = require('../../service/user');
var header = new (require('../../utils/my_header'))();
var left_filter = require('../../utils/left_filter');
var template = require('../../templates/school_majors.erb');
var para = require('../../common').para;
var province_names = require('../../common').province_names;



class controller {
  constructor() {
    var me  = this;

    // show left filter
    this.left_filter = new left_filter({is_hide:true});

    // compile template renderers
    this.header_renderer = _.template(template[0]);
    this.table_renderer = _.template(template[1]);

    //get containers and params
    this.container = $('#g_content');
    this.school_id = para('school_id');

    // set ajax user data
    this.user_data = {
      user_province: province_names[user.user_province],
      user_subject: user.user_subject,
    };

    //initialize render data
    this.data = {
      school_id: me.school_id
    };
    this.dom = null;

    this.init();
  }

  init(){

    var me = this;

    $.get(`http://api.learningrabbit.qinixapp.com/v1/universities/${me.school_id}`,me.user_data,'json')
    .done((res)=>{
      if(res.code == 0){
        me.data = res.payload;
        me.data.school_id = me.school_id;
        //render common header
        me.renderSchoolHeader();

        //继续获取学院信息
        this.getMajorData();
      }else{
        alert('网络异常,请稍后刷新重试!');
      }
    })
  }

  renderSchoolHeader(){

    this.data.introduction = this.data.introduction.decodeHTML();
    var html = this.header_renderer({school:this.data});
    $('.g__filter-result-wrapper', this.container).remove();
    $(html).insertAfter('#g_left_filter');
    this.dom = $('#m_major_list_wrapper');


  }

  getMajorData(){
    var me = this;
    $.get(`http://api.learningrabbit.qinixapp.com/v1/universities/${me.school_id}/majors`,me.user_data,'json')
    .done((res)=>{
      if(res.code == 0){
        me.data.majors = res.payload.majors;
        me.data.years = res.payload.majors[0].scores.year;

        me.renderMajorTable();
      }
    })
  }

  renderMajorTable(){
    var html = this.table_renderer(this.data);
    this.dom.html(html);
  }
}

module.exports = controller;
