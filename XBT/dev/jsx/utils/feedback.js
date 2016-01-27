var template = require('../templates/feedback.erb');
var user = require('../service/user');

class Feedback {
  constructor() {
    this.dom = null;
    this.btn = null;
    this.img_form = null;

    this.uptoken = null;
    this.feedback_path = null;
    this.text = localStorage.getItem('last_feedback');
    if(!this.text){this.text = '';}
    this.show();

  }

  show(){
    if(!this.dom){
      this.renderDom()
    }else{
      this.showDom()
    }
  }

  showDom(){
    if(!this.dom){
      this.dom.addClass('show');
    }
  }

  hide(){
    if(this.dom){
      //
      //this.dom.removeClass('show');
      //
      this.removeDom();
      this.dom = null;
      this.btn = null;
      this.img_form = null;
      this.uptoken = null;
    }
  }

  removeDom(){
    if(this.dom){
      this.dom.remove();
    }
  }

  renderDom(){
    var data = {text:this.text};
    var html = _.template(template)(data);
    $('body').append(html);
    // set dom node variables
    this.dom = $('#g__feedback_modal_mask');
    console.log(this.dom);
    this.img_form = $('#m_user_feedback_form');
    this.btn = $('#g_feedback_button');
    this.bindModal();
  }

  submit(){

    var data = {
      content: $('textarea',this.dom).eq(0).val(),
      image_url : this.feedback_path
    };

    $.ajax({
        type:'post',
        url:"http://api.learningrabbit.qinixapp.com/v1/feedbacks",
        data: data,
        cache: false,
        dataType: 'json'
      }).done((res)=>{
        if(res.code == 0){
          this.success('已成功发送反馈~谢谢!');
        }else{
          this.warn(res.message);
        }
      })
  }

  success(message){
    var me = this;
    $('#m_message_warning .warning-text',this.dom).removeClass('warning-tip').addClass('success-tip').removeClass('hide').html(message);
    setTimeout(function(){
      me.hide();
    },2000);
  }

  warn(message){
    $('#m_message_warning .warning-text',this.dom).removeClass('success-tip').addClass('warning-tip').removeClass('hide').html(message);
  }

  bindModal(){
    var me = this;
    this.dom.off('click').on('click',(ev)=>{
      if(ev.target == me.dom.get(0)){
        me.hide()
      }
    })
    this.img_form.off('change').on('change',()=>{
      me.getUpToken().done(me.uploadImg.bind(me));
    });

    this.btn.off('click').on('click',()=>{
      me.submit();
    });
  }

  getUpToken(fun){
    var me = this;
    var func = null;
    $.get('http://api.learningrabbit.qinixapp.com/v1/uptoken',null,'json')
    .done((res)=>{
      console.log(res);
      me.uptoken = res.uptoken;
      func && func();
    })

    return {
      done: function(callback){
        func = callback;
      }
    }
  }

  showFeedbackImage(){
    var path = this.feedback_path;
    $('#m_feedback_image').attr('src',path).removeClass('hide');
  }

  uploadImg(){
    var myDomain = 'http://7xomkl.com1.z0.glb.clouddn.com/';
    var bucket = 'http://qiniu-plupload.qiniudn.com/';
    $('input[name=token]',this.user_info_modal).val(this.uptoken);
    var formData = new FormData(this.img_form.get(0));
    $.ajax({
        type:'post',
        url:"http://upload.qiniu.com/",
        data: formData,
        cache: false,
        contentType: false,
        processData: false
      }).done((res)=>{
        var path = `${myDomain}${res.key}`;
        this.feedback_path = path;
        this.showFeedbackImage();
      })
  }


  saveText(){

  }

  autoSave(){
    var me = this;
    setInterval(me.saveText.bind(me),30*1000);
  }
}

module.exports = Feedback;
