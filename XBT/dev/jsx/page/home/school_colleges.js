var user = require('../../service/user');
var header = new (require('../../utils/my_header'))();
var left_filter = require('../../utils/left_filter');
var template = require('../../templates/school_colleges.erb');
var para = require('../../common').para;
var province_names = require('../../common').province_names;

//不好意思改的时候一着急,就又顺手把下划线风格写成驼峰的了...凑合看吧...

class controller {
  constructor() {
    var me  = this;

    // show left filter
    this.left_filter = new left_filter({is_hide:true});
    // compile template renderers
    this.header_renderer = _.template(template[0]);
    this.table_renderer = _.template(template[1]);
    this.videos_renderder = _.template(template[2]);

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
        this.getCollegesData();
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

  getCollegesData(){
    var me = this;
    $.get(`http://api.learningrabbit.qinixapp.com/v1/universities/${me.school_id}/colleges`,me.user_data,'json')
    .done((res)=>{
      if(res.code == 0){
        me.data.colleges = res.payload.colleges;
        me.renderColleges();
      }
    })
  }

  renderColleges(){
    var html = this.table_renderer(this.data);
    this.dom.html(html);
    this.bind()
  }

  searchVideoByCollege(college){
    var me = this;
    var url  = `http://api.learningrabbit.qinixapp.com/v1/universities/${this.data.school_id}/colleges/${college.id}/videos`;
    this.selectedCollege = college;
    $.get(url, null, 'json').done((res)=>{
      if(res.code == 0){
        me.data.videos = res.payload.videos;
        _.each(me.data.videos,(v)=>{
          v.duration = me.getDuration(v.duration)
        })
        me.renderCollegeVideos();
      }
    })
  }

  renderCollegeVideos(){
    var me = this;
    var data = {
      college : me.selectedCollege.name,
      videos : me.data.videos,
      school_id: me.data.school_id
    };
    this.dom.html(this.videos_renderder(data))
  }

  getDuration(seconds){
    if(seconds <= 60){
      return `${seconds} 秒`
    }else if(seconds < 60*60){
      if(seconds % 60 == 0){
        return `${seconds/60}分`
      }else{
        return `${Math.floor(seconds/60)}分 ${seconds%60}秒`
      }
    }else{
      return `${Math.floor(seconds/3600)}小时 ${Math.floor((seconds%3600)/60)} 分钟`;
    }
  }

  bind(){
    var me = this;
    $.each($('.m_college',this.dom),(index, college)=>{
      $(college).click(me.searchVideoByCollege.bind(me,me.data.colleges[index]))
    })
  }
}

module.exports = controller;
