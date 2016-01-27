var para = require('../common').para;
var session = require('../common').session;
var template = require('../templates/left_filter.html');
var province_list = ["北京市","天津市","重庆市","上海市","河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省","内蒙古自治区","广西壮族自治区","西藏自治区","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区","澳门特别行政区"];
var province_names = ["北京市","天津市","重庆市","上海市","河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省","内蒙古自治区","广西壮族自治区","西藏自治区","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区","澳门特别行政区"];
var province_names_reverse = require('../common').province_names_reverse;
var USER = require('../service/user');


function hide_left_filter() {
    $('#g_content').toggleClass('hide-left-filter');
}

class controller {
  constructor(arg) {
    this.arg = Object.assign({},arg);
    if(this.arg.is_hide == undefined){
      this.arg.is_hide = false;
    }

    this.renderer = _.template(template);
    this.dom = $('#g_left_filter');
    //获取组件初始状态
    this.getInitialState()

    //渲染页面
    this.render()

    //绑定事件
    this.bind()
    return this;
  }

  hide_left_filter() {
    $('#g_content').toggleClass('hide-left-filter');
  }

  getInitialState(){
    var province = province_names_reverse[para('province')];
    this.province = session('province') || USER.user_province;
    this.subject = session('subject') || USER.user_subject || 'science';
    this.score = session('score')|| USER.user_score || 750;
  }
  get_province_select_html(){
    return _.map(province_list,(p)=>{
      return (
        `<option value="${p}" ${p == this.province ? 'selected':''}>
          ${p}
        </option>`
      );
    }).join('')
  }
  render(){
    var data = {
      province : this.province ,
      subject : this.subject ,
      score : this.score,
      province_list : this.get_province_select_html()
    }
    data = Object.assign(data,this.arg);
    if(this.dom.length > 0){this.dom.get(0).outerHTML = this.renderer(data);}

  }

  bind(){

    //文理
    $('#m_left_subject').on('change', (ev)=>{
        this.subject = $('input[name=subject]:checked').val()
        session('subject', this.subject)
        this.onChange && this.onChange();
    })
    //省份选择
    $('#m_province_selector').on('change',(ev)=>{
        this.province = $('#m_province_selector').val()
        session('province', this.province)
        this.onChange && this.onChange();
    })
    $('select').select2()
    //分数
    $('#m_left_score').on('change',(ev)=>{
        this.score = $(ev.target).val()
        session('score',this.score)
    }).on('keydown',(ev)=>{
      this.score = $(ev.target).val()
      session('score',this.score)
      if(ev.keyCode == 13){
        this.onChange && this.onChange()
      }
    })

    //hide left_filter
    $('#toggle_filter_btn').off('click').on('click',this.hide_left_filter);

  }

  onChange(){
    //属性变化回调
  }

  findMajor(){
    //按专业查找
  }

  findSchool(){
    //按学校查找
  }


}


module.exports = controller;
