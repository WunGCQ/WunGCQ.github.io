var is = require('../common').is;
var user = require('../service/user');

class user_modal {
  constructor() {
    this.state = '';

    this.dom = null;
    this.modol_window = null;

    this.template = require('../templates/user_modal.html')
  }

  //显示
  show(formClass){
    var me = this;

    if(this.dom){
      this.dom.addClass('show')
    }else{
      $('body').append(this.template);
      this.dom = $('#g__modal_window_mask');
      this.dom.addClass('show');
      this.modal_window = $('#g__modal_window');
      this.bind()
    }
    if(formClass){
      me.jump(formClass)
    }else{
      if(this.modal_window.attr('class') == 'g__modal-window'){ // 还未显示任何表单
        me.jump('login')
      }
    }

  }

  //隐藏
  hide(){
    var me = this;
    me.dom.addClass('hide').removeClass('show');
    var s = setTimeout(()=>{
      me.dom.removeClass('hide');
      clearTimeout(s)
    },350)
  }
  //移除
  remove(){
    this.dom.remove()
  }

  jump(window_state){
    this.modal_window.attr('class','g__modal-window').addClass(window_state);
    this.state = window_state;
  }

  //事件绑定
  bind(){
    var me  = this;

    //点击外部消失
    this.dom.on('click',(ev)=>{
      if(ev.target == me.dom.get(0)){
        me.hide()
      }
    })

    //跳转login
    $('.m-modal-title .tag-login', this.dom).click(()=>{
      me.jump('login')
    })
    //跳转register
    $('.m-modal-title .tag-register', this.dom).click(()=>{
      me.jump('register')
    })

    //跳转forget_password
    $('.m-modal-title .tag-forget_password', this.dom).click(()=>{
      me.jump('forget_password')
    })

    //表单提交
    $('.form-area.login .submit-btn', this.dom).click(this.login.bind(me))
    $('.form-area.register .submit-btn', this.dom).click(this.register.bind(me))
    $('.form-area.forget_password .submit-btn', this.dom).click(this.forget_password.bind(me))

    //发送验证码
    $('.form-area .verify_code_btn', this.dom).click((ev)=>{
      if(ev.target.isReady == undefined || ev.target.isReady == true){
        ev.target.isReady = false;
        me.send_verify_code(ev.target);
      }else{
        return;
      }
    })

    //开放平台登录
    me.bindOpenLogin();

  }

  send_verify_code(send_btn){
    var me  = this;
    var phone = $(`.form-area.${this.state} input[name=phone]`,this.dom).val();
    if(is.phone(phone)){
      $.post('http://api.learningrabbit.qinixapp.com/v1/request_sms_code',{phone:phone},'json')
        .done((res)=>{
            res = typeof res == 'string' ? JSON.parse(res) : res;
            if(res.code == 0){
              $(send_btn).addClass('disable');
              var s = setTimeout(()=>{
                  $(send_btn).removeClass('disable');
                  send_btn.isReady = true;
                  clearTimeout(s);
              },60*1000);
            }else{
              me.warn(me.state,res.message)
              var _s = setTimeout(()=>{
                me.warn(me.state,''); //清除
                send_btn.isReady = true;
              },3*1000);
              send_btn.isReady = true;
            }
        });
    }else{
      send_btn.isReady = true;
    }
  }

  register(){
    var me = this;
    var data = {};
    _.each(document.forms['register_form'].elements,(elem)=>{
      // console.log(elem);
      data[elem.name] = elem.value;
    })
    // todo check
    $.post('http://api.learningrabbit.qinixapp.com/v1/register',data,'json')
      .done((res)=>{
        res = typeof res == 'string' ? JSON.parse(res) : res;
        if(res.code == 0){
          me.success('register','注册成功！前去登录吧');
          var s = setTimeout(()=>{
            me.jump('login')
            me.warn('register','')
            document.forms['regitser_form'].reset()
            clearTimeout(s);
          },1000)
        }else{
          me.warn('register',res.message)
        }
      })
  }

  login(){
    var me = this;
    var data = {};
    _.each(document.forms['login_form'].elements,(elem)=>{
      // console.log(elem);
      data[elem.name] = elem.value;
    })
    // todo check
    // $.post('http://api.learningrabbit.qinixapp.com/v1/login',data,'json')
    //   .done((res)=>{
    //     res = typeof res == 'string' ? JSON.parse(res) : res;
    //     if(res.code == 0){
    //       me.success('login','登陆成功');
    //       var s = setTimeout(()=>{
    //         me.hide();
    //         me.warn('login','');
    //         document.forms['login_form'].reset()
    //         clearTimeout(s);
    //       },1000)
    //     }else{
    //       me.warn('login',res.message)
    //     }
    //   })
    user.login(data)
    .done(()=>{
      me.success('login','登陆成功');
        var s = setTimeout(()=>{
          me.hide();
          me.warn('login','');
          document.forms['login_form'].reset()
          clearTimeout(s);
        },1000)
    }).error((meesage)=>{
        me.warn('login',message)
    })
  }

  bindOpenLogin(){
    //微博
    $('.other-platform-login .weibo').off('click').on('click',()=>{
      WB2.login(user.WB_login.bind(user));
    });

  }

  forget_password(){
    var me = this;
    var data = {};
    _.each(document.forms['forget_password_form'].elements,(elem)=>{
      // console.log(elem);
      data[elem.name] = elem.value;
    })
    // todo check
    $.post('http://api.learningrabbit.qinixapp.com/v1/reset_password',data,'json')
      .done((res)=>{
              res = typeof res == 'string' ? JSON.parse(res) : res;
        if(res.code == 0){
          me.success('forget_password','修改成功！前去登录吧');
          setTimeout(()=>{
            me.jump('login')
            me.warn('forget_password','')
            document.forms['forget_password_form'].reset()
            clearTimeout(s)
        },1000)

        }else{
          me.warn('forget_password',res.message)
        }
      })
  }

  warn(formName,message){
    $(`#${formName}_err`).html(`<span class="warning-tip">${message}</span>`)
  }

  success(formName, message){
    $(`#${formName}_err`).html(`<span class="success-tip">${message}</span>`)
  }

}

module.exports = user_modal;
