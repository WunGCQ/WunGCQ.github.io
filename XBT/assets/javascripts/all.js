/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// var Vue = require('./lib/vue.js');
	// var Router = require('./lib/director.js').Router;
	//
	// var header = require('./component/header.vue');
	// var leftFilter = require('./component/leftFilter.vue');
	//
	//
	// var router = new Router();
	// var default_route = 'home';
	//
	// var app = new Vue(require('./component/app.vue'));
	//
	// // 路由相关
	// function toRoute(route) {
	//     window.location.hash = route;
	//     app.view.current_route = route;
	// }
	// function toDefaultRoute() {
	//     toRoute(default_route);
	// }
	// var root = './index.html';
	// routes.forEach(function (route) {
	//     router.on(route, function () {
	//        toRoute(route);
	//     });
	// });
	//
	// router.configure({
	//     notfound: toDefaultRoute
	// });
	//
	// router.init();
	// module.exports = {
	//
	// };
	'use strict';
	
	window.com = {};
	
	__webpack_require__(2).myExtends();
	
	//组件
	com.header = __webpack_require__(3);
	com.left_filter = __webpack_require__(8);
	com.user_modal = __webpack_require__(4);
	
	//页面控制器
	com.select_major = __webpack_require__(10);
	com.select_school = __webpack_require__(14);
	com.batch = __webpack_require__(17);
	
	com.school_intro = __webpack_require__(19);
	com.school_majors = __webpack_require__(21);
	com.school_colleges = __webpack_require__(23);
	
	com.school_video = __webpack_require__(25);
	
	com.user_center = __webpack_require__(28);
	
	com.index_page = __webpack_require__(30);
	//@ sourceMappingURL=all.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	function para(name) {
	  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	      results = regex.exec(window.location.search);
	  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	function session() {
	  if (arguments.length == 1) {
	    //get
	    return sessionStorage.getItem(arguments[0]);
	  } else if (arguments.length == 2) {
	    //set
	    return sessionStorage.setItem(arguments[0], arguments[1]);
	  }
	}
	
	var province_names = {
	  "北京市": "北京",
	  "天津市": "天津",
	  "重庆市": "重庆",
	  "上海市": "上海",
	  "河北省": "河北",
	  "山西省": "山西",
	  "辽宁省": "辽宁",
	  "吉林省": "吉林",
	  "黑龙江省": "黑龙江",
	  "江苏省": "江苏",
	  "浙江省": "浙江",
	  "安徽省": "安徽",
	  "福建省": "福建",
	  "江西省": "江西",
	  "山东省": "山东",
	  "河南省": "河南",
	  "湖北省": "湖北",
	  "湖南省": "湖南",
	  "广东省": "广东",
	  "海南省": "海南",
	  "四川省": "四川",
	  "贵州省": "贵州",
	  "云南省": "云南",
	  "陕西省": "陕西",
	  "甘肃省": "甘肃",
	  "青海省": "青海",
	  "台湾省": "台湾",
	  "内蒙古自治区": "内蒙古",
	  "广西壮族自治区": "广西",
	  "西藏自治区": "西藏",
	  "宁夏回族自治区": "宁夏",
	  "新疆维吾尔自治区": "新疆",
	  "香港特别行政区": "香港",
	  "澳门特别行政区": "澳门"
	};
	var province_names_reverse = (function () {
	  var obj = {};
	  _.each(province_names, function (val, name) {
	    obj[val] = name;
	  });
	  return obj;
	})();
	
	var is = {
	  phone: function phone(_phone) {
	    return (/(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/.test(_phone)
	    );
	  }
	};
	var myExtends = function myExtends() {
	  String.prototype.decodeHTML = function () {
	    var str = this.replace(new RegExp('\r?\n', 'g'), '<\p><p>');
	    return str;
	  };
	};
	module.exports = {
	  para: para,
	  session: session,
	  province_names: province_names,
	  province_names_reverse: province_names_reverse,
	  is: is,
	  myExtends: myExtends
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var user_modal = __webpack_require__(4);
	var user = __webpack_require__(5);
	var Feedback = __webpack_require__(34);
	
	var header = (function () {
	  function header() {
	    _classCallCheck(this, header);
	
	    var me = this;
	    this.tmp = __webpack_require__(7);
	    this.renderer = _.template(this.tmp);
	    this.dom = null;
	    this.user_modal = null;
	    this.feedback = null;
	
	    //获取用户信息后立即调用render
	    user.on('getUserData', function (user) {
	      me.render();
	    });
	    user.on('updateUserData', function (user) {
	      me.render();
	    });
	
	    this.render();
	  }
	
	  _createClass(header, [{
	    key: 'render',
	    value: function render() {
	      var userData = {
	        USER: {
	          isLogin: user.isLogin,
	          username: user.username,
	          avatar_url: user.avatar_url
	        }
	      };
	      var html = this.renderer(userData); //todo 后续做USER模块替换
	      $('header').get(0).outerHTML = html; //替换html
	      this.dom = $('header').eq(0);
	      this.bind();
	    }
	  }, {
	    key: 'search',
	    value: function search() {
	      var str = $('#search_input').val();
	      window.location.href = '/XBT/html/layout/select_school.html?school_name=' + str;
	    }
	  }, {
	    key: 'showDownload',
	    value: function showDownload() {
	      $('.download-app', this.dom).removeClass('hide').removeClass('_hide');
	    }
	  }, {
	    key: 'hideDownload',
	    value: function hideDownload() {
	      $('.download-app', this.dom).addClass('_hide');
	    }
	  }, {
	    key: 'bind',
	    value: function bind() {
	      var me = this;
	      $('#search_input', this.dom).on('keydown', function (ev) {
	        if (ev.keyCode == 13) {
	          //回车搜索
	          me.search();
	        }
	      });
	      //按键搜索
	      $('#header_search_btn', this.dom).click(me.search.bind(me));
	
	      //登录弹框
	      $('.btn_login', this.dom).click(function () {
	
	        if (!me.user_modal) {
	          me.user_modal = new user_modal();
	        }
	
	        me.user_modal.show('login');
	      });
	
	      //注册弹框
	      $('.btn_register', this.dom).click(function () {
	
	        if (!me.user_modal) {
	          me.user_modal = new user_modal();
	        }
	
	        me.user_modal.show('register');
	      });
	
	      //显示下载窗口
	      $('.btn_APP', this.dom).click(me.showDownload);
	      //收起下载窗口
	
	      $('.download-app .m_close', this.dom).click(me.hideDownload);
	
	      //bind back top
	      $('#g_right_bottom_btns #g_back_top', me.dom).click(me.backTop);
	
	      //bind show feedback
	      $('#g_right_bottom_btns #g_feedback_show', me.dom).click(me.showFeedbackWindow);
	    }
	  }, {
	    key: 'showFeedbackWindow',
	    value: function showFeedbackWindow() {
	      if (!this.feedback) {
	        this.feedback = new Feedback();
	      } else {
	        this.feedback.show();
	      }
	    }
	  }, {
	    key: 'backTop',
	    value: function backTop() {
	      $(window).scrollTop(0);
	    }
	  }]);
	
	  return header;
	})();
	
	module.exports = header;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var is = __webpack_require__(2).is;
	var user = __webpack_require__(5);
	
	var user_modal = (function () {
	  function user_modal() {
	    _classCallCheck(this, user_modal);
	
	    this.state = '';
	
	    this.dom = null;
	    this.modol_window = null;
	
	    this.template = __webpack_require__(6);
	  }
	
	  //显示
	
	  _createClass(user_modal, [{
	    key: 'show',
	    value: function show(formClass) {
	      var me = this;
	
	      if (this.dom) {
	        this.dom.addClass('show');
	      } else {
	        $('body').append(this.template);
	        this.dom = $('#g__modal_window_mask');
	        this.dom.addClass('show');
	        this.modal_window = $('#g__modal_window');
	        this.bind();
	      }
	      if (formClass) {
	        me.jump(formClass);
	      } else {
	        if (this.modal_window.attr('class') == 'g__modal-window') {
	          // 还未显示任何表单
	          me.jump('login');
	        }
	      }
	    }
	
	    //隐藏
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var me = this;
	      me.dom.addClass('hide').removeClass('show');
	      var s = setTimeout(function () {
	        me.dom.removeClass('hide');
	        clearTimeout(s);
	      }, 350);
	    }
	
	    //移除
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.dom.remove();
	    }
	  }, {
	    key: 'jump',
	    value: function jump(window_state) {
	      this.modal_window.attr('class', 'g__modal-window').addClass(window_state);
	      this.state = window_state;
	    }
	
	    //事件绑定
	  }, {
	    key: 'bind',
	    value: function bind() {
	      var me = this;
	
	      //点击外部消失
	      this.dom.on('click', function (ev) {
	        if (ev.target == me.dom.get(0)) {
	          me.hide();
	        }
	      });
	
	      //跳转login
	      $('.m-modal-title .tag-login', this.dom).click(function () {
	        me.jump('login');
	      });
	      //跳转register
	      $('.m-modal-title .tag-register', this.dom).click(function () {
	        me.jump('register');
	      });
	
	      //跳转forget_password
	      $('.m-modal-title .tag-forget_password', this.dom).click(function () {
	        me.jump('forget_password');
	      });
	
	      //表单提交
	      $('.form-area.login .submit-btn', this.dom).click(this.login.bind(me));
	      $('.form-area.register .submit-btn', this.dom).click(this.register.bind(me));
	      $('.form-area.forget_password .submit-btn', this.dom).click(this.forget_password.bind(me));
	
	      //发送验证码
	      $('.form-area .verify_code_btn', this.dom).click(function (ev) {
	        if (ev.target.isReady == undefined || ev.target.isReady == true) {
	          ev.target.isReady = false;
	          me.send_verify_code(ev.target);
	        } else {
	          return;
	        }
	      });
	
	      //开放平台登录
	      me.bindOpenLogin();
	    }
	  }, {
	    key: 'send_verify_code',
	    value: function send_verify_code(send_btn) {
	      var me = this;
	      var phone = $('.form-area.' + this.state + ' input[name=phone]', this.dom).val();
	      if (is.phone(phone)) {
	        $.post('http://api.learningrabbit.qinixapp.com/v1/request_sms_code', { phone: phone }, 'json').done(function (res) {
	          res = typeof res == 'string' ? JSON.parse(res) : res;
	          if (res.code == 0) {
	            $(send_btn).addClass('disable');
	            var s = setTimeout(function () {
	              $(send_btn).removeClass('disable');
	              send_btn.isReady = true;
	              clearTimeout(s);
	            }, 60 * 1000);
	          } else {
	            me.warn(me.state, res.message);
	            var _s = setTimeout(function () {
	              me.warn(me.state, ''); //清除
	              send_btn.isReady = true;
	            }, 3 * 1000);
	            send_btn.isReady = true;
	          }
	        });
	      } else {
	        send_btn.isReady = true;
	      }
	    }
	  }, {
	    key: 'register',
	    value: function register() {
	      var me = this;
	      var data = {};
	      _.each(document.forms['register_form'].elements, function (elem) {
	        // console.log(elem);
	        data[elem.name] = elem.value;
	      });
	      // todo check
	      $.post('http://api.learningrabbit.qinixapp.com/v1/register', data, 'json').done(function (res) {
	        res = typeof res == 'string' ? JSON.parse(res) : res;
	        if (res.code == 0) {
	          me.success('register', '注册成功！前去登录吧');
	          var s = setTimeout(function () {
	            me.jump('login');
	            me.warn('register', '');
	            document.forms['regitser_form'].reset();
	            clearTimeout(s);
	          }, 1000);
	        } else {
	          me.warn('register', res.message);
	        }
	      });
	    }
	  }, {
	    key: 'login',
	    value: function login() {
	      var me = this;
	      var data = {};
	      _.each(document.forms['login_form'].elements, function (elem) {
	        // console.log(elem);
	        data[elem.name] = elem.value;
	      });
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
	      user.login(data).done(function () {
	        me.success('login', '登陆成功');
	        var s = setTimeout(function () {
	          me.hide();
	          me.warn('login', '');
	          document.forms['login_form'].reset();
	          clearTimeout(s);
	        }, 1000);
	      }).error(function (meesage) {
	        me.warn('login', message);
	      });
	    }
	  }, {
	    key: 'bindOpenLogin',
	    value: function bindOpenLogin() {
	      //微博
	      $('.other-platform-login .weibo').off('click').on('click', function () {
	        WB2.login(user.WB_login.bind(user));
	      });
	    }
	  }, {
	    key: 'forget_password',
	    value: function forget_password() {
	      var me = this;
	      var data = {};
	      _.each(document.forms['register_form'].elements, function (elem) {
	        // console.log(elem);
	        data[elem.name] = elem.value;
	      });
	      // todo check
	      $.post('http://api.learningrabbit.qinixapp.com/v1/reset_password', data, 'json').done(function (res) {
	        res = typeof res == 'string' ? JSON.parse(res) : res;
	        if (res.code == 0) {
	          me.success('forget_password', '修改成功！前去登录吧');
	          setTimeout(function () {
	            me.jump('login');
	            me.warn('forget_password', '');
	            document.forms['forget_password_form'].reset();
	            clearTimeout(s);
	          }, 1000);
	        } else {
	          me.warn('forget_password', res.message);
	        }
	      });
	    }
	  }, {
	    key: 'warn',
	    value: function warn(formName, message) {
	      $('#' + formName + '_err').html('<span class="warning-tip">' + message + '</span>');
	    }
	  }, {
	    key: 'success',
	    value: function success(formName, message) {
	      $('#' + formName + '_err').html('<span class="success-tip">' + message + '</span>');
	    }
	  }]);
	
	  return user_modal;
	})();
	
	module.exports = user_modal;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var User = (function () {
	  function User() {
	    _classCallCheck(this, User);
	
	    if (!$.cookie('token')) {
	      this.isLogin = false;
	      this.token = null;
	    } else {
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
	
	  _createClass(User, [{
	    key: 'init_WB_login',
	    value: function init_WB_login() {
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
	  }, {
	    key: 'WB_login',
	    value: function WB_login(res) {
	      console.log(arguments);
	    }
	  }, {
	    key: 'setUserInfo',
	    value: function setUserInfo(userInfo) {
	      if (userInfo) {
	        //传入的参数
	        var user_province = userInfo.province;
	        $.cookie('user_province', !user_province || user_province == 'null' ? '北京市' : user_province, { expires: 30, path: '/XBT' });
	
	        var user_subject = userInfo.subject;
	        $.cookie('user_subject', !user_subject || user_subject == 'null' ? 'science' : user_subject, { expires: 30, path: '/XBT' });
	
	        $.cookie('username', userInfo.username, { expires: 30, path: '/XBT' });
	        var avatar = userInfo.avatar_url;
	
	        avatar = !avatar || avatar == 'null' ? '../../img/logo.png' : avatar;
	        $.cookie('avatar_url', avatar, { expires: 1, path: '/XBT' });
	
	        avatar = null;
	        this.setUserInfo();
	      } else {
	        this.user_province = $.cookie('user_province');
	        this.user_subject = $.cookie('user_subject');
	        this.username = $.cookie('username');
	        this.avatar_url = $.cookie('avatar_url');
	      }
	    }
	  }, {
	    key: 'getUserData',
	    value: function getUserData(isUpdate) {
	      var me = this;
	      if (!this.token) {
	        // alert('您尚未登录 注册 或 登录已经过期,请您登录/注册~');
	      } else {
	          $.ajax({
	            url: 'http://api.learningrabbit.qinixapp.com/v1/users',
	            dataType: 'json',
	            beforeSend: function beforeSend(xhr) {
	              xhr.setRequestHeader('Authorization', me.token);
	            }
	          }).done(function (res) {
	            if (res.code == 0) {
	              me.setUserInfo(res.payload);
	              if (isUpdate) {
	                me.onUpdateUserData();
	              } else {
	                me.onGetUserData();
	              }
	            } else {
	              alert('对不起, ' + res.message);
	            }
	          });
	        }
	    }
	  }, {
	    key: 'onLogin',
	    value: function onLogin() {
	      var _this = this;
	
	      _.each(this.events.login, function (func) {
	        func(_this);
	      });
	    }
	  }, {
	    key: 'onGetUserData',
	    value: function onGetUserData() {
	      var _this2 = this;
	
	      _.each(this.events.getUserData, function (func) {
	        func(_this2);
	      });
	    }
	  }, {
	    key: 'onUpdateUserData',
	    value: function onUpdateUserData() {
	      var _this3 = this;
	
	      _.each(this.events.updateUserData, function (func) {
	        func(_this3);
	      });
	    }
	  }, {
	    key: 'on',
	    value: function on(event, func) {
	      switch (event) {
	        case 'login':
	          this.events.login.push(func);
	          break;
	        case 'getUserData':
	          this.events.getUserData.push(func);
	          break;
	        case 'updateUserData':
	          this.events.updateUserData.push(func);
	          break;
	      }
	    }
	  }, {
	    key: 'login',
	    value: function login(data) {
	      var me = this;
	      var cb = null,
	          err_cb = null;
	      function deal(res) {
	        res = typeof res == 'string' ? JSON.parse(res) : res;
	        if (res.code == 0) {
	          //设置token
	          $.cookie('token', res.payload.token, { expires: 7, path: '/XBT' });
	          me.token = res.payload.token;
	          me.isLogin = true;
	          me.getUserData();
	          cb && cb(res.payload);
	        } else {
	          err_cb && err_cb(res.message);
	        }
	      }
	      function connect() {
	        $.post('http://api.learningrabbit.qinixapp.com/v1/login', data, 'json').done(function (res) {
	          deal(res);
	        });
	      }
	
	      var ret = {
	        done: function done(func) {
	          cb = func;
	          return ret;
	        },
	        error: function error(func) {
	          err_cb = func;
	          return ret;
	        }
	      };
	
	      return {
	        c: connect(),
	        done: ret.done,
	        error: ret.error
	      };
	    }
	  }]);
	
	  return User;
	})();
	
	var user = new User();
	module.exports = user;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<div class=\"g__mask\" id=\"g__modal_window_mask\">\n  <div class=\"g__modal-window\" id=\"g__modal_window\">\n    <div class=\"m-modal-title\">\n      <div class=\"m-title-item tag-login\"><span>登录</span></div>\n      <div class=\"m-title-item tag-register\"><span>注册</span></div>\n      <div class=\"m-title-item tag-forget_password\"><span>找回密码</span></div>\n    </div>\n    <div class=\"m-modal-content\">\n      <div class=\"m-left\">\n        <div class=\"app-download\">\n          <h5>iOS客户端下载</h5>\n          <img class=\"m-qr-code\" src=\"https://img.alicdn.com/tfscom/TB1yrcfFFXXXXa9aVXXXXXXXXXX.png\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"m-right\">\n        <!-- 登录表单 -->\n        <form class=\"form-area login\" name=\"login_form\">\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"手机号\"/>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"密码\"/>\n          </div>\n          <div class=\"input-row\">\n\n          </div>\n          <div class=\"err-row\" id=\"login_err\">\n            <span></span>\n          </div>\n          <div class=\"submit-btn\" type=\"button\"></div>\n        </form>\n        <!-- 登录表单 -->\n\n        <!-- 注册表单 -->\n        <form class=\"form-area register\" name=\"register_form\">\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"手机号\"/>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control verify-code\" name=\"verify_code\" placeholder=\"验证码\"/>\n            <span for=\"search_input\" class=\"col btn btn-primary cn verify_code_btn\">发送验证码</span>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"密码\"/>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"昵称\"/>\n          </div>\n          <div class=\"err-row\" id=\"register_err\">\n            <span></span>\n          </div>\n          <div class=\"submit-btn\" type=\"button\"></div>\n        </form>\n        <!-- 注册表单 -->\n\n        <!-- 找密表单 -->\n        <form class=\"form-area forget_password\" name=\"forget_password_form\">\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"手机号\"/>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control verify-code\" name=\"verify_code\" placeholder=\"验证码\"/>\n            <span for=\"search_input\" class=\"col btn btn-primary cn verify_code_btn\">发送验证码</span>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"新的密码\"/>\n          </div>\n          <div class=\"err-row\" id=\"forget_password_err\">\n            <span></span>\n          </div>\n          <div class=\"submit-btn\" type=\"button\"></div>\n        </form>\n        <!-- 找密表单 -->\n        <div class=\"other-platform-login\">\n          <em>\n            第三方登录\n          </em>\n          <a class=\"qq\" href=\"\">&#xe658;</a>\n          <a class=\"wechat\"  href=\"\">&#xe63c;</a>\n          <a class=\"weibo\" id=\"weibo_connect_btn\" href=\"javascript:;\">&#xe63d;</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<header class=\"header g__header <%- USER.isLogin?'':'not-login' %>\">\n    <div class=\"col header_left\">\n      <a class=\"col logo\" href=\"/XBT/html/layout/index.html\" target=\"_blank\"></a>\n      <ul class=\"header-nav\">\n        <li class=\"nav-filter filter_province\" data-target=\"province\">地区</li>\n        <li class=\"nav-filter filter_category\" data-target=\"category\">类别</li>\n        <li class=\"nav-filter filter_tags\" data-target=\"tags\">标签</li>\n        <li class=\"nav-filter filter_major\">学科</li>\n        <!--hover list begin-->\n        <div class=\"m-hover-list\">\n          <div class=\"m-list province\">\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=北京\">北京</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=天津\">天津</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=重庆\">重庆</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=上海\">上海</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=河北\">河北</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=山西\">山西</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=辽宁\">辽宁</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=吉林\">吉林</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=黑龙江\">黑龙江</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=江苏\">江苏</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=浙江\">浙江</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=安徽\">安徽</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=福建\">福建</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=江西\">江西</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=山东\">山东</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=河南\">河南</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=湖北\">湖北</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=湖南\">湖南</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=广东\">广东</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=海南\">海南</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=四川\">四川</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=贵州\">贵州</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=云南\">云南</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=陕西\">陕西</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=甘肃\">甘肃</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=青海\">青海</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=台湾\">台湾</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=内蒙古\">内蒙古</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=广西\">广西</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=西藏\">西藏</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=宁夏\">宁夏</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=新疆\">新疆</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=香港\">香港</a>\n             <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?province=澳门\">澳门</a>\n          </div>\n          <div class=\"m-list category\">\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=综合类\">综合类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=理工类\">理工类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=财经类\">财经类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=军事类\">军事类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=林业类\">林业类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=民族类\">民族类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=农林类\">农林类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=商学院\">商学院</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=师范类\">师范类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=医药类\">医药类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=艺术类\">艺术类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=语文类\">语文类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=语言类\">语言类</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?category=政法类\">政法类</a>\n          </div>\n          <div class=\"m-list tags\">\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?tag=211\">211</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?tag=985\">985</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?tag=研究生院\">研究生院</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?tag=国防生\">国防生</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_school.html?tag=卓越计划\">卓越计划</a>\n          </div>\n          <div class=\"m-list level1\">\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=理学\">理学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=艺术学\">艺术学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=经济学\">经济学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=管理学\">管理学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=法学\">法学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=文学\">文学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=教育学\">教育学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=工学\">工学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=哲学\">哲学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=历史学\">历史学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=医学\">医学</a>\n            <a target=\"_blank\" href=\"/XBT/html/layout/select_major.html?level1=军事学\">军事学</a>\n          </div>\n        </div>\n        <!-- hover list end -->\n      </ul>\n    </div>\n    <form class=\"col search-area text-center\" action=\"/XBT/html/layout/select_school.html\">\n        <div class=\"input-content-wrapper\">\n          <input type=\"text\" class=\"m-input\" name=\"school_name\" id=\"search_input\" placeholder=\"在此处输入你想搜索的学校\"/>\n          <button for=\"search_input\" class=\"btn header-search-btn\" id=\"header_search_btn\"></button>\n        </div>\n    </form>\n    <div class=\"col h__user text-right\">\n        <div class=\"head\" style=\"background-image:url('<%- USER.avatar_url %>')\"><img src=\"<%- USER.avatar_url %>\" alt=\"\"></div>\n        <a href=\"/XBT/html/layout/static_user_center.html\" class=\"username\"><%- USER.username %></a>\n        <a class=\"btn_login\">登录</a>\n        <a class=\"btn_register\">注册</a>\n        <a class=\"btn_logout\">登出</a>\n        <a class=\"btn_APP\">下载APP</a>\n    </div>\n    <div class=\"download-app hide _hide\">\n      <button class=\"bg\" type=\"button\">\n        <div class=\"intro\">\n        </div>\n        <div class=\"m-close m_close\">关闭</div>\n      </button>\n    </div>\n    <div class=\"m-right-bottom-btns\" id=\"g_right_bottom_btns\">\n      <div class=\"m-back-top\" id=\"g_back_top\"><span>回到顶部</span><i></i></div>\n      <div class=\"m-feedback\" id=\"g_feedback_show\"><span>朕要吐槽</span><i></i></div>\n    </div>\n</header>";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var para = __webpack_require__(2).para;
	var session = __webpack_require__(2).session;
	var template = __webpack_require__(9);
	var province_list = ["北京市", "天津市", "重庆市", "上海市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"];
	var province_names = ["北京市", "天津市", "重庆市", "上海市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"];
	var province_names_reverse = __webpack_require__(2).province_names_reverse;
	var USER = __webpack_require__(5);
	
	function hide_left_filter() {
	  $('#g_content').toggleClass('hide-left-filter');
	}
	
	var controller = (function () {
	  function controller(arg) {
	    _classCallCheck(this, controller);
	
	    this.arg = Object.assign({}, arg);
	    if (this.arg.is_hide == undefined) {
	      this.arg.is_hide = false;
	    }
	
	    this.renderer = _.template(template);
	    this.dom = $('#g_left_filter');
	    //获取组件初始状态
	    this.getInitialState();
	
	    //渲染页面
	    this.render();
	
	    //绑定事件
	    this.bind();
	    return this;
	  }
	
	  _createClass(controller, [{
	    key: 'hide_left_filter',
	    value: function hide_left_filter() {
	      $('#g_content').toggleClass('hide-left-filter');
	    }
	  }, {
	    key: 'getInitialState',
	    value: function getInitialState() {
	      var province = province_names_reverse[para('province')];
	      this.province = session('province') || USER.user_province;
	      this.subject = session('subject') || USER.user_subject || 'science';
	      this.score = session('score') || USER.user_score || 750;
	    }
	  }, {
	    key: 'get_province_select_html',
	    value: function get_province_select_html() {
	      var _this = this;
	
	      return _.map(province_list, function (p) {
	        return '<option value="' + p + '" ' + (p == _this.province ? 'selected' : '') + '>\n          ' + p + '\n        </option>';
	      }).join('');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = {
	        province: this.province,
	        subject: this.subject,
	        score: this.score,
	        province_list: this.get_province_select_html()
	      };
	      data = Object.assign(data, this.arg);
	      if (this.dom.length > 0) {
	        this.dom.get(0).outerHTML = this.renderer(data);
	      }
	    }
	  }, {
	    key: 'bind',
	    value: function bind() {
	      var _this2 = this;
	
	      //文理
	      $('#m_left_subject').on('change', function (ev) {
	        _this2.subject = $('input[name=subject]:checked').val();
	        session('subject', _this2.subject);
	        _this2.onChange && _this2.onChange();
	      });
	      //省份选择
	      $('#m_province_selector').on('change', function (ev) {
	        _this2.province = $('#m_province_selector').val();
	        session('province', _this2.province);
	        _this2.onChange && _this2.onChange();
	      });
	      $('select').select2();
	      //分数
	      $('#m_left_score').on('change', function (ev) {
	        _this2.score = $(ev.target).val();
	        session('score', _this2.score);
	      }).on('keydown', function (ev) {
	        _this2.score = $(ev.target).val();
	        session('score', _this2.score);
	        if (ev.keyCode == 13) {
	          _this2.onChange && _this2.onChange();
	        }
	      });
	
	      //hide left_filter
	      $('#toggle_filter_btn').off('click').on('click', this.hide_left_filter);
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      //属性变化回调
	    }
	  }, {
	    key: 'findMajor',
	    value: function findMajor() {
	      //按专业查找
	    }
	  }, {
	    key: 'findSchool',
	    value: function findSchool() {
	      //按学校查找
	    }
	  }]);
	
	  return controller;
	})();
	
	module.exports = controller;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<div class=\"g__left-filter <%= is_hide?'hide':'' %>\" id=\"g_left_filter\">\n    <span class=\"toggle-filter-btn\" id=\"toggle_filter_btn\">收起左侧筛选</span>\n    <!-- 头部筛选标准 -->\n    <div class=\"m-wrapper wrapper-1\">\n        <div class=\"wen-li\" id=\"m_left_subject\">\n\n            <div class=\"item\">\n                <input type=\"radio\" id=\"wen\" name=\"subject\" value=\"science\" <% if(subject != 'art'){ %> checked=\"\" <%}%>/>\n                <label for=\"wen\">\n                    <em>理科</em>\n                </label>\n            </div>\n            <div class=\"item\">\n                <input type=\"radio\" id=\"li\" name=\"subject\" value=\"art\" <% if(subject == 'art'){ %> checked=\"\" <%}%> />\n                <label for=\"li\">\n                    <em>文科</em>\n                </label>\n            </div>\n        </div>\n\n        <div class=\"province-wrapper\">\n            <select name=\"\" id=\"m_province_selector\">\n                <%= province_list %>\n            </select>\n        </div>\n\n        <div class=\"grade-wrapper\">\n            <input type=\"number\" class=\"form-control m-input\" id=\"m_left_score\" value=\"<%=score%>\" placeholder=\"请输入期望的最高分\"/>\n        </div>\n    </div>\n    <!-- 头部筛选标准 -->\n    <!-- 志愿检索方式 -->\n    <div class=\"m-wrapper wrapper-2\">\n        <h5>志愿推荐</h5>\n\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/select_major.html\"><i>&#xe652;</i><span>按专业检索</span></a>\n        </div>\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/select_school.html\"><i>&#xe650;</i><span>按高校检索</span></a>\n        </div>\n    </div>\n    <!-- 志愿检索方式 -->\n    <!-- 数据资料 -->\n    <div class=\"m-wrapper wrapper-2\">\n        <h5>数据资料</h5>\n\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/select_school.html\"><i>&#xe653;</i><span>学院排行与查询</span></a>\n        </div>\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/select_school.html\"><i>&#xe64f;</i><span>专业查询</span></a>\n        </div>\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/batch.html\"><i>&#xe64d;</i><span>批次线查询</span></a>\n        </div>\n    </div>\n    <!-- 数据资料 -->\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wungcq on 15/12/20.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var province_names = __webpack_require__(2).province_names;
	var para = __webpack_require__(2).para;
	var USER = __webpack_require__(5);
	var template = __webpack_require__(11);
	var left_filter = __webpack_require__(8);
	var header = new (__webpack_require__(3))();
	var major_modal_generator = __webpack_require__(12);
	
	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);
	
	    this.table_head = $('#major_thead');
	    this.selected_tr = $('#selected_tr');
	    this.majors_wrapper = $('#majors_wrapper');
	    this.render = _.template(template);
	    this.major_modal = new major_modal_generator();
	    this.level = 1;
	    this.level_1_data = [{ "icon": "&#xe65f;", "name": "理学" }, { "icon": "&#xe660;", "name": "艺术学" }, { "icon": "&#xe65b;", "name": "经济学" }, { "icon": "&#xe65e;", "name": "管理学" }, { "icon": "&#xe656;", "name": "法学" }, { "icon": "&#xe657;", "name": "文学" }, { "icon": "&#xe65c;", "name": "教育学" }, { "icon": "&#xe661;", "name": "工学" }, { "icon": "&#xe65d;", "name": "哲学" }, { "icon": "&#xe65a;", "name": "历史学" }, { "icon": "&#xe654;", "name": "医学" }, { "icon": "&#xe655;", "name": "军事学" }];
	
	    this.level_2_data = [];
	    this.level_3_data = [];
	    //选择的index
	    this.level_1_index = 0;
	    this.level_2_index = 0;
	    Object.prototype.freeze && Object.freeze(this.level_1_data);
	    this.left_filter = new left_filter();
	    this.init();
	    this.resumeFromUrl();
	  }
	
	  _createClass(controller, [{
	    key: 'resumeFromUrl',
	    value: function resumeFromUrl() {
	      var me = this;
	      //
	      var arr = _.map(this.level_1_data, function (item) {
	        var n = item.name;
	        return '<a target="_blank" href="/XBT/html/layout/select_major.html?level1=' + n + '">' + n + '</a>';
	      }).join('\n');
	      console.log(arr);
	      var name = para('level1');
	      if (name) {
	        var index = this.level_1_data.findIndex(function (item) {
	          return item.name == name;
	        });
	
	        me.jump_level_2.call(me, index);
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var me = this;
	      $('th', this.table_head).eq(0).on('click', me.jump_level_1.bind(me));
	
	      this.left_filter.onChange = (function () {
	        if (me.level == 3) {
	          me.get_level_3_data(me.level_2_index).done(me.render_level_3);
	        }
	      }).bind(this);
	      me.jump_level_1();
	    }
	  }, {
	    key: 'getRightSequence',
	    value: function getRightSequence() {
	      var arr = this.level_1_data.sort(function (pre, next) {
	        return pre.name < next.name;
	      });
	      console.log(JSON.stringify(arr));
	    }
	  }, {
	    key: 'jump_level_1',
	    value: function jump_level_1() {
	      var me = this;
	
	      $('th', this.table_head).removeClass('active');
	      $('th.level_1').addClass('active');
	
	      me.level = 1;
	
	      //填充已选择
	      $('td .m_major', this.selected_tr).remove();
	
	      this.render_level_1();
	    }
	  }, {
	    key: 'jump_level_2',
	    value: function jump_level_2(index) {
	      var me = this;
	
	      $('th', this.table_head).removeClass('active');
	      $('td.level_2').addClass('active');
	
	      //存储选择结果
	      if (index) this.level_1_index = index;
	
	      //填充已选择
	      $('td .m_major', this.selected_tr).remove();
	      $('td.level_1').append(me.render({ majors: new Array(me.level_1_data[me.level_1_index]) }));
	
	      me.get_level_2_data(me.level_1_index).done(me.render_level_2);
	    }
	  }, {
	    key: 'jump_level_3',
	    value: function jump_level_3(index) {
	      var me = this;
	
	      $('th', this.table_head).removeClass('active');
	      $('th.level_3').addClass('active');
	
	      //存储选择结果
	      if (index) me.level_2_index = index;
	      //填充已选择
	      $('td .m_major', this.selected_tr).remove();
	      $('td.level_1').append(me.render({ majors: new Array(me.level_1_data[me.level_1_index]) }));
	      $('td.level_2').append(me.render({ majors: new Array(me.level_2_data[me.level_2_index]) }));
	
	      me.get_level_3_data(me.level_2_index).done(me.render_level_3);
	    }
	  }, {
	    key: 'render_level_1',
	    value: function render_level_1() {
	      var me = this;
	
	      var html = this.render({ majors: this.level_1_data });
	      this.majors_wrapper.html(html);
	
	      //bind => jump_to_level_2
	      $.each($('.m_major', this.majors_wrapper), function (index, node) {
	        //绑定事件
	        $(node).on('click', me.jump_level_2.bind(me, index));
	      });
	    }
	  }, {
	    key: 'render_level_2',
	    value: function render_level_2() {
	      var me = this;
	      var html = '';
	      if (!this.level_2_data || this.level_2_data.length == 0) {
	        html = '<span class="m_empty">没有搜索结果,请切换搜索选项再试~~</span>';
	      } else {
	        html = this.render({ majors: this.level_2_data });
	      }
	
	      this.majors_wrapper.html(html);
	      //bind
	      $.each($('.m_major', this.majors_wrapper), function (index, node) {
	        //绑定事件
	
	        $(node).on('click', me.jump_level_3.bind(me, index));
	      });
	    }
	  }, {
	    key: 'render_level_3',
	    value: function render_level_3() {
	      var me = this;
	      var html = '';
	      if (!this.level_3_data || this.level_3_data.length == 0) {
	        html = '<span class="m_empty">没有搜索结果,请切换搜索选项再试~~</span>';
	      } else {
	        html = this.render({ majors: this.level_3_data });
	      }
	
	      this.majors_wrapper.html(html);
	      //bind
	      $.each($('.m_major', this.majors_wrapper), function (index, node) {
	        //绑定事件
	        $(node).on('click', me.set_major.bind(me, index, me.level_3_data[index]));
	      });
	    }
	  }, {
	    key: 'get_level_2_data',
	    value: function get_level_2_data(index) {
	      var me = this;
	      var cb = null;
	      var level_1 = me.level_1_data[index].name;
	
	      $.get('http://api.learningrabbit.qinixapp.com/v1/majors/list_level2?level1=' + level_1, null, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.level_2_data = _.map(res.payload, function (major) {
	            return { name: major };
	          });
	        }
	        cb && cb.call(me);
	      });
	
	      return {
	        done: function done(callback) {
	          cb = callback;
	        }
	      };
	    }
	  }, {
	    key: 'get_level_3_data',
	    value: function get_level_3_data(index) {
	      var me = this;
	      var cb = null;
	      var level_2 = me.level_2_data[index].name;
	
	      var data = {
	        user_province: province_names[USER.user_province],
	        user_subject: USER.user_subject,
	        province: province_names[this.left_filter.province],
	        minor_category: level_2,
	        score: this.left_filter.score
	      };
	
	      $.get('http://api.learningrabbit.qinixapp.com/v1/majors', data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.level_3_data = _.map(res.payload.majors, function (major) {
	            return {
	              id: major.id,
	              name: major.name
	            };
	          });
	        }
	        cb && cb.call(me);
	      });
	
	      return {
	        done: function done(callback) {
	          cb = callback;
	        }
	      };
	    }
	  }, {
	    key: 'set_major',
	    value: function set_major(index, major_info) {
	      var major = this.level_3_data[index];
	      $('td.level_3 .m_major').remove();
	      $('td.level_3').append(this.render({ majors: new Array(this.level_3_data[index]) }));
	      this.get_major_info(major_info.id);
	    }
	  }, {
	    key: 'render_major_modal',
	    value: function render_major_modal(data) {
	      this.major_modal.render(data);
	    }
	  }, {
	    key: 'get_major_info',
	    value: function get_major_info(major_id) {
	      var me = this;
	      var data = {
	        user_province: province_names[USER.user_province],
	        user_subject: USER.user_subject,
	        score: this.left_filter.score
	      };
	      $.get('http://api.learningrabbit.qinixapp.com/v1/majors/' + major_id, data, 'json').done(function (res) {
	        if (res.code == 0) {
	          var data = res.payload;
	          var list = [];
	          var map = {};
	          _.each(res.payload.universities, function (uni) {
	            if (!map[uni.name]) {
	              list.push(uni);
	              map[uni.name] = true;
	            }
	          });
	
	          data.major = res.payload.name;
	          data.universities = list;
	          me.render_major_modal(data);
	        }
	      });
	    }
	  }]);
	
	  return controller;
	})();
	
	;
	
	module.exports = controller;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "\n<% _.each(majors, function(major){ %>\n<a class=\"m_major\">\n    <% if(major.icon){ %>\n    <div class=\"m_icon\"><%= major.icon %></div>\n    <% } %>\n    <div class=\"m_text\"><%= major.name %></div>\n</a>\n<% }) %>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var is = __webpack_require__(2).is;
	var user = __webpack_require__(5);
	
	var major_modal_generator = (function () {
	  function major_modal_generator() {
	    _classCallCheck(this, major_modal_generator);
	
	    this.state = '';
	
	    this.dom = null;
	    this.modol_window = null;
	
	    var template = __webpack_require__(13);
	    this.renderer = _.template(template);
	  }
	
	  //接收数据并渲染
	
	  _createClass(major_modal_generator, [{
	    key: 'render',
	    value: function render(data) {
	      var html = this.renderer(data);
	      $('body').append(html);
	      this.show();
	      //free
	      html = null;
	    }
	
	    //显示
	  }, {
	    key: 'show',
	    value: function show() {
	      this.dom = $('#m__major_modal_mask');
	      this.dom.addClass('show');
	      this.modal_window = $('#m__modal_window');
	      this.bind();
	    }
	
	    //隐藏
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var me = this;
	      me.dom.addClass('hide').removeClass('show');
	      var s = setTimeout(function () {
	        me.dom.removeClass('hide');
	        me.remove();
	        clearTimeout(s);
	      }, 350);
	    }
	
	    //移除
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.dom.remove();
	      this.dom = null;
	    }
	
	    //事件绑定
	  }, {
	    key: 'bind',
	    value: function bind() {
	      var me = this;
	
	      //点击外部消失
	      this.dom.on('click', function (ev) {
	        if (ev.target == me.dom.get(0)) {
	          me.hide();
	        }
	      });
	    }
	  }]);
	
	  return major_modal_generator;
	})();
	
	module.exports = major_modal_generator;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<div class=\"g__mask m__major_modal_mask\" id=\"m__major_modal_mask\">\n  <div class=\"g__modal-window m__major_modal_window\" id=\"m__modal_window\">\n    <div class=\"m-modal-title\">\n      <span><%- major %></span>\n    </div>\n    <div class=\"m-modal-content\">\n      <h4>匹配院校</h4>\n      <div class=\"m-scroll-view\">\n        <ol class=\"m-school-list\">\n          <%_.each( universities ,function(uni,i){ %>\n            <li>\n              <a target=\"_blank\" href=\"/XBT/html/layout/school_detail.html?school_id=<%= uni.name %>\">\n                <span><em><%= i+1 %></em> <%= uni.name %></span>\n              </a>\n            </li>\n          <% })%>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wungcq on 15/12/20.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var province_names = __webpack_require__(2).province_names;
	var province_names_reverse = __webpack_require__(2).province_names_reverse;
	var USER = __webpack_require__(5);
	
	var template = __webpack_require__(15);
	var left_filter = __webpack_require__(8);
	var header = new (__webpack_require__(3))();
	var para = __webpack_require__(2).para;
	var top_filter_res_template = __webpack_require__(16);
	
	var top_filter = (function () {
	  function top_filter() {
	    _classCallCheck(this, top_filter);
	
	    this.init();
	    this.onChange_callback = null;
	  }
	
	  _createClass(top_filter, [{
	    key: 'init',
	    value: function init() {
	
	      //data set
	      this.tags = {
	        province: _.map(province_names, function (p) {
	          return p;
	        }),
	        category: ["综合类", "理工类", "财经类", "军事类", "林业类", "民族类", "农林类", "商学院", "师范类", "医药类", "艺术类", "语文类", "语言类", "政法类"],
	        tags: ['211', '985', '研究生院', '国防生', '卓越计划']
	      };
	      //root dom
	      this.dom = $('#g_top_filter');
	      //btns
	      this.province_btn = $('#m_tf_province');
	      this.category_btn = $('#m_tf_category');
	      this.tags_btn = $('#m_tf_tags');
	      //wrappers
	      this.province_wrapper = $('#province_tag_wrapper');
	      this.category_wrapper = $('#category_tag_wrapper');
	      this.tags_wrapper = $('#tags_tag_wrapper');
	
	      this.tags_res_wrapper = $('#top_tag_res');
	      this.res_renderer = _.template(top_filter_res_template);
	      //selected tag
	      this.selected = {
	        province: null,
	        category: null,
	        tags: []
	      };
	
	      //bind select
	      this.bind();
	    }
	  }, {
	    key: 'resumeFromUrl',
	    value: function resumeFromUrl() {
	      var me = this;
	      var province = para('province'),
	          category = para('category'),
	          tags = para('tag');
	
	      if (province) {
	        var province_index = me.tags.province.indexOf(province);
	        var node = $('.tag', this.province_index).eq(province_index);
	        me.set_selected_tag.call(me, node, 'province', province_index);
	        // open tag wrapper
	        this.province_btn.click(me.switch_tag_wrapper.bind(me, 'province'));
	        me.switch_tag_wrapper.call(me, 'province');
	      }
	      if (category) {
	        var category_index = me.tags.category.indexOf(category);
	        var node = $('.tag', this.category_wrapper).eq(category_index);
	        me.set_selected_tag.call(me, node, 'category', category_index);
	        // open tag wrapper
	        me.switch_tag_wrapper.call(me, 'category');
	      }
	      if (tags) {
	        var tags_index = me.tags.tags.indexOf(tags);
	        var node = $('.tag', this.tags_wrapper).eq(tags_index);
	        me.set_selected_tag.call(me, node, 'tags', tags_index);
	        // open tag wrapper
	        me.switch_tag_wrapper.call(me, 'tags');
	      }
	    }
	  }, {
	    key: 'bind',
	    value: function bind() {
	      var me = this;
	      //switch
	      this.province_btn.click(me.switch_tag_wrapper.bind(me, 'province'));
	      this.category_btn.click(me.switch_tag_wrapper.bind(me, 'category'));
	      this.tags_btn.click(me.switch_tag_wrapper.bind(me, 'tags'));
	      //
	      this.bind_change_tag();
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(func) {
	      this.onChange_callback = func;
	    }
	
	    //trigger change event
	  }, {
	    key: 'emmitChange',
	    value: function emmitChange() {
	      this.render_selected();
	      console.log(this.selected);
	      this.onChange_callback(this.selected);
	    }
	  }, {
	    key: 'bind_change_tag',
	    value: function bind_change_tag() {
	      var me = this;
	      $.each($('.tag', this.province_wrapper), function (index, node) {
	        $(node).click(me.set_selected_tag.bind(me, node, 'province', index));
	      });
	
	      $.each($('.tag', this.category_wrapper), function (index, node) {
	        $(node).click(me.set_selected_tag.bind(me, node, 'category', index));
	      });
	
	      $.each($('.tag', this.tags_wrapper), function (index, node) {
	        $(node).click(me.set_selected_tag.bind(me, node, 'tags', index));
	      });
	    }
	
	    //set the tag or remove tag
	  }, {
	    key: 'set_selected_tag',
	    value: function set_selected_tag(node, wrapper_name, tag_index, isNodeActive) {
	      var $node = $(node);
	      var isActive = $node.hasClass('active');
	      var data_arr = this.tags[wrapper_name];
	      var tag = data_arr[tag_index];
	      //
	      if (wrapper_name == 'tags') {
	        $node.toggleClass('active');
	        //多选
	        var selected_tags_index = this.selected.tags.indexOf(tag);
	        if (selected_tags_index > -1) {
	          //已选且取消
	          this.selected.tags.splice(selected_tags_index, selected_tags_index + 1);
	        } else {
	          //未选且要选
	          this.selected.tags.push(tag);
	        }
	      } else {
	        //单选
	        // active -> null
	        // not active -> set
	        $('.tag', this[wrapper_name + '_wrapper']).removeClass('active');
	        !isActive && $node.addClass('active');
	        this.selected[wrapper_name] = isActive ? null : tag;
	      }
	
	      //emmit change event
	      this.emmitChange();
	    }
	  }, {
	    key: 'get_selected_tag',
	    value: function get_selected_tag() {
	      return this.selected;
	    }
	  }, {
	    key: 'render_selected',
	    value: function render_selected() {
	      var tags = [];
	      _.each(this.selected, function (text, wrapper) {
	        if (text && text.length > 0) {
	          if (wrapper == 'tags') {
	            _.each(text, function (tag) {
	              tags.push({
	                wrapper: wrapper,
	                text: tag
	              });
	            });
	          } else {
	            tags.push({
	              wrapper: wrapper,
	              text: text
	            });
	          }
	        }
	      });
	      this.tags_res_wrapper.html(this.res_renderer({ tags: tags }));
	      this.bind_selected();
	    }
	  }, {
	    key: 'bind_selected',
	    value: function bind_selected() {
	      var me = this;
	      $.each($('.tag i', this.tags_res_wrapper), function (index, node) {
	        $(node).click(me.remove_top_filter_tag_by_res.bind(me));
	      });
	    }
	  }, {
	    key: 'remove_top_filter_tag_by_res',
	    value: function remove_top_filter_tag_by_res(ev) {
	      var node = $(ev.target);
	      var tag_text = node.attr('data-tag'),
	          wrapper_name = node.attr('data-wrapper');
	
	      var index = this.tags[wrapper_name].indexOf(tag_text);
	      var top_tag_node = $('.tag', this[wrapper_name + '_wrapper']).eq(index);
	      top_tag_node.trigger('click');
	    }
	  }, {
	    key: 'switch_tag_wrapper',
	    value: function switch_tag_wrapper(name) {
	      var me = this;
	      //name :province,category,tags
	      //btn toggleClass
	      $('.m-title', me.dom).removeClass('active');
	      me[name + '_btn'].addClass('active');
	      //wrapper add hide
	      $('.m-tag-wrapper', me.dom).addClass('hide');
	      me[name + '_wrapper'].removeClass('hide');
	    }
	  }]);
	
	  return top_filter;
	})();
	
	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);
	
	    this.page = 1;
	    this.page_num = 1;
	    this.state = {};
	    this.wrapper = $('#m_schools_wrapper');
	    this.renderer = _.template(template);
	
	    this.left_filter = new left_filter();
	    this.top_filter = new top_filter();
	    this.init();
	  }
	
	  _createClass(controller, [{
	    key: 'init',
	    value: function init() {
	      var me = this;
	      me.bind();
	      me.get_data().done(me.render_data.bind(me));
	      this.left_filter.onChange = (function () {
	        me.get_data().done(me.render_data.bind(me));
	      }).bind(this);
	    }
	  }, {
	    key: 'bind',
	    value: function bind() {
	      //bind top_filter;
	      var me = this;
	      me.top_filter.onChange(function () {
	        me.get_data().done(me.render_data.bind(me));
	      });
	      me.top_filter.resumeFromUrl();
	    }
	  }, {
	    key: 'render_data',
	    value: function render_data() {
	      var html = this.renderer({ data: this.state.universities });
	      this.wrapper.html(html);
	    }
	  }, {
	    key: 'render_top_filter_res',
	    value: function render_top_filter_res() {
	      var tmp = '<em class="tag"><span><%=tag%></span><i></i></em>';
	
	      var html = _.map(province_names, function (p) {
	        console.log(p);
	        return renderer({ tag: p });
	      }).join('\n');
	      $('#province_tag_wrapper').html(html);
	      console.log(html);
	    }
	  }, {
	    key: 'get_data',
	    value: function get_data() {
	      var me = this;
	      var cb = null;
	
	      //window.location.search param
	      var school_name = para('school_name');
	      //top_filter
	      var top = this.top_filter.get_selected_tag();
	
	      //筛选学校
	      //left_filter
	      var data = {
	        user_province: province_names[this.left_filter.province],
	        user_subject: USER.user_subject || this.left_filter.subject,
	        score: this.left_filter.score
	      };
	
	      if (top.province) data.province = top.province;
	      if (top.category) data.category = top.category;
	      if (top.tags && top.tags.length > 0) data.tags = top.tags.join(',');
	
	      //window.location.search param
	      if (school_name) data.name = school_name;
	
	      $.get('http://api.learningrabbit.qinixapp.com/v1/universities', data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.state.universities = res.payload.universities;
	          cb && cb.call(me);
	        }
	      });
	
	      return {
	        done: function done(callback) {
	          cb = callback;
	        }
	      };
	    }
	  }]);
	
	  return controller;
	})();
	
	;
	
	module.exports = controller;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<% _.each(data, function(uni,i){%>\n<a href=\"/XBT/html/layout/school_detail.html?school_id=<%= uni.id %>\" class=\"m__filter-res-school\" id=\"uni_<%- uni.id %>\">\n    <div class=\"m__img\" style=\"background-image: url('<%= uni.icon_url %>')\"></div>\n    <div class=\"m__right-content\">\n        <h4><%= uni.name %></h4>\n\n        <div class=\"m__school-tags\">\n          <% _.each(uni.tags,function(tag){ %>\n            <em><%= tag %></em>\n          <% }) %>\n        </div>\n        <div class=\"m__grade\">\n            <span>预测分数</span>\n            <em><%- uni.score %></em>\n        </div>\n    </div>\n</a>\n<% })%>";

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "\n<% _.each(tags,function(tag){ %>\n  <em class=\"tag\">\n    <span><%= tag.text %></span>\n    <i title=\"去掉此标签\" data-tag=\"<%= tag.text %>\" data-wrapper=\"<%= tag.wrapper %>\" ></i>\n  </em>\n<% }) %>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(18);
	var para = __webpack_require__(2).para;
	var user = __webpack_require__(5);
	var province_names = __webpack_require__(2).province_names;
	var header = new (__webpack_require__(3))();
	
	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);
	
	    var me = this;
	    this.renderer = _.template(template);
	    this.left_filter = new left_filter();
	    this.left_filter.onChange = (function () {
	      me.init();
	    }).bind(this);
	    this.school_id = para('school_id');
	    this.data = {};
	    this.init();
	  }
	
	  _createClass(controller, [{
	    key: 'init',
	    value: function init() {
	      var data = {
	        province: province_names[this.left_filter.province]
	      };
	      var me = this;
	      $.get('http://api.learningrabbit.qinixapp.com/v1/batch', data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.data = res.payload;
	          $('.m_h2_user_province').html('（ ' + data.province + ' ）');
	          me.render();
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      $('#tbody_1').html(this.renderer({ data: this.data.science_batch }));
	      $('#tbody_2').html(this.renderer({ data: this.data.arts_batch }));
	    }
	  }]);
	
	  return controller;
	})();
	
	module.exports = controller;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<% _.each(data,function(data,i){ %>\n<tr>\n    <td><%= data.year %></td>\n    <td><%= data.lines[0] %></td>\n    <td><%= data.lines[1] %></td>\n    <td><%= data.lines[2] %></td>\n</tr>\n<% }) %>";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var user = __webpack_require__(5);
	var header = new (__webpack_require__(3))();
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(20);
	var para = __webpack_require__(2).para;
	var province_names = __webpack_require__(2).province_names;
	
	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);
	
	    var me = this;
	    this.renderer = _.template(template);
	    this.left_filter = new left_filter({ is_hide: true });
	    this.container = $('#g_content');
	    this.school_id = para('school_id');
	    this.data = {};
	    this.init();
	  }
	
	  _createClass(controller, [{
	    key: 'init',
	    value: function init() {
	      var data = {
	        user_province: province_names[user.user_province],
	        user_subject: user.user_subject
	      };
	
	      var me = this;
	
	      $.get('http://api.learningrabbit.qinixapp.com/v1/universities/' + me.school_id, data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.data = res.payload;
	          me.render();
	        } else {
	          alert('网络异常,请稍后刷新重试!');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.data.introduction = this.data.introduction.decodeHTML();
	      var html = this.renderer({ school: this.data });
	      $('.g__filter-result-wrapper', this.container).remove();
	      $(html).insertAfter('#g_left_filter');
	      this.clearNillPElements();
	    }
	  }, {
	    key: 'clearNillPElements',
	    value: function clearNillPElements() {
	      $.each($('.school-intro-wrapper p'), function (index, elem) {
	        var ele = $(elem);
	        if ($.trim(ele.text()).length == 0) {
	          ele.remove();
	        }
	      });
	    }
	  }]);
	
	  return controller;
	})();
	
	module.exports = controller;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-poster\" style=\"background-image:url('../../img/aaa.jpeg')\">\n    <span class=\"school-poster-tip\"></span>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-header\">\n    <div class=\"school-avatar\" style=\"background-image:url('<%= school.icon_url %>')\">\n    </div>\n    <div class=\"school-right\">\n      <h3><%- school.name %></h3>\n      <div class=\"tags-wrapper\">\n        <% _.each(school.tags, function(tag,i){ %>\n          <span class=\"tag\"><%- tag %></span>\n        <% }) %>\n      </div>\n    </div>\n    <button class=\"unlock-all\">\n      解锁全部资料\n    </button>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper school-section-link-wrapper\">\n  <a href=\"/XBT/html/layout/school_colleges.html?school_id=<%= school.id %>\">学院视频</a>\n  <a class=\"active\" href=\"/XBT/html/layout/school_detail.html?school_id=<%= school.id %>\">简介</a>\n  <a href=\"/XBT/html/layout/school_majors.html?school_id=<%= school.id %>\">录取</a>\n</div>\n  <!-- 学校实际内容 -->\n<div class=\"g__filter-result-wrapper school-detail-main-content\">\n\n  <h4>直属机构</h4>\n  <p class=\"school-intro\"><%- school.affiliated_to %></p>\n  <h4>学校类型</h4>\n  <p class=\"school-intro\"><%- school.category %></p>\n  <h4>地址</h4>\n  <p class=\"school-intro\"><%- school.address %></p>\n  <h4>电话号码</h4>\n  <p class=\"school-intro\"><%- school.phone %></p>\n  <h4>排名</h4>\n  <p class=\"school-intro\"><%- school.rank %></p>\n  <h4>学校简介</h4>\n  <div class=\"school-intro-wrapper\">\n    <%= school.introduction %>\n  </div>\n</div>\n  <!-- 学校实际内容 -->\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var user = __webpack_require__(5);
	var header = new (__webpack_require__(3))();
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(22);
	var para = __webpack_require__(2).para;
	var province_names = __webpack_require__(2).province_names;
	
	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);
	
	    var me = this;
	
	    // show left filter
	    this.left_filter = new left_filter({ is_hide: true });
	
	    // compile template renderers
	    this.header_renderer = _.template(template[0]);
	    this.table_renderer = _.template(template[1]);
	
	    //get containers and params
	    this.container = $('#g_content');
	    this.school_id = para('school_id');
	
	    // set ajax user data
	    this.user_data = {
	      user_province: province_names[user.user_province],
	      user_subject: user.user_subject
	    };
	
	    //initialize render data
	    this.data = {
	      school_id: me.school_id
	    };
	    this.dom = null;
	
	    this.init();
	  }
	
	  _createClass(controller, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      var me = this;
	
	      $.get('http://api.learningrabbit.qinixapp.com/v1/universities/' + me.school_id, me.user_data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.data = res.payload;
	          me.data.school_id = me.school_id;
	          //render common header
	          me.renderSchoolHeader();
	
	          //继续获取学院信息
	          _this.getMajorData();
	        } else {
	          alert('网络异常,请稍后刷新重试!');
	        }
	      });
	    }
	  }, {
	    key: 'renderSchoolHeader',
	    value: function renderSchoolHeader() {
	
	      this.data.introduction = this.data.introduction.decodeHTML();
	      var html = this.header_renderer({ school: this.data });
	      $('.g__filter-result-wrapper', this.container).remove();
	      $(html).insertAfter('#g_left_filter');
	      this.dom = $('#m_major_list_wrapper');
	    }
	  }, {
	    key: 'getMajorData',
	    value: function getMajorData() {
	      var me = this;
	      $.get('http://api.learningrabbit.qinixapp.com/v1/universities/' + me.school_id + '/majors', me.user_data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.data.majors = res.payload.majors;
	          me.data.years = res.payload.majors[0].scores.year;
	
	          me.renderMajorTable();
	        }
	      });
	    }
	  }, {
	    key: 'renderMajorTable',
	    value: function renderMajorTable() {
	      var html = this.table_renderer(this.data);
	      this.dom.html(html);
	    }
	  }]);
	
	  return controller;
	})();
	
	module.exports = controller;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = ["<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-poster\" style=\"background-image:url('../../img/aaa.jpeg')\">\n    <span class=\"school-poster-tip\"></span>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-header\">\n    <div class=\"school-avatar\" style=\"background-image:url('<%= school.icon_url %>')\">\n    </div>\n    <div class=\"school-right\">\n      <h3><%- school.name %></h3>\n      <div class=\"tags-wrapper\">\n        <% _.each(school.tags, function(tag,i){ %>\n          <span class=\"tag\"><%- tag %></span>\n        <% }) %>\n      </div>\n    </div>\n    <button class=\"unlock-all\">\n      解锁全部资料\n    </button>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper school-section-link-wrapper\">\n  <a href=\"/XBT/html/layout/school_colleges.html?school_id=<%= school.id %>\">视频</a>\n  <a href=\"/XBT/html/layout/school_detail.html?school_id=<%= school.id %>\">简介</a>\n  <a class=\"active\" href=\"/XBT/html/layout/school_majors.html?school_id=<%= school.id %>\">录取</a>\n</div>\n\n<div class=\"g__filter-result-wrapper school-detail-main-content __lines__table\" id=\"m_major_list_wrapper\">\n<!-- 学校实际内容 -->\n<!-- 学校实际内容 -->\n</div>\n", "\n<!-- 学院列表 -->\n<% console.log() %>\n  <table>\n    <thead>\n      <tr>\n        <th>专业</th>\n        <% _.each(years, function(year){ %>\n          <th><%- year %></th>\n        <% }) %>\n      </tr>\n    </thead>\n    <tbody>\n      <% _.each(majors, function(major){ %>\n        <tr>\n          <td><span><%- major.name %></span></td>\n          <% _.each(major.scores.score, function(s){ %>\n            <td><%= s %></td>\n          <% }) %>\n        </tr>\n      <% }) %>\n    </tbody>\n  </table>\n  <!-- 学院列表 -->\n"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var user = __webpack_require__(5);
	var header = new (__webpack_require__(3))();
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(24);
	var para = __webpack_require__(2).para;
	var province_names = __webpack_require__(2).province_names;
	
	//不好意思改的时候一着急,就又顺手把下划线风格写成驼峰的了...凑合看吧...
	
	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);
	
	    var me = this;
	
	    // show left filter
	    this.left_filter = new left_filter({ is_hide: true });
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
	      user_subject: user.user_subject
	    };
	
	    //initialize render data
	    this.data = {
	      school_id: me.school_id
	    };
	    this.dom = null;
	
	    this.init();
	  }
	
	  _createClass(controller, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      var me = this;
	
	      $.get('http://api.learningrabbit.qinixapp.com/v1/universities/' + me.school_id, me.user_data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.data = res.payload;
	          me.data.school_id = me.school_id;
	          //render common header
	          me.renderSchoolHeader();
	
	          //继续获取学院信息
	          _this.getCollegesData();
	        } else {
	          alert('网络异常,请稍后刷新重试!');
	        }
	      });
	    }
	  }, {
	    key: 'renderSchoolHeader',
	    value: function renderSchoolHeader() {
	
	      this.data.introduction = this.data.introduction.decodeHTML();
	      var html = this.header_renderer({ school: this.data });
	      $('.g__filter-result-wrapper', this.container).remove();
	      $(html).insertAfter('#g_left_filter');
	      this.dom = $('#m_major_list_wrapper');
	    }
	  }, {
	    key: 'getCollegesData',
	    value: function getCollegesData() {
	      var me = this;
	      $.get('http://api.learningrabbit.qinixapp.com/v1/universities/' + me.school_id + '/colleges', me.user_data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.data.colleges = res.payload.colleges;
	          me.renderColleges();
	        }
	      });
	    }
	  }, {
	    key: 'renderColleges',
	    value: function renderColleges() {
	      var html = this.table_renderer(this.data);
	      this.dom.html(html);
	      this.bind();
	    }
	  }, {
	    key: 'searchVideoByCollege',
	    value: function searchVideoByCollege(college) {
	      var me = this;
	      var url = 'http://api.learningrabbit.qinixapp.com/v1/universities/' + this.data.school_id + '/colleges/' + college.id + '/videos';
	      this.selectedCollege = college;
	      $.get(url, null, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.data.videos = res.payload.videos;
	          _.each(me.data.videos, function (v) {
	            v.duration = me.getDuration(v.duration);
	          });
	          me.renderCollegeVideos();
	        }
	      });
	    }
	  }, {
	    key: 'renderCollegeVideos',
	    value: function renderCollegeVideos() {
	      var me = this;
	      var data = {
	        college: me.selectedCollege.name,
	        videos: me.data.videos,
	        school_id: me.data.school_id
	      };
	      this.dom.html(this.videos_renderder(data));
	    }
	  }, {
	    key: 'getDuration',
	    value: function getDuration(seconds) {
	      if (seconds <= 60) {
	        return seconds + ' 秒';
	      } else if (seconds < 60 * 60) {
	        if (seconds % 60 == 0) {
	          return seconds / 60 + '分';
	        } else {
	          return Math.floor(seconds / 60) + '分 ' + seconds % 60 + '秒';
	        }
	      } else {
	        return Math.floor(seconds / 3600) + '小时 ' + Math.floor(seconds % 3600 / 60) + ' 分钟';
	      }
	    }
	  }, {
	    key: 'bind',
	    value: function bind() {
	      var me = this;
	      $.each($('.m_college', this.dom), function (index, college) {
	        $(college).click(me.searchVideoByCollege.bind(me, me.data.colleges[index]));
	      });
	    }
	  }]);
	
	  return controller;
	})();
	
	module.exports = controller;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = ["<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-poster\" style=\"background-image:url('../../img/aaa.jpeg')\">\n    <span class=\"school-poster-tip\"></span>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-header\">\n    <div class=\"school-avatar\" style=\"background-image:url('<%= school.icon_url %>')\">\n    </div>\n    <div class=\"school-right\">\n      <h3><%- school.name %></h3>\n      <div class=\"tags-wrapper\">\n        <% _.each(school.tags, function(tag,i){ %>\n          <span class=\"tag\"><%- tag %></span>\n        <% }) %>\n      </div>\n    </div>\n    <button class=\"unlock-all\">\n      解锁全部资料\n    </button>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper school-section-link-wrapper\">\n  <a class=\"active\" href=\"/XBT/html/layout/school_colleges.html?school_id=<%= school.id %>\">视频</a>\n  <a href=\"/XBT/html/layout/school_detail.html?school_id=<%= school.id %>\">简介</a>\n  <a href=\"/XBT/html/layout/school_majors.html?school_id=<%= school.id %>\">录取</a>\n</div>\n\n<div class=\"g__filter-result-wrapper school-detail-main-content __lines__table\" id=\"m_major_list_wrapper\">\n<!-- 学校实际内容 -->\n<!-- 学校实际内容 -->\n</div>\n", "\n<% if(!colleges || colleges.length == 0) { %> 对不起,目前再是没有该院校的学院视频资料~ <% } %>\n<% _.each(colleges, function(c){ %>\n\n<a href=\"javascript:;\" class=\"m_major m_college\">\n    <div class=\"m_text\"><%= c.name %></div>\n</a>\n<% }) %>\n", "\n<h4><%= college %></h4>\n<% _.each(videos, function(v){ %>\n<div  class=\"video-list-item\">\n  <% var url = '/XBT/html/layout/video.html?school_id='+school_id+'&v_id='+v.id+'&title='+v.title+'&poster='+v.poster_url; %>\n    <a href=\"<%= url %>\" class=\"poster\" target=\"_blank\" style=\"background-image:url('<%= v.poster_url %>')\">\n    </a>\n    <div class=\"right-video-info\">\n\n      <div class=\"title-row\">\n        <a target=\"_blank\" href=\"<%= url %>\" ><%= v.title %></a>\n        <% if(!v.is_free){%>\n          <span class=\"should-pay\">付费观看</span>\n        <%}else{%>\n          <span class=\"free-play\">免费观看</span>\n        <%}%>\n      </div>\n\n      <div class=\"video-other-info\">\n        <span>视频时长:</span>\n        <span><%= v.duration %></span>\n      </div>\n\n      <div class=\"video-intro\">\n        <p>\n          <%= v.desc.decodeHTML() %>\n          <br/>啊啊啊大家闪开他要换行啦\n        </p>\n      </div>\n\n    </div>\n</div>\n<% }) %>\n"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var user = __webpack_require__(5);
	var header = new (__webpack_require__(3))();
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(26);
	var comment_template = __webpack_require__(27);
	var para = __webpack_require__(2).para;
	var province_names = __webpack_require__(2).province_names;
	
	//不好意思改的时候一着急,就又顺手把下划线风格写成驼峰的了...凑合看吧...
	
	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);
	
	    var me = this;
	
	    // show left filter
	    this.left_filter = new left_filter({ is_hide: true });
	
	    // compile template renderers
	    this.video_renderer = _.template(template[0]);
	    this.comment_renderer = _.template(comment_template);
	
	    //get containers and params
	    this.container = $('#g_content');
	    this.video_id = para('v_id');
	    this.title = para('title');
	    this.school_id = para('school_id');
	    this.poster = para('poster');
	
	    // set ajax user data
	    this.token = user.token;
	
	    //initialize render data
	    this.dom = null;
	
	    this.init();
	  }
	
	  _createClass(controller, [{
	    key: 'init',
	    value: function init() {
	
	      var me = this;
	      me.getSchoolData();
	    }
	  }, {
	    key: 'getSchoolData',
	    value: function getSchoolData() {
	      var me = this;
	      var data = {
	        user_province: province_names[user.user_province],
	        user_subject: user.user_subject
	      };
	      $.get('http://api.learningrabbit.qinixapp.com/v1/universities/' + me.school_id, data, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.school_data = res.payload;
	          me.renderVideo();
	        } else {
	          alert('网络异常,请稍后刷新重试!');
	        }
	      });
	    }
	  }, {
	    key: 'renderVideo',
	    value: function renderVideo() {
	      var me = this;
	      var data = {
	        school: me.school_data,
	        poster: me.poster,
	        video_id: me.video_id,
	        title: me.title
	      };
	      var html = this.video_renderer(data);
	
	      $('.g__filter-result-wrapper', this.container).remove();
	      $(html).insertAfter('#g_left_filter');
	
	      this.comment_dom = $('#comment_wrapper');
	
	      //btn
	      $('#comment_btn').click(me.comment.bind(me));
	
	      //load comments
	      me.getComments();
	    }
	  }, {
	    key: 'comment',
	    value: function comment() {
	      var me = this;
	      var content = $('#comment_input').val();
	      var data = {
	        content: content
	      };
	
	      $.ajax({
	        type: 'POST',
	        url: 'http://api.learningrabbit.qinixapp.com/v1/videos/' + me.video_id + '/comments',
	        data: data,
	        dataType: 'json',
	        beforeSend: function beforeSend(xhr) {
	          xhr.setRequestHeader('Authorization', user.token);
	        }
	      }).done(function (res) {
	        if (res.code == 0) {
	          var data = res.payload;
	          me.getComments();
	        } else {}
	      });
	    }
	  }, {
	    key: 'getComments',
	    value: function getComments() {
	      var me = this;
	      $.ajax({
	        method: 'GET',
	        url: 'http://api.learningrabbit.qinixapp.com/v1/videos/' + me.video_id + '/comments',
	        dataType: 'json',
	        beforeSend: function beforeSend(xhr) {
	          xhr.setRequestHeader('Authorization', user.token);
	        }
	      }).done(function (res) {
	        if (res.code == 0) {
	          var data = res.payload;
	          //存放数据
	          me.comments = { comments: data.comments.reverse() };
	          // data = data.revert();
	          me.renderComments(data);
	          me.bindVote();
	        } else {}
	      });
	    }
	  }, {
	    key: 'upVote',
	    value: function upVote(index, id) {
	      var me = this;
	      $.ajax({
	        type: 'POST',
	        url: 'http://api.learningrabbit.qinixapp.com/v1/videos/' + me.video_id + '/comments/' + id + '/upvote',
	        dataType: 'json',
	        beforeSend: function beforeSend(xhr) {
	          xhr.setRequestHeader('Authorization', user.token);
	        }
	      }).done(function (res) {
	        if (res.code == 0) {
	          console.log(res);
	          me.renderUpVote(index, id);
	        }
	      });
	    }
	  }, {
	    key: 'downVote',
	    value: function downVote(index, id) {
	      var me = this;
	      $.ajax({
	        type: 'POST',
	        url: 'http://api.learningrabbit.qinixapp.com/v1/videos/' + me.video_id + '/comments/' + id + '/downvote',
	        dataType: 'json',
	        beforeSend: function beforeSend(xhr) {
	          xhr.setRequestHeader('Authorization', user.token);
	        }
	      }).done(function (res) {
	        if (res.code == 0) {
	          console.log(res);
	          me.renderDownVote(index, id);
	        }
	      });
	    }
	  }, {
	    key: 'renderUpVote',
	    value: function renderUpVote(index, id, isDownVote) {
	      var me = this;
	      var c = me.comments.comments[index];
	      if (isDownVote) {
	        //反对
	        if (c.user_upvoted) {
	          // 赞同
	          c.user_upvoted = false;
	          c.upvote--;
	          //取消赞
	          $('#upvote_' + id).toggleClass('upvote-false').toggleClass('upvote-true').find('span').html(c.upvote);
	        } else {
	          //原本就不赞则无任何改变
	        }
	      } else {
	          c.user_upvoted = !c.user_upvoted;
	          c.upvote += c.user_upvoted ? 1 : -1;
	
	          $('#upvote_' + id).toggleClass('upvote-false').toggleClass('upvote-true').find('span').html(c.upvote);
	        }
	
	      if (!isDownVote) {
	        me.renderDownVote(index, id, true);
	      }
	    }
	  }, {
	    key: 'renderDownVote',
	    value: function renderDownVote(index, id, isUpVote) {
	      var me = this;
	      var c = me.comments.comments[index];
	      if (isUpVote) {
	        //赞同
	        if (c.user_downvoted) {
	          // 反对
	          c.user_downvoted = false;
	          c.downvote--;
	          //取消反对
	          $('#downvote_' + id).toggleClass('downvote-false').toggleClass('downvote-true').find('span').html(c.downvote);
	        } else {
	          //原本就不反对则无任何改变
	        }
	      } else {
	          c.user_downvoted = !c.user_downvoted;
	          c.downvote += c.user_downvoted ? 1 : -1;
	
	          $('#downvote_' + id).toggleClass('downvote-false').toggleClass('downvote-true').find('span').html(c.downvote);
	        }
	
	      if (!isUpVote) {
	        me.renderUpVote(index, id, true);
	      }
	    }
	  }, {
	    key: 'renderComments',
	    value: function renderComments(data) {
	      var html = this.comment_renderer(data);
	      $('#comment_wrapper').html(html);
	    }
	  }, {
	    key: 'bind',
	    value: function bind() {
	      var me = this;
	      $.each($('.m_college', this.dom), function (index, college) {
	        $(college).click(me.searchVideoByCollege.bind(me, me.data.colleges[index]));
	      });
	    }
	  }, {
	    key: 'bindVote',
	    value: function bindVote() {
	      var me = this;
	      $.each($('.m-comment .upvote'), function (i, elem) {
	        $(elem).off('click').on('click', me.upVote.bind(me, i, me.comments.comments[i].id));
	      });
	      $.each($('.m-comment .downvote'), function (i, elem) {
	        $(elem).off('click').on('click', me.downVote.bind(me, i, me.comments.comments[i].id));
	      });
	    }
	  }]);
	
	  return controller;
	})();
	
	module.exports = controller;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = ["<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-video\" style=\"background-image:url('<% poster %>')\">\n    <h4><%- title%></h4>\n    <iframe src=\"/XBT/html/player/player.html?v_id=<%= video_id %>&h=600\" frameborder=\"0\" width=\"100%\" height=\"600\"></iframe>\n  </div>\n</div>\n\n\n\n<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-header\">\n    <div class=\"school-avatar\" style=\"background-image:url('<%= school.icon_url %>')\">\n    </div>\n    <div class=\"school-right\">\n      <h3><%- school.name %> </h3>\n      <div class=\"tags-wrapper\">\n        <% _.each(school.tags, function(tag,i){ %>\n          <span class=\"tag\"><%- tag %></span>\n        <% }) %>\n      </div>\n    </div>\n    <button class=\"unlock-all\">\n      解锁全部资料\n    </button>\n  </div>\n</div>\n\n\n<div class=\"g__filter-result-wrapper  comment-input-wrapper\" id=\"comment_input_wrapper\">\n<!-- 学校实际内容 -->\n<!-- 学校实际内容 -->\n\n  <textarea name=\"comment\" id=\"comment_input\" class=\"form-control comment-input\" placeholder=\"写下你想说的评论吧~\"></textarea>\n\n  <button type=\"button\" name=\"button\" class=\"btn btn-primary cn\" id=\"comment_btn\">发表评论</button>\n\n\n</div>\n\n\n<div class=\"g__filter-result-wrapper  comment-input-wrapper\">\n<!-- 学校实际内容 -->\n<!-- 学校实际内容 -->\n  <h4>评论区</h4>\n\n  <div class=\"comment-section\"  id=\"comment_wrapper\" >\n\n  </div>\n\n</div>\n\n", "\n<% _.each(comment,function(c) {%>\n<% }) %>\n", "\n<% if(!colleges || colleges.length == 0) { %> 对不起,目前再是没有该院校的学院视频资料~ <% } %>\n<% _.each(colleges, function(c){ %>\n\n<a href=\"javascript:;\" class=\"m_major m_college\">\n    <div class=\"m_text\"><%= c.name %></div>\n</a>\n<% }) %>\n", "\n<h4><%= college %></h4>\n<% _.each(videos, function(v){ %>\n<div  class=\"video-list-item\">\n    <a href=\"/XBT/html/layout/video.html?v_id=<%= v.id %>\" class=\"poster\" target=\"_blank\" style=\"background-image:url('<%= v.poster_url %>')\">\n    </a>\n    <div class=\"right-video-info\">\n\n      <div class=\"title-row\">\n        <a target=\"_blank\"  href=\"/XBT/html/layout/video.html?v_id=<%= v.id %>\"><%= v.title %></a>\n        <% if(!v.is_free){%>\n          <span class=\"should-pay\">付费观看</span>\n        <%}else{%>\n          <span class=\"free-play\">免费观看</span>\n        <%}%>\n      </div>\n\n      <div class=\"video-other-info\">\n        <span>视频时长:</span>\n        <span><%= v.duration %></span>\n      </div>\n\n      <div class=\"video-intro\">\n        <p>\n          <%= v.desc.decodeHTML() %>\n          <br/>啊啊啊大家闪开他要换行啦\n        </p>\n      </div>\n\n    </div>\n</div>\n<% }) %>\n"];

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<% _.each(comments, function(comment){ %>\n  <div class=\"m-comment\">\n    <div class=\"m-user\">\n\n      <div class=\"user-avatar\" style=\"background-image:url('<%=comment.commentator.avatar_url || '../../img/logo.png'%>')\"></div>\n    </div>\n    <div class=\"right-content\">\n      <div class=\"username\"><%= comment.commentator.username %></div>\n      <p class=\"m-content\"><%- comment.content %></p>\n      <div class=\"m-vote-wrapper\">\n        <span>赞同</span>\n        <i class=\"vote upvote upvote-<%= comment.user_upvoted %>\" id=\"upvote_<%= comment.id %>\" data-id=\"<%= comment.id%>\">\n          <span><%= comment.upvote %></span>\n        </i>\n        <span>反对</span>\n        <i class=\"vote downvote downvote-<%= comment.user_downvoted %>\" id=\"downvote_<%= comment.id %>\"  data-id=\"<%= comment.id%>\">\n          <span><%= comment.downvote %></span>\n        </i>\n      </div>\n    </div>\n  </div>\n<% }) %>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var province_names = ["北京市", "天津市", "重庆市", "上海市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"];
	var USER = __webpack_require__(5);
	
	var template = __webpack_require__(29);
	var header = new (__webpack_require__(3))();
	var para = __webpack_require__(2).para;
	
	var UserCenter = (function () {
	  function UserCenter() {
	    _classCallCheck(this, UserCenter);
	
	    this.renderers = {
	      user_card: _.template(template.user_head_box),
	      modify_modal: _.template(template.m_modify_user_info)
	    };
	    this.init();
	  }
	
	  _createClass(UserCenter, [{
	    key: "init",
	    value: function init() {
	      var me = this;
	      this.user_data = {
	        user: {
	          province: USER.user_province,
	          avatar_url: USER.avatar_url,
	          subject: USER.user_subject,
	          username: USER.username
	        }
	      };
	      this.user_card_root = $('#m_user_info_card');
	      this.user_info_modal = null;
	      this.uptoken = null;
	      USER.on('updateUserData', me.renderUserCard.bind(me));
	      this.renderUserCard();
	    }
	  }, {
	    key: "renderUserCard",
	    value: function renderUserCard() {
	      this.user_data = {
	        user: {
	          province: USER.user_province,
	          avatar_url: USER.avatar_url,
	          subject: USER.user_subject,
	          username: USER.username
	        }
	      };
	      this.user_card_root.html(this.renderers.user_card(this.user_data));
	      this.bindUserCard();
	    }
	  }, {
	    key: "bindUserCard",
	    value: function bindUserCard() {
	      var me = this;
	      $('#m_modify_user_info', this.user_card_root).off('click').on('click', function () {
	        me.renderModal();
	      });
	    }
	  }, {
	    key: "renderModal",
	    value: function renderModal() {
	      var me = this;
	      if (this.user_info_modal) {
	        this.user_info_modal.addClass('show');
	      } else {
	        var data = {
	          user: me.user_data.user,
	          province_names: province_names
	        };
	        $('body').append(this.renderers.modify_modal(data));
	        this.user_info_modal = $('#m__modal_window_mask');
	        $('select', this.user_info_modal).css({ 'width': '100%' }).select2();
	        this.user_info_modal.addClass('show');
	        this.bindModal();
	      }
	    }
	  }, {
	    key: "hideModal",
	    value: function hideModal() {
	      var me = this;
	      me.user_info_modal.addClass('hide').removeClass('show');
	      var s = setTimeout(function () {
	        me.user_info_modal.removeClass('hide');
	        clearTimeout(s);
	      }, 350);
	    }
	  }, {
	    key: "bindModal",
	    value: function bindModal() {
	      var me = this;
	      this.user_info_modal.off('click').on('click', function (ev) {
	        if (ev.target == me.user_info_modal.get(0)) {
	          me.hideModal();
	        }
	      });
	      $('#m_user_avatar_form', this.user_info_modal).off('change').on('change', function () {
	        me.getUpToken().done(me.uploadImg.bind(me));
	      });
	
	      $('#m_user_info_update_btn', this.user_info_modal).off('click').on('click', function () {
	        me.updateUserInfo();
	      });
	    }
	  }, {
	    key: "getUpToken",
	    value: function getUpToken(fun) {
	      var me = this;
	      var func = null;
	      $.get('http://api.learningrabbit.qinixapp.com/v1/uptoken.json?api_key=avatar', null, 'json').done(function (res) {
	        console.log(res);
	        me.uptoken = res.uptoken;
	        func && func();
	      });
	
	      return {
	        done: function done(callback) {
	          func = callback;
	        }
	      };
	    }
	  }, {
	    key: "uploadImg",
	    value: function uploadImg() {
	      var _this = this;
	
	      var myDomain = 'http://7xomkl.com1.z0.glb.clouddn.com/';
	      var bucket = 'http://qiniu-plupload.qiniudn.com/';
	      $('input[name=token]', this.user_info_modal).val(this.uptoken);
	      var formData = new FormData($('#m_user_avatar_form', this.user_info_modal).get(0));
	      $.ajax({
	        type: 'post',
	        url: "http://upload.qiniu.com/",
	        data: formData,
	        cache: false,
	        contentType: false,
	        processData: false
	      }).done(function (res) {
	        var path = "" + myDomain + res.key;
	        _this.user_data.user.avatar_url = path;
	        $('.m-user-head').attr('src', path);
	      });
	    }
	  }, {
	    key: "updateUserInfo",
	    value: function updateUserInfo() {
	      var me = this;
	      var data = Object.create(null);
	      _.each($('#m_user_info_form').get(0), function (input, name) {
	        data[input.name] = input.value;
	      });
	      data.avatar_url = this.user_data.user.avatar_url;
	      $.ajax({
	        type: 'PUT',
	        url: 'http://api.learningrabbit.qinixapp.com/v1/users',
	        data: data,
	        dataType: 'json',
	        beforeSend: function beforeSend(xhr) {
	          xhr.setRequestHeader('Authorization', USER.token);
	        }
	      }).done(function (res) {
	        if (res.code == 0) {
	          USER.getUserData(true);
	          setTimeout(me.hideModal.bind(me), 500);
	        }
	      });
	    }
	  }]);
	
	  return UserCenter;
	})();
	
	module.exports = UserCenter;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  'user_head_box': '\n  <div class="user-head-box">\n    <div class="user-head-bg" style="background-image:url(\'<%= user.avatar_url %>\')">\n    </div>\n    <div class="m-avatar" style="background-image:url(\'<%= user.avatar_url %>\')"></div>\n    <h2><span><%= user.username %></span></h2>\n  </div>\n  <div class="user-intro-box">\n    <div class="intro">\n      <div>\n        <em>省份:</em>\n        <span><%= user.province %></span>\n      </div>\n      <div>\n        <em>文理:</em>\n        <span><%= user.subject ? ((user.subject == "science")?"理科":"文科") : "未选择" %></span>\n      </div>\n      <a href="javascript:;" id="m_modify_user_info">修改资料</a>\n    </div>\n    <em>我的视频<span>0</span></em>\n  </div>\n  ',
	
	  'm_modify_user_info': '<div class="g__mask" id="m__modal_window_mask">\n    <div class="g__modal-window m_user_info_modal" id="m__modal_window">\n      <div class="m-modal-title">\n        <div class="m-title-item"><span>修改信息</span></div>\n      </div>\n      <div class="m-modal-content">\n        <div class="m-left">\n          <div class="app-download">\n            <span>修改头像</span>\n            <img class="m-user-head" src="<%= user.avatar_url %>" alt="">\n            <form class="m-user-avatar-form" id="m_user_avatar_form">\n              <input type="hidden" name="token"/>\n              <label class="btn btn-primary" for="upload_avatar">上传图片</label>\n              <input name="file" class="hide" id="upload_avatar" type="file" accept="image/*"/>\n              <input type="hidden" name="key" value="/avatar/<%- user.username +\'_\'+\'avatar\'+ Date.now() %>">\n              <input type="hidden" name="accept" />\n            </form>\n          </div>\n        </div>\n\n        <div class="m-right">\n          <!-- 登录表单 -->\n          <form class="form-area" name="info_form" id="m_user_info_form">\n\n            <div class="input-row">\n              <input type="text" class="form-control" name="username" placeholder="用户名"/>\n            </div>\n            <div class="input-row">\n              <input type="number" class="form-control" name="score" placeholder="期望分数"/>\n            </div>\n            <div class="input-row">\n              <select name="province" class="form-control">\n                <% _.each(province_names,function(p){ %>\n                  <option value="<%=p%>"><%=p%></option>\n                <% }) %>\n              </select>\n            </div>\n            <div class="input-row">\n              <select name="subject" class="form-control" placeholder=\'请选择文理科~\'>\n                <option value="science" <% if(user.subject !=\'art\'){%>selected<%}%>>理科</option>\n                <option value="art" <% if(user.subject ==\'art\'){%>selected<%}%>>文科</option>\n              </select>\n            </div>\n            <div class="err-row" id="login_err">\n              <span></span>\n            </div>\n            <div class="submit-btn" id="m_user_info_update_btn" type="button"></div>\n          </form>\n          <!-- 登录表单 -->\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n  '
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var user = __webpack_require__(5);
	var header = new (__webpack_require__(3))();
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(31);
	var para = __webpack_require__(2).para;
	var province_names = __webpack_require__(2).province_names;
	
	var IndexController = (function () {
	  function IndexController() {
	    _classCallCheck(this, IndexController);
	
	    //set data
	    var me = this;
	    this.left_filter = new left_filter({ is_hide: true });
	    this.container = $('#g_content');
	    this.sliderWrapper = $('#m_slider_wrapper');
	    this.articleWrapper = $('#m_article_wapper');
	    this.data = {};
	    this.sliderState = {
	      index: 0,
	      len: 0
	    };
	    this.sliderRenderer = _.template(template.slider);
	    this.articleRenderer = _.template(template.articles);
	
	    //initialize
	    this.getData(); // => this.render() => { this.renderSlider() && this.renderAriticle() }
	  }
	
	  _createClass(IndexController, [{
	    key: 'checkFirstRead',
	    value: function checkFirstRead() {
	      var hasRead = localStorage.getItem('read');
	      if (!hasRead) {
	        header.showDownload();
	        localStorage.setItem('read', 'true');
	      }
	    }
	  }, {
	    key: 'getData',
	    value: function getData() {
	      var me = this;
	      $.get('http://api.learningrabbit.qinixapp.com/v1/videos/recommends', null, 'json').done(function (res) {
	        if (res.code == 0) {
	          me.data = res.payload;
	          me.render();
	        } else {
	          alert('网络异常,请稍后刷新重试!');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.renderSlider();
	      this.bindSlider();
	      this.autoPlay();
	      this.renderAriticle();
	    }
	  }, {
	    key: 'bindSlider',
	    value: function bindSlider() {
	      var me = this;
	      //resize
	      $(window).off('resize').on('resize', function () {
	        var w = document.body.clientWidth;
	        var length = _.size(me.data.slider_videos);
	        $('.slider-box', me.sliderWrapper).css({ width: length * w + 'px' });
	        $('.m-card', me.sliderWrapper).css({ width: w + 'px' });
	      });
	      //nav slide
	      $.each($('.m-slider-nav-item', me.sliderWrapper), function (index, node) {
	        $(node).off('click').on('click', me.jump.bind(me, index));
	      });
	    }
	  }, {
	    key: 'jump',
	    value: function jump(index) {
	      var me = this;
	      var w = document.body.clientWidth;
	      var left_offset = -w * index;
	      var profile = ['', '-webkit-', '-moz-', '-o-', '-ms-'];
	      var style = Object.create(null);
	      _.each(profile, function (before) {
	        style[before + 'transform'] = 'translateX(' + left_offset + 'px)';
	      });
	      $('.slider-box', me.sliderWrapper).eq(0).css(style);
	
	      me.setSliderNavActive(index);
	    }
	  }, {
	    key: 'setSliderNavActive',
	    value: function setSliderNavActive(index) {
	      var me = this;
	      $('.m-slider-nav-item', me.sliderWrapper).removeClass('active');
	      $('.m-slider-nav-item', me.sliderWrapper).eq(index).addClass('active');
	    }
	  }, {
	    key: 'autoPlay',
	    value: function autoPlay() {
	      var me = this;
	      me.jump(0);
	      return setInterval(function () {
	        var index = (me.sliderState.index + 1) % me.sliderState.len;
	        me.sliderState.index = index;
	        me.jump(index);
	      }, 5000);
	    }
	  }, {
	    key: 'renderSlider',
	    value: function renderSlider() {
	      var me = this;
	      var w = document.body.clientWidth;
	      var data = {};
	      data.slider_videos = Object.assign({}, {}, me.data.slider_videos);
	      data.w = w;
	      var html = this.sliderRenderer(data);
	      this.sliderWrapper.html(html);
	      this.sliderState.len = _.size(data.slider_videos);
	    }
	  }, {
	    key: 'renderAriticle',
	    value: function renderAriticle() {
	      var me = this;
	      var sections = [];
	
	      _.each(me.data, function (section, name) {
	        if (name != 'slider_videos') {
	          var data = { section: {} };
	          data.section.articles = Object.assign({}, {}, section);
	          data.section.name = name;
	
	          sections.push(data);
	        }
	      });
	
	      var html = _.map(sections, function (section_data) {
	        return me.articleRenderer(section_data);
	      }).join('');
	
	      this.articleWrapper.html(html);
	    }
	  }]);
	
	  return IndexController;
	})();
	
	module.exports = IndexController;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  slider: "\n<div class=\"m-index-slider\" id=\"m_index_slider\">\n  <% console.log(_.size(slider_videos)) %>\n  <div class=\"slider-box\" style=\"width:<%= _.size(slider_videos) * w %>px\">\n    <% _.each(slider_videos, function(v){ %>\n      <a class=\"m-card\" href=\"/XBT/html/layout/video.html?school_id=null&v_id=<%= v.id %>&title=<%= v.title %>&poster=<%= v.poster_url %>\" style=\"width:<%= w %>px;background-image:url(<%- v.poster_url %>)\" title=\"<%-v.title%>\"></a>\n    <% }) %>\n  </div>\n  <div class=\"m-slider-nav\" id=\"m_slider_nav\">\n    <% _.each(slider_videos, function(videos, index){ %> <span class=\"m-slider-nav-item\"></span><% }) %>\n  </div>\n</div>\n",
	  articles: "\n<div class=\"m-index-articles\">\n  <div class=\"section-name-wrapper\">\n    <h3><%= section.name %></h3>\n    <a href=\"\">查看更多</a>\n  </div>\n  <div class=\"m-section-articles\">\n    <% _.each(section.articles, function(v){ %>\n        <div class=\"article-view\" title=\"<%=v.title%>\">\n           <a class=\"m-poster\"\n           style=\"background-image:url('<%=v.poster_url%>')\"\n              href=\"/XBT/html/layout/video.html?school_id=null&v_id=<%= v.id %>&title=<%= v.title %>&poster=<%= v.poster_url %>\"\n              target=\"_blank\"\"\n           ><!--<%- v.title%>--></a>\n           <a class=\"m-title\" href=\"/XBT/html/layout/video.html?school_id=null&v_id=<%= v.id %>&title=<%= v.title %>&poster=<%= v.poster_url %>\" target=\"_blank\"><%= v.title %></a>\n        </div>\n    <% }) %>\n  </div>\n</div>\n"
	};

/***/ },
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var template = __webpack_require__(35);
	var user = __webpack_require__(5);
	
	var Feedback = (function () {
	  function Feedback() {
	    _classCallCheck(this, Feedback);
	
	    this.dom = null;
	    this.btn = null;
	    this.img_form = null;
	
	    this.uptoken = null;
	    this.feedback_path = null;
	    this.text = localStorage.getItem('last_feedback');
	    if (!this.text) {
	      this.text = '';
	    }
	    this.show();
	  }
	
	  _createClass(Feedback, [{
	    key: 'show',
	    value: function show() {
	      if (!this.dom) {
	        this.renderDom();
	      } else {
	        this.showDom();
	      }
	    }
	  }, {
	    key: 'showDom',
	    value: function showDom() {
	      if (!this.dom) {
	        this.dom.addClass('show');
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (this.dom) {
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
	  }, {
	    key: 'removeDom',
	    value: function removeDom() {
	      if (this.dom) {
	        this.dom.remove();
	      }
	    }
	  }, {
	    key: 'renderDom',
	    value: function renderDom() {
	      var data = { text: this.text };
	      var html = _.template(template)(data);
	      $('body').append(html);
	      // set dom node variables
	      this.dom = $('#g__feedback_modal_mask');
	      console.log(this.dom);
	      this.img_form = $('#m_user_feedback_form');
	      this.btn = $('#g_feedback_button');
	      this.bindModal();
	    }
	  }, {
	    key: 'submit',
	    value: function submit() {
	      var _this = this;
	
	      var data = {
	        content: $('textarea', this.dom).eq(0).val(),
	        image_url: this.feedback_path
	      };
	
	      $.ajax({
	        type: 'post',
	        url: "http://api.learningrabbit.qinixapp.com/v1/feedbacks",
	        data: data,
	        cache: false,
	        dataType: 'json'
	      }).done(function (res) {
	        if (res.code == 0) {
	          _this.success('已成功发送反馈~谢谢!');
	        } else {
	          _this.warn(res.message);
	        }
	      });
	    }
	  }, {
	    key: 'success',
	    value: function success(message) {
	      var me = this;
	      $('#m_message_warning .warning-text', this.dom).removeClass('warning-tip').addClass('success-tip').removeClass('hide').html(message);
	      setTimeout(function () {
	        me.hide();
	      }, 2000);
	    }
	  }, {
	    key: 'warn',
	    value: function warn(message) {
	      $('#m_message_warning .warning-text', this.dom).removeClass('success-tip').addClass('warning-tip').removeClass('hide').html(message);
	    }
	  }, {
	    key: 'bindModal',
	    value: function bindModal() {
	      var me = this;
	      this.dom.off('click').on('click', function (ev) {
	        if (ev.target == me.dom.get(0)) {
	          me.hide();
	        }
	      });
	      this.img_form.off('change').on('change', function () {
	        me.getUpToken().done(me.uploadImg.bind(me));
	      });
	
	      this.btn.off('click').on('click', function () {
	        me.submit();
	      });
	    }
	  }, {
	    key: 'getUpToken',
	    value: function getUpToken(fun) {
	      var me = this;
	      var func = null;
	      $.get('http://api.learningrabbit.qinixapp.com/v1/uptoken', null, 'json').done(function (res) {
	        console.log(res);
	        me.uptoken = res.uptoken;
	        func && func();
	      });
	
	      return {
	        done: function done(callback) {
	          func = callback;
	        }
	      };
	    }
	  }, {
	    key: 'showFeedbackImage',
	    value: function showFeedbackImage() {
	      var path = this.feedback_path;
	      $('#m_feedback_image').attr('src', path).removeClass('hide');
	    }
	  }, {
	    key: 'uploadImg',
	    value: function uploadImg() {
	      var _this2 = this;
	
	      var myDomain = 'http://7xomkl.com1.z0.glb.clouddn.com/';
	      var bucket = 'http://qiniu-plupload.qiniudn.com/';
	      $('input[name=token]', this.user_info_modal).val(this.uptoken);
	      var formData = new FormData(this.img_form.get(0));
	      $.ajax({
	        type: 'post',
	        url: "http://upload.qiniu.com/",
	        data: formData,
	        cache: false,
	        contentType: false,
	        processData: false
	      }).done(function (res) {
	        var path = '' + myDomain + res.key;
	        _this2.feedback_path = path;
	        _this2.showFeedbackImage();
	      });
	    }
	  }, {
	    key: 'saveText',
	    value: function saveText() {}
	  }, {
	    key: 'autoSave',
	    value: function autoSave() {
	      var me = this;
	      setInterval(me.saveText.bind(me), 30 * 1000);
	    }
	  }]);
	
	  return Feedback;
	})();
	
	module.exports = Feedback;

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<div class=\"g__mask m-feedback-modal-mask show\" id=\"g__feedback_modal_mask\">\n  <div class=\"g__modal-window m__feedback_modal_window\" id=\"g_feedback_modal_window\">\n    <div class=\"m-modal-title\">\n      <h5>用户反馈</h5>\n    </div>\n    <div class=\"m-modal-content\">\n      <div class=\"m-content-wrapper\" >\n        <textarea name=\"name\" class=\"form-control\"\n        id=\"g_feedback_textarea\" placeholder=\"请在此处写下您宝贵的反馈意见~~\"><%- text %></textarea>\n        <div class=\"m-warning-wrapper m_warning_wrapper\" id=\"m_message_warning\">\n          <span class=\"warning-text hide\"></span>\n        </div>\n        <div class=\"m-feedback-image-upload\">\n          <form class=\"m-user-feedback-form\" id=\"m_user_feedback_form\">\n            <input type=\"hidden\" name=\"token\"/>\n            <label class=\"btn btn-primary\" for=\"upload_feedback\">上传图片(选填)</label>\n            <input name=\"file\" class=\"hide\" id=\"upload_feedback\" type=\"file\" accept=\"image/*\"/>\n            <input type=\"hidden\" name=\"key\" value=\"/feedback/web_feedback_<%- Date.now() %>\">\n            <input type=\"hidden\" name=\"accept\" />\n          </form>\n          <img class=\"feedback-image hide\" id=\"m_feedback_image\" />\n\n        </div>\n\n\n\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary btn-submit\" id=\"g_feedback_button\">提交反馈</button>\n\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }
/******/ ]);
//# sourceMappingURL=all.js.map