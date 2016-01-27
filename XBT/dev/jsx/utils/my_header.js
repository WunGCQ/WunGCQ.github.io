var user_modal =  require('./user_modal');
var user = require('../service/user');
var Feedback = require('../utils/feedback');
var para = require('../common').para;

class Header {
  constructor() {
    var me = this;
    this.tmp = require('../templates/header.html');
    this.renderer = _.template(this.tmp);
    this.dom = null;
    this.user_modal = null;
    this.feedback = null;

    //获取用户信息后立即调用render
    user.on('getUserData',(user)=>{
      me.render();
    });
    user.on('updateUserData',(user)=>{
      me.render();
    });

    this.render();
  }
  render(){
    var userData = {
      USER: {
        isLogin:user.isLogin,
        username:user.username,
        avatar_url: user.avatar_url,
      },
      search : para('school_name') || ''
    }
    var html = this.renderer(userData); //todo 后续做USER模块替换
    $('header').get(0).outerHTML = html; //替换html
    this.dom = $('header').eq(0);
    this.bind();
  }



  search(){
    var str = $('#search_input').val();
    window.location.href = `/XBT/html/layout/select_school.html?school_name=${str}`;
  }

  showDownload(){
    $('.download-app', this.dom).removeClass('hide').removeClass('_hide');
  }

  hideDownload(){
    $('.download-app', this.dom).addClass('_hide');
  }

  bind(){
    var me = this;
    $('#search_input', this.dom).on('keydown',(ev)=>{
      if(ev.keyCode == 13){
        //回车搜索
        me.search();
      }
    })
    //按键搜索
    $('#header_search_btn', this.dom).click(me.search.bind(me));

    //登录弹框
    $('.btn_login', this.dom).click(()=>{

      if(!me.user_modal){
        me.user_modal = new user_modal();
      }

      me.user_modal.show('login');

    });

    $('.btn_logout', this.dom).click(()=>{
      user.logout();
    });

    //注册弹框
    $('.btn_register', this.dom).click(()=>{

      if(!me.user_modal){
        me.user_modal = new user_modal();
      }

      me.user_modal.show('register');
    });


    //显示下载窗口
    $('.btn_APP', this.dom).click(me.showDownload);
    //收起下载窗口

    $('.download-app .m_close', this.dom).click(me.hideDownload);

    //bind back top
    $('#g_right_bottom_btns #g_back_top',me.dom).click(me.backTop);

    //bind show feedback
    $('#g_right_bottom_btns #g_feedback_show',me.dom).click(me.showFeedbackWindow);

  }

  showFeedbackWindow(){
    if(!this.feedback){
      this.feedback  = new Feedback();
    }else{
      this.feedback.show();
    }
  }

  backTop(){
    $(window).scrollTop(0);
  }

}

module.exports = Header;
