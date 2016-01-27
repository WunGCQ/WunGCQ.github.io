

class User {
  constructor() {
    if(!$.cookie('token')){
      this.isLogin = false;
      this.token = null;
    }else{
      this.isLogin = true;
      this.token = $.cookie('token');
    }

    //设置用户信息
    this.setUserInfo();

    //初始化事件广播
    this.events = {
      login: [],
      getUserData: [],
      updateUserData: []
    };

    this.getUserData();
  }

  init_WB_login(){
    //加载微博登录脚本
    // require.ensure('http://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=2873413329',()=>{
      // WB2.anyWhere(function(W){
      //   W.widget.connectButton({
      //       id: "wb_connect_btn",
      //       type:"7,2",
      //       callback : {
      //           login:function(o){	//登录后的回调函数
      //             console.log(o);
      //           },
      //           logout:function(){	//退出后的回调函数
      //           }
      //       }
      //   });
      // });
    // });

  }
  WB_login(res){
    console.log(arguments);
  }
  setUserInfo(userInfo){
    if(userInfo){
      //传入的参数
      var user_province = userInfo.province;
      $.cookie('user_province',(!user_province || user_province == 'null') ? '北京市':user_province,{ expires: 30, path:'/XBT'});

      var user_subject = userInfo.subject;
      $.cookie('user_subject',(!user_subject || user_subject == 'null') ? 'science':user_subject,{ expires: 30, path:'/XBT'});

      $.cookie('username', userInfo.username,{ expires: 30, path:'/XBT'});
      var avatar = userInfo.avatar_url;

      avatar =  (!avatar || avatar == 'null') ? '../../img/logo.png' : avatar;
      $.cookie('avatar_url', avatar,{ expires: 1, path:'/XBT'});

      avatar = null;
      this.setUserInfo();
    }else{
      this.user_province = $.cookie('user_province');
      this.user_subject = $.cookie('user_subject');
      this.username = $.cookie('username');
      this.avatar_url =  $.cookie('avatar_url');
    }
  }

  getUserData(isUpdate){
    var me = this;
    if(!this.token){
      // alert('您尚未登录 注册 或 登录已经过期,请您登录/注册~');
    }else{
      $.ajax({
        url: 'http://api.learningrabbit.qinixapp.com/v1/users',
        dataType: 'json',
        beforeSend: (xhr)=>{
          xhr.setRequestHeader('Authorization',me.token);
        }
      }).done((res)=>{
        if(res.code == 0){
          me.setUserInfo(res.payload);
          if(isUpdate){
            me.onUpdateUserData();
          }else{
            me.onGetUserData();
          }

        }else{
          alert(`对不起, ${res.message}`)
        }
      })
    }
  }

  onLogin(){
    _.each(this.events.login,(func)=>{
      func(this);
    })
  }

  onGetUserData(){
    _.each(this.events.getUserData,(func)=>{
      func(this);
    })
  }

  onUpdateUserData(){
    _.each(this.events.updateUserData,(func)=>{
      func(this);
    })
  }

  on(event,func){
    switch (event) {
      case 'login':
        this.events.login.push(func)
        break;
      case 'getUserData':
        this.events.getUserData.push(func)
        break;
      case 'updateUserData':
        this.events.updateUserData.push(func)
        break;
    }
  }

  login(data){
    var me = this;
    var cb = null,err_cb = null;
    function deal(res){
      res = typeof res == 'string' ? JSON.parse(res) : res;
      if(res.code == 0){
        //设置token
        $.cookie('token',res.payload.token,{ expires: 7, path:'/XBT'});
        me.token = res.payload.token;
        me.isLogin = true;
        me.getUserData();
        cb && cb(res.payload)
      }else{
        err_cb && err_cb(res.message)
      }
    }
    function connect(){
      $.post('http://api.learningrabbit.qinixapp.com/v1/login',data,'json')
        .done((res)=>{
          deal(res)
        })
    }

    var ret = {
      done: function(func){
        cb = func;
        return ret
      },
      error: function(func){
        err_cb = func;
        return ret
      }
    }

    return {
      c: connect(),
      done: ret.done,
      error: ret.error
    };
  }

  logout(){
    $.cookie('token','',{expires:0,path:'/XBT'});
    $.cookie('username', '游客',{ expires: 30, path:'/XBT'});
    window.location.reload();
  }

}

var user = new User();
module.exports = user;
