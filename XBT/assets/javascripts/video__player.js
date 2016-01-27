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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);


/***/ },

/***/ 2:
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

/***/ 5:
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
	        this.setUserInfo();
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
	  }, {
	    key: 'logout',
	    value: function logout() {
	      $.removeCookie('token');
	      $.cookie('username', '游客', { expires: 30, path: '/XBT' });
	      window.location.reload();
	    }
	  }]);
	
	  return User;
	})();
	
	var user = new User();
	module.exports = user;

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by wungcq on 15/11/25.
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var template = __webpack_require__(33);
	var para = __webpack_require__(2).para;
	var user = __webpack_require__(5);
	
	var endList = (function () {
	  var endList = $("#tmp-c-course-video-end-list").html();
	  return {
	    showEndList: function showEndList() {
	      if ($("#c-video-view >.video-js .c-course-video-end-list").length > 0) {
	        $("#c-video-view >.video-js .c-course-video-end-list").addClass("active");
	      } else {
	        $("#c-video-view >.video-js").append(endList);
	      }
	    },
	    hideEndList: function hideEndList() {
	      $("#c-video-view >.video-js .c-course-video-end-list").removeClass("active");
	    }
	  };
	})();
	
	var Player = (function () {
	  function Player() {
	    _classCallCheck(this, Player);
	
	    this.player = null;
	    this.video_id = para('v_id');
	    this.init();
	  }
	
	  _createClass(Player, [{
	    key: 'init',
	    value: function init() {
	      this.getVideoData();
	    }
	  }, {
	    key: 'getVideoData',
	    value: function getVideoData() {
	      var me = this;
	      $.ajax({
	        url: 'http://api.learningrabbit.qinixapp.com/v1/videos/' + me.video_id,
	        dataType: 'json',
	        beforeSend: function beforeSend(xhr) {
	          xhr.setRequestHeader('Authorization', user.token);
	        }
	      }).done(function (res) {
	        if (res.code == 0) {
	          var data = res.payload;
	          console.log(res);
	          $('body').html(_.template(template)(data));
	          me.initPlayer();
	        } else {}
	      });
	    }
	  }, {
	    key: 'initPlayer',
	    value: function initPlayer() {
	      var me = this;
	      var v = document.getElementById("school-video");
	
	      var h = para('h') || document.documentElement.clientHeight;
	      v.setAttribute("height", h + "px");
	
	      me.player = videojs('school-video', {}, function () {
	
	        $(".container").removeClass("loading");
	
	        me.addPreviousAndNext2ToolBar();
	        //
	        //bind
	
	        me.bindVideoEvents();
	      });
	    }
	  }, {
	    key: 'addPreviousAndNext2ToolBar',
	    value: function addPreviousAndNext2ToolBar() {
	      var html = $("#tool-bar-previous-next").html();
	      $(html).insertAfter(".vjs-control-bar .vjs-remaining-time");
	    }
	  }, {
	    key: 'bindVideoEvents',
	    value: function bindVideoEvents() {
	
	      var video = $("video").eq(0);
	
	      //事件
	      video.on("ended", function (e) {
	        //endList.showEndList();
	        $('.vjs-big-play-button').show();
	      }).on("play", function (e) {
	        //hideAQWERDF();
	        $('.vjs-big-play-button').hide();
	        //endList.hideEndList();
	      }).on("pause", function (e) {
	        //showAQWERDF();
	        $('.vjs-big-play-button').show();
	      });
	
	      $("video source").each(function (index, elem) {
	        $(this).on('error', function (e) {
	          //console.error($(e.target).attr("src"));
	        });
	      });
	
	      //videojs API绑定
	    }
	  }]);
	
	  return Player;
	})();
	
	module.exports = new Player();

/***/ },

/***/ 33:
/***/ function(module, exports) {

	"use strict";
	
	module.exports = "<video id=\"school-video\" class=\"video-js vjs-default-skin video-view\"\n  poster = \"<%= poster_url %>\"\n  controls preload=\"auto\" width=\"100%\">\n\n    <source src=\"<%= url %>\" type='video/mp4'>\n\n    <p class=\"vjs-no-js\">\n        若要播放此视频，请使用 <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">支持HTML5 视频播放</a>的浏览器，并保证JavaScript没有被禁止。\n    </p>\n</video>";

/***/ }

/******/ });
//# sourceMappingURL=video__player.js.map