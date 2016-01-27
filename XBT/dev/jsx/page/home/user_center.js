var province_names = ["北京市","天津市","重庆市","上海市","河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省","内蒙古自治区","广西壮族自治区","西藏自治区","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区","澳门特别行政区"];
var USER = require('../../service/user');

var template = require('../../templates/user_center.erb');
var header = new (require('../../utils/my_header'))();
var para = require('../../common').para;

class UserCenter {
  constructor() {
    this.renderers= {
      user_card : _.template(template.user_head_box),
      modify_modal: _.template(template.m_modify_user_info)
    };
    this.init();
  }

  init(){
    var me = this;
    this.user_data = {
      user:{
        province: USER.user_province,
        avatar_url : USER.avatar_url,
        subject: USER.user_subject,
        username: USER.username
      }
    };
    this.user_card_root = $('#m_user_info_card');
    this.user_info_modal = null;
    this.uptoken = null;
    USER.on('updateUserData',me.renderUserCard.bind(me));
    this.renderUserCard();
  }

  renderUserCard(){
    this.user_data = {
      user:{
        province: USER.user_province,
        avatar_url : USER.avatar_url,
        subject: USER.user_subject,
        username: USER.username
      }
    };
    this.user_card_root.html(this.renderers.user_card(this.user_data));
    this.bindUserCard();
  }

  bindUserCard(){
    var me = this;
    $('#m_modify_user_info',this.user_card_root).off('click').on('click',()=>{
      me.renderModal();
    });
  }


  renderModal(){
    var me = this;
    if(this.user_info_modal){
      this.user_info_modal.addClass('show');
    }else{
      var data = {
        user : me.user_data.user,
        province_names : province_names,
      }
      $('body').append(this.renderers.modify_modal(data));
      this.user_info_modal = $('#m__modal_window_mask');
      $('select',this.user_info_modal).css({'width':'100%'}).select2();
      this.user_info_modal.addClass('show');
      this.bindModal();
    }
  }
  hideModal(){
    var me = this;
    me.user_info_modal.addClass('hide').removeClass('show');
    var s = setTimeout(()=>{
      me.user_info_modal.removeClass('hide');
      clearTimeout(s)
    },350)
  }

  bindModal(){
    var me = this;
    this.user_info_modal.off('click').on('click',(ev)=>{
      if(ev.target == me.user_info_modal.get(0)){
        me.hideModal()
      }
    })
    $('#m_user_avatar_form', this.user_info_modal).off('change').on('change',()=>{
      me.getUpToken().done(me.uploadImg.bind(me));
    });

    $('#m_user_info_update_btn',this.user_info_modal).off('click').on('click',()=>{
      me.updateUserInfo();
    });
  }

  getUpToken(fun){
    var me = this;
    var func = null;
    $.get('http://api.learningrabbit.qinixapp.com/v1/uptoken.json?api_key=avatar',null,'json')
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

  uploadImg(){
    var myDomain = 'http://7xomkl.com1.z0.glb.clouddn.com/';
    var bucket = 'http://qiniu-plupload.qiniudn.com/';
    $('input[name=token]',this.user_info_modal).val(this.uptoken);
    var formData = new FormData($('#m_user_avatar_form',this.user_info_modal).get(0));
    $.ajax({
        type:'post',
        url:"http://upload.qiniu.com/",
        data: formData,
        cache: false,
        contentType: false,
        processData: false
      }).done((res)=>{
        var path = `${myDomain}${res.key}`;
        this.user_data.user.avatar_url = path
        $('.m-user-head').attr('src',path);
      })
  }

  updateUserInfo(){
    var me = this;
    var data = Object.create(null);
    _.each($('#m_user_info_form').get(0),(input,name)=>{
      data[input.name] = input.value;
    });
    data.avatar_url = this.user_data.user.avatar_url;
    $.ajax({
      type: 'PUT',
      url: 'http://api.learningrabbit.qinixapp.com/v1/users',
      data: data,
      dataType: 'json',
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization',USER.token);
      }
    }).done((res)=>{
      if(res.code == 0){
        USER.getUserData(true);
        setTimeout(me.hideModal.bind(me),500);
      }
    })
  }



}

module.exports = UserCenter;
