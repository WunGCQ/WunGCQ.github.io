/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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

	//组件
	com.header = __webpack_require__(2);
	com.left_filter = __webpack_require__(8);
	com.user_modal = __webpack_require__(3);

	//页面控制器
	com.select_major = __webpack_require__(10);
	com.select_school = __webpack_require__(14);
	com.batch = __webpack_require__(16);

	com.school_intro = __webpack_require__(18);
	com.school_majors = __webpack_require__(20);
	com.school_colleges = __webpack_require__(22);

	__webpack_require__(4).myExtends();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var user_modal = __webpack_require__(3);
	var user = __webpack_require__(5);

	var header = (function () {
	  function header() {
	    _classCallCheck(this, header);

	    var me = this;
	    this.tmp = __webpack_require__(7);
	    this.renderer = _.template(this.tmp);
	    this.dom = null;
	    this.user_modal = null;

	    //获取用户信息后立即调用render
	    user.on('getUserData', function (user) {
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
	      window.location.href = '/search?search=' + str;
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
	    }
	  }]);

	  return header;
	})();

	module.exports = header;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var is = __webpack_require__(4).is;
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
/* 4 */
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
	  is: is,
	  myExtends: myExtends
	};

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
	      getUserData: []
	    };

	    this.getUserData();
	  }

	  _createClass(User, [{
	    key: 'setUserInfo',
	    value: function setUserInfo(userInfo) {
	      if (userInfo) {
	        //传入的参数
	        var user_province = userInfo.province;
	        $.cookie('user_province', !user_province || user_province == 'null' ? '北京市' : user_province);

	        var user_subject = userInfo.subject;
	        $.cookie('user_subject', !user_subject || user_subject == 'null' ? 'science' : user_subject);

	        $.cookie('username', userInfo.username);
	        var avatar = userInfo.avatar_url;
	        avatar = !avatar || avatar == 'null' ? '../../img/logo.png' : avatar;
	        $.cookie('avatar_url', avatar);
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
	    value: function getUserData() {
	      var me = this;
	      if (!this.token) {
	        alert('您尚未登录 注册 或 登录已经过期,请您登录/注册~');
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
	            me.onGetUserData();
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
	    key: 'on',
	    value: function on(event, func) {
	      switch (event) {
	        case 'login':
	          this.events.login.push(func);
	          break;
	        case 'getUserData':
	          this.events.getUserData.push(func);
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
	          $.cookie('token', res.payload.token, { expires: 7 });
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

	module.exports = "<div class=\"g__mask\" id=\"g__modal_window_mask\">\n  <div class=\"g__modal-window\" id=\"g__modal_window\">\n    <div class=\"m-modal-title\">\n      <div class=\"m-title-item tag-login\"><span>登录</span></div>\n      <div class=\"m-title-item tag-register\"><span>注册</span></div>\n      <div class=\"m-title-item tag-forget_password\"><span>找回密码</span></div>\n    </div>\n    <div class=\"m-modal-content\">\n      <div class=\"m-left\">\n        <div class=\"app-download\">\n          <h5>iOS客户端下载</h5>\n          <img class=\"m-qr-code\" src=\"https://img.alicdn.com/tfscom/TB1yrcfFFXXXXa9aVXXXXXXXXXX.png\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"m-right\">\n        <!-- 登录表单 -->\n        <form class=\"form-area login\" name=\"login_form\">\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"手机号\"/>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"密码\"/>\n          </div>\n          <div class=\"err-row\" id=\"login_err\">\n            <span></span>\n          </div>\n          <div class=\"submit-btn\" type=\"button\"></div>\n        </form>\n        <!-- 登录表单 -->\n\n        <!-- 注册表单 -->\n        <form class=\"form-area register\" name=\"register_form\">\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"手机号\"/>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control verify-code\" name=\"verify_code\" placeholder=\"验证码\"/>\n            <span for=\"search_input\" class=\"col btn btn-primary cn verify_code_btn\">发送验证码</span>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"密码\"/>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"昵称\"/>\n          </div>\n          <div class=\"err-row\" id=\"register_err\">\n            <span></span>\n          </div>\n          <div class=\"submit-btn\" type=\"button\"></div>\n        </form>\n        <!-- 注册表单 -->\n\n        <!-- 找密表单 -->\n        <form class=\"form-area forget_password\" name=\"forget_password_form\">\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"手机号\"/>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"text\" class=\"form-control verify-code\" name=\"verify_code\" placeholder=\"验证码\"/>\n            <span for=\"search_input\" class=\"col btn btn-primary cn verify_code_btn\">发送验证码</span>\n          </div>\n          <div class=\"input-row\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"新的密码\"/>\n          </div>\n          <div class=\"err-row\" id=\"forget_password_err\">\n            <span></span>\n          </div>\n          <div class=\"submit-btn\" type=\"button\"></div>\n        </form>\n        <!-- 找密表单 -->\n        <div class=\"other-paltform-login\">\n          <em>\n            第三方登录\n          </em>\n          <a class=\"qq\" href=\"\">&#xe658;</a>\n          <a class=\"wechat\" href=\"\">&#xe63c;</a>\n          <a class=\"weibo\" href=\"\">&#xe63d;</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	module.exports = "<header class=\"header g__header <%- USER.isLogin?'':'not-login' %>\">\n    <div class=\"col-md-3 logo text-center\"></div>\n    <div class=\"col-md-6 search-area text-center\">\n        <input type=\"text\" class=\"form-control m-input\" id=\"search_input\"/>\n        <span for=\"search_input\" class=\"col btn btn-primary cn\" id=\"header_search_btn\">搜索</span>\n    </div>\n    <div class=\"col-md-3 h__user text-right\">\n        <div class=\"head\" style=\"background-image:url('<%- USER.avatar_url %>')\"><img src=\"<%- USER.avatar_url %>\" alt=\"\"></div>\n        <a href=\"/XBT/html/layout/static_user_center.html\" class=\"username\"><%- USER.username %></a>\n        <a class=\"btn_login\">登录</a>\n        <a class=\"btn_register\">注册</a>\n        <a class=\"btn_logout\">登出</a>\n    </div>\n</header>";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var para = __webpack_require__(4).para;
	var session = __webpack_require__(4).session;
	var template = __webpack_require__(9);
	var province_list = ["北京市", "天津市", "重庆市", "上海市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"];
	var province_names = ["北京市", "天津市", "重庆市", "上海市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"];
	var USER = __webpack_require__(5);

	function hide_left_filter() {
	  $('#g_content').toggleClass('hide-left-filter');
	}

	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);

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
	    key: 'getInitialState',
	    value: function getInitialState() {
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
	        console.log(ev);
	        if (ev.keyCode == 13) {
	          _this2.onChange && _this2.onChange();
	        }
	      });
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

	module.exports = "<div class=\"g__left-filter\" id=\"g_left_filter\">\n    <span class=\"toggle-filter-btn\" onclick=\"hide_left_filter()\">收起左侧筛选</span>\n    <!-- 头部筛选标准 -->\n    <div class=\"m-wrapper wrapper-1\">\n        <div class=\"wen-li\" id=\"m_left_subject\">\n\n            <div class=\"item\">\n                <input type=\"radio\" id=\"wen\" name=\"subject\" value=\"science\" <% if(subject != 'art'){ %> checked=\"\" <%}%>/>\n                <label for=\"wen\">\n                    <em>理科</em>\n                </label>\n            </div>\n            <div class=\"item\">\n                <input type=\"radio\" id=\"li\" name=\"subject\" value=\"art\" <% if(subject == 'art'){ %> checked=\"\" <%}%> />\n                <label for=\"li\">\n                    <em>文科</em>\n                </label>\n            </div>\n        </div>\n\n        <div class=\"province-wrapper\">\n            <select name=\"\" id=\"m_province_selector\">\n                <%= province_list %>\n            </select>\n        </div>\n\n        <div class=\"grade-wrapper\">\n            <input type=\"number\" class=\"form-control m-input\" id=\"m_left_score\" value=\"<%=score%>\" placeholder=\"请输入期望的最高分\"/>\n        </div>\n    </div>\n    <!-- 头部筛选标准 -->\n    <!-- 志愿检索方式 -->\n    <div class=\"m-wrapper wrapper-2\">\n        <h5>志愿推荐</h5>\n\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/select_major.html\"><i>&#xe652;</i><span>按专业检索</span></a>\n        </div>\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/select_school.html\"><i>&#xe650;</i><span>按高校检索</span></a>\n        </div>\n    </div>\n    <!-- 志愿检索方式 -->\n    <!-- 数据资料 -->\n    <div class=\"m-wrapper wrapper-2\">\n        <h5>数据资料</h5>\n\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/select_school.html\"><i>&#xe653;</i><span>学院排行与查询</span></a>\n        </div>\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/select_school.html\"><i>&#xe64f;</i><span>专业查询</span></a>\n        </div>\n        <div class=\"link-box\">\n            <a href=\"/XBT/html/layout/batch.html\"><i>&#xe64d;</i><span>批次线查询</span></a>\n        </div>\n    </div>\n    <!-- 数据资料 -->\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wungcq on 15/12/20.
	 */
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var province_names = __webpack_require__(4).province_names;
	var USER = __webpack_require__(5);
	var template = __webpack_require__(11);
	var left_filter = __webpack_require__(8);
	var header = new (__webpack_require__(2))();
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
	  }

	  _createClass(controller, [{
	    key: 'init',
	    value: function init() {
	      var me = this;
	      $('th', this.table_head).eq(0).on('click', me.jump_level_1.bind(me));
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

	var is = __webpack_require__(4).is;
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

	var province_names = __webpack_require__(4).province_names;
	var USER = __webpack_require__(5);

	var template = __webpack_require__(15);
	var left_filter = __webpack_require__(8);
	var header = new (__webpack_require__(2))();

	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);

	    this.page = 1;
	    this.page_num = 1;
	    this.state = {};
	    this.wrapper = $('#m_schools_wrapper');
	    this.renderer = _.template(template);

	    this.left_filter = new left_filter();
	    this.init();
	  }

	  _createClass(controller, [{
	    key: 'init',
	    value: function init() {
	      var me = this;
	      me.get_data().done(me.render_data.bind(me));
	    }
	  }, {
	    key: 'bind',
	    value: function bind() {}
	  }, {
	    key: 'render_data',
	    value: function render_data() {
	      var html = this.renderer({ data: this.state.universities });
	      this.wrapper.html(html);
	    }
	  }, {
	    key: 'get_data',
	    value: function get_data() {
	      var me = this;
	      var cb = null;

	      var data = {
	        user_province: province_names[USER.user_province],
	        user_subject: USER.user_subject || this.left_filter.subject,
	        province: province_names[this.left_filter.province],
	        score: this.left_filter.score
	      };

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(17);
	var para = __webpack_require__(4).para;
	var user = __webpack_require__(5);
	var province_names = __webpack_require__(4).province_names;
	var header = new (__webpack_require__(2))();

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
/* 17 */
/***/ function(module, exports) {

	"use strict";

	module.exports = "<% _.each(data,function(data,i){ %>\n<tr>\n    <td><%= data.year %></td>\n    <td><%= data.lines[0] %></td>\n    <td><%= data.lines[1] %></td>\n    <td><%= data.lines[2] %></td>\n</tr>\n<% }) %>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var user = __webpack_require__(5);
	var header = new (__webpack_require__(2))();
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(19);
	var para = __webpack_require__(4).para;
	var province_names = __webpack_require__(4).province_names;

	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);

	    var me = this;
	    this.renderer = _.template(template);
	    this.left_filter = new left_filter();
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
/* 19 */
/***/ function(module, exports) {

	"use strict";

	module.exports = "<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-poster\" style=\"background-image:url('../../img/aaa.jpeg')\">\n    <span class=\"school-poster-tip\"></span>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-header\">\n    <div class=\"school-avatar\" style=\"background-image:url('<%= school.icon_url %>')\">\n    </div>\n    <div class=\"school-right\">\n      <h3><%- school.name %></h3>\n      <div class=\"tags-wrapper\">\n        <% _.each(school.tags, function(tag,i){ %>\n          <span class=\"tag\"><%- tag %></span>\n        <% }) %>\n      </div>\n    </div>\n    <button class=\"unlock-all\">\n      解锁全部资料\n    </button>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper school-section-link-wrapper\">\n  <a href=\"/XBT/html/layout/school_colleges.html?school_id=<%= school.id %>\">学院视频</a>\n  <a class=\"active\" href=\"/XBT/html/layout/school_detail.html?school_id=<%= school.id %>\">简介</a>\n  <a href=\"/XBT/html/layout/school_majors.html?school_id=<%= school.id %>\">录取</a>\n</div>\n  <!-- 学校实际内容 -->\n<div class=\"g__filter-result-wrapper school-detail-main-content\">\n\n  <h4>直属机构</h4>\n  <p class=\"school-intro\"><%- school.affiliated_to %></p>\n  <h4>学校类型</h4>\n  <p class=\"school-intro\"><%- school.category %></p>\n  <h4>地址</h4>\n  <p class=\"school-intro\"><%- school.address %></p>\n  <h4>电话号码</h4>\n  <p class=\"school-intro\"><%- school.phone %></p>\n  <h4>排名</h4>\n  <p class=\"school-intro\"><%- school.rank %></p>\n  <h4>学校简介</h4>\n  <div class=\"school-intro-wrapper\">\n    <%= school.introduction %>\n  </div>\n</div>\n  <!-- 学校实际内容 -->\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var user = __webpack_require__(5);
	var header = new (__webpack_require__(2))();
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(21);
	var para = __webpack_require__(4).para;
	var province_names = __webpack_require__(4).province_names;

	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);

	    var me = this;

	    // show left filter
	    this.left_filter = new left_filter();

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
/* 21 */
/***/ function(module, exports) {

	"use strict";

	module.exports = ["<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-poster\" style=\"background-image:url('../../img/aaa.jpeg')\">\n    <span class=\"school-poster-tip\"></span>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-header\">\n    <div class=\"school-avatar\" style=\"background-image:url('<%= school.icon_url %>')\">\n    </div>\n    <div class=\"school-right\">\n      <h3><%- school.name %></h3>\n      <div class=\"tags-wrapper\">\n        <% _.each(school.tags, function(tag,i){ %>\n          <span class=\"tag\"><%- tag %></span>\n        <% }) %>\n      </div>\n    </div>\n    <button class=\"unlock-all\">\n      解锁全部资料\n    </button>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper school-section-link-wrapper\">\n  <a href=\"/XBT/html/layout/school_colleges.html?school_id=<%= school.id %>\">视频</a>\n  <a href=\"/XBT/html/layout/school_detail.html?school_id=<%= school.id %>\">简介</a>\n  <a class=\"active\" href=\"/XBT/html/layout/school_majors.html?school_id=<%= school.id %>\">录取</a>\n</div>\n\n<div class=\"g__filter-result-wrapper school-detail-main-content __lines__table\" id=\"m_major_list_wrapper\">\n<!-- 学校实际内容 -->\n<!-- 学校实际内容 -->\n</div>\n", "\n<!-- 学院列表 -->\n<% console.log() %>\n  <table>\n    <thead>\n      <tr>\n        <th>专业</th>\n        <% _.each(years, function(year){ %>\n          <th><%- year %></th>\n        <% }) %>\n      </tr>\n    </thead>\n    <tbody>\n      <% _.each(majors, function(major){ %>\n        <tr>\n          <td><span><%- major.name %></span></td>\n          <% _.each(major.scores.score, function(s){ %>\n            <td><%= s %></td>\n          <% }) %>\n        </tr>\n      <% }) %>\n    </tbody>\n  </table>\n  <!-- 学院列表 -->\n"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var user = __webpack_require__(5);
	var header = new (__webpack_require__(2))();
	var left_filter = __webpack_require__(8);
	var template = __webpack_require__(23);
	var para = __webpack_require__(4).para;
	var province_names = __webpack_require__(4).province_names;

	var controller = (function () {
	  function controller() {
	    _classCallCheck(this, controller);

	    var me = this;

	    // show left filter
	    this.left_filter = new left_filter();

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
	    }
	  }]);

	  return controller;
	})();

	module.exports = controller;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	module.exports = ["<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-poster\" style=\"background-image:url('../../img/aaa.jpeg')\">\n    <span class=\"school-poster-tip\"></span>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper\">\n  <div class=\"school-header\">\n    <div class=\"school-avatar\" style=\"background-image:url('<%= school.icon_url %>')\">\n    </div>\n    <div class=\"school-right\">\n      <h3><%- school.name %></h3>\n      <div class=\"tags-wrapper\">\n        <% _.each(school.tags, function(tag,i){ %>\n          <span class=\"tag\"><%- tag %></span>\n        <% }) %>\n      </div>\n    </div>\n    <button class=\"unlock-all\">\n      解锁全部资料\n    </button>\n  </div>\n</div>\n\n<div class=\"g__filter-result-wrapper school-section-link-wrapper\">\n  <a class=\"active\" href=\"/XBT/html/layout/school_colleges.html?school_id=<%= school.id %>\">视频</a>\n  <a href=\"/XBT/html/layout/school_detail.html?school_id=<%= school.id %>\">简介</a>\n  <a href=\"/XBT/html/layout/school_majors.html?school_id=<%= school.id %>\">录取</a>\n</div>\n\n<div class=\"g__filter-result-wrapper school-detail-main-content __lines__table\" id=\"m_major_list_wrapper\">\n<!-- 学校实际内容 -->\n<!-- 学校实际内容 -->\n</div>\n", "\n<% _.each(colleges, function(c){ %>\n<a href=\"/XBT/html/layout/college_video.html?school_id=<%= school_id %>&college_id=<%= c.id %>\" class=\"m_major\">\n    <div class=\"m_text\"><%= c.name %></div>\n</a>\n<% }) %>\n"];

/***/ }
/******/ ]);