var user = require('../../service/user');
var header = new (require('../../utils/my_header'))();
var left_filter = require('../../utils/left_filter');
var template = require('../../templates/index.erb');
var para = require('../../common').para;
var province_names = require('../../common').province_names;


class IndexController {
  constructor() {
    //set data
    var me  = this;
    this.left_filter = new left_filter({is_hide:true});
    this.container = $('#g_content');
    this.sliderWrapper = $('#m_slider_wrapper');
    this.articleWrapper = $('#m_article_wapper');
    this.data = {};
    this.sliderState = {
      index: 0,
      len : 0
    };
    this.sliderRenderer = _.template(template.slider);
    this.articleRenderer = _.template(template.articles);

    //initialize
    this.getData(); // => this.render() => { this.renderSlider() && this.renderAriticle() }

  }

  checkFirstRead(){
    var hasRead = localStorage.getItem('read');
    if(!hasRead){
      header.showDownload();
      localStorage.setItem('read','true');
    }
  }

  getData(){
    var me = this;
    $.get(`http://api.learningrabbit.qinixapp.com/v1/videos/recommends`,null,'json')
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
    this.renderSlider();
    this.bindSlider();
    this.autoPlay();
    this.renderAriticle();
  }

  bindSlider(){
    var me = this;
    //resize
    $(window).off('resize').on('resize',()=>{
      var w = document.body.clientWidth;
      var length = _.size(me.data.slider_videos);
      $('.slider-box',me.sliderWrapper).css({width:`${length * w}px`});
      $('.m-card',me.sliderWrapper).css({width:`${w}px`})
    })
    //nav slide
    $.each($('.m-slider-nav-item',me.sliderWrapper),(index, node)=>{
      $(node).off('click').on('click',me.jump.bind(me,index))
    })
  }

  jump(index){
    var me = this;
    var w = document.body.clientWidth;
    var left_offset = -w*index;
    var profile = ['','-webkit-','-moz-','-o-','-ms-'];
    var style = Object.create(null);
    _.each(profile,(before)=>{
      style[`${before}transform`] = `translateX(${left_offset}px)`;
    });
    $('.slider-box',me.sliderWrapper).eq(0).css(style);


    me.setSliderNavActive(index);
  }

  setSliderNavActive(index){
    var me = this;
    $('.m-slider-nav-item', me.sliderWrapper).removeClass('active');
    $('.m-slider-nav-item',me.sliderWrapper).eq(index).addClass('active');
  }

  autoPlay(){
    var me = this;
    me.jump(0);
    return setInterval(()=>{
      var index = (me.sliderState.index+1) % me.sliderState.len;
      me.sliderState.index = index;
      me.jump(index);
    }, 5000);
  }


  renderSlider(){
    var me = this;
    var w = document.body.clientWidth;
    var data = {};
    data.slider_videos = Object.assign({},{},me.data.slider_videos);
    data.w = w;
    var html = this.sliderRenderer(data);
    this.sliderWrapper.html(html);
    this.sliderState.len = _.size(data.slider_videos);
  }

  renderAriticle(){
    var me = this;
    var sections = [];

    _.each(me.data,(section, name)=>{
      if(name!='slider_videos'){
        var data = {section:{}};
        data.section.articles =  Object.assign({},{},section);
        data.section.name = name;

        sections.push(data);
      }
    })

    var html = _.map(sections,(section_data)=>{
      return me.articleRenderer(section_data);
    }).join('');

    this.articleWrapper.html(html);
  }

}

module.exports = IndexController;
