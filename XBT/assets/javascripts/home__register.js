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

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var service = {};
	var dataSet = {
	  test: {
	    Register: {
	      checkInfo: {
	        code: 200,
	        result: 'pass'
	      },
	      finalCheck: {
	        code: 200,
	        result: 'success'
	      },
	      province: [{ name: '省名1', value: 1 }, { name: '省名2', value: 2 }, { name: '省名3', value: 3 }, { name: '省名4', value: 4 }],
	      city: [{ name: '城市1', value: 1 }, { name: '城市2', value: 2 }, { name: '城市3', value: 3 }, { name: '城市4', value: 4 }],
	      district: [{ name: '区县1', value: 1 }, { name: '区县2', value: 2 }, { name: '区县3', value: 3 }, { name: '区县4', value: 4 }],
	      org: [{ name: '组织1', value: 1 }, { name: '组织名称2', value: 2 }, { name: '组织', value: 3 }, { name: '大型养老院4', value: 4 }]
	    }
	  }
	};

	service.mode = function (str) {
	  var mode = 'debug';
	  return str == mode;
	};

	service.login = {};

	service.Register = {
	  checkInfo: function checkInfo() {
	    var cb = null,
	        err_cb = null;
	    function connect(cb) {
	      $.get('/', null, 'json').done(function (data) {
	        deal(data);
	      });
	    }
	    function debug() {
	      var data = { code: 200, list: dataSet.test.Register.checkInfo };
	      setTimeout(function () {
	        deal.call(null, data);
	      }, 50);
	    }
	    function deal(dataToDealWith) {
	      if (dataToDealWith.code != 200) {
	        err_cb && err_cb();
	      }
	      cb && cb(dataToDealWith.list);
	    }
	    function done(fun, ctx) {
	      cb = fun;
	      cb.bind(ctx);
	      if (service.mode('debug')) debug();else connect();
	    }
	    function err(fun, ctx) {
	      err_cb = fun;
	      err_cb.bind(ctx);
	    }
	    return {
	      done: done,
	      error: err
	    };
	  },

	  finalCheck: function finalCheck() {
	    var cb = null,
	        err_cb = null;
	    function connect(cb) {
	      $.get('/', null, 'json').done(function (data) {
	        deal(data);
	      });
	    }
	    function debug() {
	      var data = dataSet.test.Register.finalCheck;
	      setTimeout(function () {
	        deal.call(null, data);
	      }, 50);
	    }
	    function deal(dataToDealWith) {
	      if (dataToDealWith.code != 200) {
	        err_cb && err_cb();
	      }
	      cb && cb(dataToDealWith.list);
	    }
	    function done(fun, ctx) {
	      cb = fun;
	      cb.bind(ctx);
	      if (service.mode('debug')) debug();else connect();
	    }
	    function err(fun, ctx) {
	      err_cb = fun;
	      err_cb.bind(ctx);
	    }
	    return {
	      done: done,
	      error: err
	    };
	  },

	  province: function province() {
	    var cb = null,
	        err_cb = null;
	    function connect(cb) {
	      $.get('/', null, 'json').done(function (data) {
	        deal(data);
	      });
	    }
	    function debug() {
	      var data = { code: 200, list: dataSet.test.Register.province };
	      setTimeout(function () {
	        deal.call(null, data);
	      }, 50);
	    }
	    function deal(dataToDealWith) {
	      if (dataToDealWith.code != 200) {
	        err_cb && err_cb();
	      }
	      cb && cb(dataToDealWith.list);
	    }
	    function done(fun, ctx) {
	      cb = fun;
	      cb.bind(ctx);
	      if (service.mode('debug')) debug();else connect();
	    }
	    function err(fun, ctx) {
	      err_cb = fun;
	      err_cb.bind(ctx);
	    }
	    return {
	      done: done,
	      error: err
	    };
	  },
	  city: function city(provinceData) {
	    var cb = null,
	        err_cb = null;
	    function connect(cb) {
	      $.get('/', null, 'json').done(function (data) {
	        deal(data);
	      });
	    }
	    function debug() {
	      var data = { code: 200, list: dataSet.test.Register.city };
	      setTimeout(function () {
	        deal.call(null, data);
	      }, 50);
	    }
	    function deal(dataToDealWith) {
	      if (dataToDealWith.code != 200) {
	        err_cb && err_cb();
	      }
	      cb && cb(dataToDealWith.list);
	    }
	    function done(fun, ctx) {
	      cb = fun;
	      cb.bind(ctx);
	      if (service.mode('debug')) debug();else connect();
	    }
	    function err(fun, ctx) {
	      err_cb = fun;
	      err_cb.bind(ctx);
	    }
	    return {
	      done: done,
	      error: err
	    };
	  },
	  district: function district(cityData) {
	    var cb = null,
	        err_cb = null;
	    function connect(cb) {
	      $.get('/', null, 'json').done(function (data) {
	        deal(data);
	      });
	    }
	    function debug() {
	      var data = { code: 200, list: dataSet.test.Register.district };
	      setTimeout(function () {
	        deal.call(null, data);
	      }, 50);
	    }
	    function deal(dataToDealWith) {
	      if (dataToDealWith.code != 200) {
	        err_cb && err_cb();
	      }
	      cb && cb(dataToDealWith.list);
	    }
	    function done(fun, ctx) {
	      cb = fun;
	      cb.bind(ctx);
	      if (service.mode('debug')) debug();else connect();
	    }
	    function err(fun, ctx) {
	      err_cb = fun;
	      err_cb.bind(ctx);
	    }
	    return {
	      done: done,
	      error: err
	    };
	  },
	  org: function org(districtData) {
	    var cb = null,
	        err_cb = null;
	    function connect(cb) {
	      $.get('/', null, 'json').done(function (data) {
	        deal(data);
	      });
	    }
	    function debug() {
	      var data = { code: 200, list: dataSet.test.Register.org };
	      setTimeout(function () {
	        deal.call(null, data);
	      }, 50);
	    }
	    function deal(dataToDealWith) {
	      if (dataToDealWith.code != 200) {
	        err_cb && err_cb();
	      }
	      cb && cb(dataToDealWith.list);
	    }
	    function done(fun, ctx) {
	      cb = fun;
	      cb.bind(ctx);
	      if (service.mode('debug')) debug();else connect();
	    }
	    function err(fun, ctx) {
	      err_cb = fun;
	      err_cb.bind(ctx);
	    }
	    return {
	      done: done,
	      error: err
	    };
	  }

	};

	module.exports = service;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	{
	  var District;

	  (function () {
	    var Service = __webpack_require__(4);

	    var Register = React.createClass({ displayName: "Register",
	      getInitialState: function getInitialState() {
	        return {
	          step: 0,
	          step_0: {
	            lock: true,
	            mouseDown: false,
	            left: 0,
	            formData: {}
	          },
	          step_1: {
	            isCodeSent: false,
	            seconds: 0,
	            codeTip: '发送验证码',
	            data: {
	              formData: {}
	            }
	          },
	          step_2: {
	            type: 0,
	            imageSrc: ''
	          }
	        };
	      },
	      render: function render() {
	        return React.createElement("div", { className: "row" }, this.renderProgress(), React.createElement("div", { className: "center-block" }, React.createElement("img", { src: "../img/logo.png", className: "logo", alt: "" }), this.renderCenter()));
	      },
	      renderProgress: function renderProgress() {
	        var status = ['', '', ''];
	        status[this.state.step] = 'active';
	        return React.createElement("div", { className: "top-bar" }, React.createElement("div", { className: 'item ' + status[0] }, React.createElement("span", null, "验证手机号")), React.createElement("div", { className: 'item ' + status[1] }, React.createElement("span", null, "填写账号信息")), React.createElement("div", { className: 'item ' + status[2] }, React.createElement("span", null, "验证用户身份")));
	      },
	      renderCenter: function renderCenter() {
	        return React.createElement("div", { className: "bottom-section" }, this.renderFormByStep());
	      },
	      renderFormByStep: function renderFormByStep() {
	        var name = 'renderStep_' + this.state.step;
	        return this[name].call();
	      },
	      renderStep_0: function renderStep_0() {
	        return React.createElement("div", { className: "step-wrapper", id: "step_1" }, React.createElement("form", { className: "row form", id: "form_step_1" }, React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", placeholder: "手机号*" })), React.createElement("div", { className: "touch-move-bar" }, React.createElement("span", null, this.state.step_0.lock ? '滑动解锁' : '解锁完毕'), React.createElement("i", { className: "move-block",
	          onMouseDown: this.setLock,
	          onMouseUp: this.setLock,
	          onMouseLeave: this.setLock,
	          onMouseMove: this.setLockLeft }, this.state.step_0.lock ? '>>' : '✓')), React.createElement("div", { className: "row" }, React.createElement("span", { className: "btn default i-b fs-n", style: { width: '100%;' }, onClick: this.goStep_1 }, "下一步"))));
	      },
	      goStep_1: function goStep_1() {
	        this.state.step = 1;
	        this.setState(this.state);
	      },
	      setLock: function setLock(ev) {
	        var width = 326;
	        if (ev.type == 'mousedown') {
	          this.state.step_0.mouseDown = true;
	        } else if (ev.type == 'mouseup' || ev.type == 'mouseleave') {
	          this.state.step_0.mouseDown = false;
	          if (this.state.step_0.left < width) {
	            this.state.step_0.left = 0;
	            ev.target.style['margin-left'] = 0;
	          } else {
	            this.state.step_0.left = width + 'px';
	            ev.target.style['margin-left'] = width + 'px';
	            this.state.step_0.lock = false;
	            this.setState(this.state);
	          }
	        }
	      },
	      setLockLeft: function setLockLeft(ev) {

	        if (this.state.step_0.mouseDown) {
	          var x = ev.pageX - ev.target.offsetParent.offsetParent.offsetLeft - 2;
	          var width = 326;
	          if (x > width) {
	            x = width;
	          } else if (x < 0) {
	            x = 0;
	          }

	          console.log(x);
	          this.state.step_0.left = x;
	          ev.target.style['margin-left'] = x + 'px';
	        } else {
	          return 0;
	        }
	      },
	      renderStep_1: function renderStep_1() {
	        return React.createElement("div", { className: "step-wrapper", id: "step_2" }, React.createElement("form", { className: "row form" }, React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "name", placeholder: "姓名" })), React.createElement("div", { className: "row" }, React.createElement("input", { type: "password", className: "ipt", name: "pwd", placeholder: "密码" })), React.createElement("div", { className: "row" }, React.createElement("input", { type: "password", className: "ipt", name: "pwd", placeholder: "确认密码" })), React.createElement("div", { className: "row" }, React.createElement("div", { className: "col", style: { width: '65%;', 'padding-left': 0 } }, React.createElement("input", { type: "text", className: "ipt", name: "code", placeholder: "输入验证码" })), React.createElement("div", { className: "col", style: { width: '35%;', 'padding-right': 0 } }, React.createElement("span", { className: 'btn i-b ' + (this.state.step_1.isCodeSent ? 'disabled' : 'default'), style: { width: '100%' }, onClick: this.sendCode }, this.state.step_1.codeTip))), React.createElement("div", { className: "row" }, React.createElement("span", { className: "btn default i-b fs-n", style: { width: '100%' }, onClick: this.goStep_2 }, "下一步"))));
	      },
	      sendCode: function sendCode() {
	        var me = this;
	        if (this.state.step_1.isCodeSent == false) {
	          //send code
	          var codeTimer = setInterval(function () {
	            if (me.state.step_1.seconds < 60) {
	              me.state.step_1.seconds++;
	              me.state.step_1.codeTip = '(' + me.state.step_1.seconds + ')秒后再次发送';
	              me.setState(me.state);
	            } else {
	              me.state.step_1.seconds = 0;
	              me.state.step_1.codeTip = '发送短信验证码';
	              me.setState(me.state);
	              clearInterval(codeTimer);
	            }
	          }, 1000);
	          this.state.step_1.isCodeSent = true;
	          this.setState(this.state);
	        } else {
	          alert('还不能发送手机验证码!');
	        }
	      },
	      goStep_2: function goStep_2() {
	        //验证
	        var me = this;
	        me.state.step = 2;
	        me.setState(me.state);
	      },

	      renderStep_2: function renderStep_2() {

	        return React.createElement("div", { className: "step-wrapper", id: "step_3" }, React.createElement("form", { className: "row register-type-wrapper", id: "register_type" }, React.createElement("div", { className: "radio col" }, React.createElement("input", { type: "radio", name: "register_type", id: "register_type_admin", value: "0", checked: this.state.step_2.type == 0 ? 'checked' : '' }), React.createElement("label", { htmlFor: "register_type_admin", onClick: this.setUserType, "data-value": 0 }, React.createElement("span", null, "机构管理员"))), React.createElement("div", { className: "radio col" }, React.createElement("input", { type: "radio", name: "register_type", id: "register_type_worker", value: "1", checked: this.state.step_2.type == 1 ? 'checked' : '' }), React.createElement("label", { htmlFor: "register_type_worker", onClick: this.setUserType, "data-value": 1 }, React.createElement("span", null, "我是护工"))), React.createElement("div", { className: "radio col" }, React.createElement("input", { type: "radio", name: "register_type", id: "register_type_family", value: "2", checked: this.state.step_2.type == 2 ? 'checked' : '' }), React.createElement("label", { htmlFor: "register_type_family", onClick: this.setUserType, "data-value": 2 }, React.createElement("span", null, "我是家属")))), this.renderFormByType(), React.createElement("div", { className: "row" }, React.createElement("span", { className: "btn default i-b fs-n", style: { width: '100%', 'margin-top': '15px' } }, "完 成")));
	      },
	      setUserType: function setUserType(ev) {
	        var dom = ev.target;
	        if (dom.nodeName.toLowerCase() == 'span') {
	          dom = dom.parentNode;
	        }
	        var type = dom.getAttribute('data-value') - 0;
	        this.state.step_2.type = type;
	        this.state.step_2.maxLevel = [0, 3, 4][type];
	        this.state.step_2.level = 0;
	        this.setState(this.state);
	      },
	      renderFormByType: function renderFormByType() {
	        return this['renderStep_2_type_' + this.state.step_2.type].call(this);
	      },
	      renderStep_2_type_0: function renderStep_2_type_0() {
	        //机构
	        return React.createElement("div", { className: "row form" }, React.createElement("form", { className: "row form" }, React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_name", placeholder: "机构名称*" })), React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_person", placeholder: "机构负责人*" })), React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_bed_num", placeholder: "床位数" }))), React.createElement(District, { type: this.state.step_2.type, level: this.state.step_2.level, maxLevel: 3 }), React.createElement("form", { className: "row form" }, React.createElement("div", { className: "col", style: { 'width': '50%' } }, React.createElement("input", { type: "file", style: { 'display': 'none' }, id: "org_img_uploader", onChange: this.uploadImage }), React.createElement("label", { className: "btn default i-b fs-n", htmlFor: "org_img_uploader" }, "上传机构证件照")), React.createElement("div", { className: "col", style: { 'width': '50%' } }, React.createElement("img", { src: this.state.step_2.imgSrc, alt: '机构证件照预览', width: "170" }))));
	      },
	      uploadImage: function uploadImage(ev) {
	        var input = ev.target;
	        var file = ev.target.files[0];
	        var me = this;
	        if (file.type.toLowerCase().indexOf('image') > -1) {
	          var reader = new FileReader();
	          reader.onload = function (e) {
	            var r = reader.result;
	            me.state.step_2.imgSrc = r;
	            me.setState(me.state);
	          };
	          reader.readAsDataURL(file);
	        }
	      },
	      renderStep_2_type_1: function renderStep_2_type_1() {
	        return React.createElement("div", { className: "row form" }, React.createElement("form", { className: "row form" }, React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_name", placeholder: "机构名称*" })), React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_person", placeholder: "机构负责人*" })), React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_bed_num", placeholder: "床位数" }))), React.createElement(District, { type: this.state.step_2.type, level: this.state.step_2.level, maxLevel: 4 }));
	      },
	      renderStep_2_type_2: function renderStep_2_type_2() {
	        return React.createElement("form", { className: "row form" }, React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_name", placeholder: "老人信息" })), React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_person", placeholder: "老人身份证号" })), React.createElement("div", { className: "row" }, React.createElement("input", { type: "text", className: "ipt", name: "org_bed_num", placeholder: "机构名称" })));
	      }

	    });
	    District = React.createClass({ displayName: "District",
	      getInitialState: function getInitialState() {
	        this.state = {
	          level: this.__default('level', 0),
	          levelNames: ['province', 'city', 'district', 'org'],
	          levelLabel: ['省份', '城市', '区县', '机构名称'],
	          picked: this.__default('picked', []),
	          pickedLabels: this.__default('picked', []),
	          levelData: [],
	          levelString: this.__default('levelString', ''),
	          loading: false,
	          loaded: false
	        };
	        this.getItems();
	        return this.state;
	      },
	      __default: function __default(name, value) {
	        return this.props[name] == undefined ? value : this.props[name];
	      },
	      render: function render() {
	        return React.createElement("div", { className: "row district-panel form" }, React.createElement("div", { className: "row m-value" }, React.createElement("input", { type: "text", className: "ipt", placeholder: "机构名称", value: this.state.levelString, disabled: true })), React.createElement("div", { className: "row level-wrapper" }, this.renderLevelLabels()), this.renderItems());
	      },
	      renderLevelLabels: function renderLevelLabels() {
	        var _this = this;

	        var me = this;
	        var len = this.props.maxLevel;
	        var arr = this.state.levelLabel.slice(0, len);
	        return _.map(arr, function (item, level) {
	          return React.createElement("div", { className: 'item m-' + len + ' ' + (me.state.level == level ? 'active' : ''), "data-level": level, onClick: _this.switchLevel }, React.createElement("span", { "data-level": level }, item));
	        });
	      },
	      renderItems: function renderItems() {
	        var _this2 = this;

	        var data = null;
	        if (this.state.loading) {
	          data = React.createElement("span", null, "查询中...");
	        } else {
	          var data = _.map(this.state.levelData, function (item, index) {
	            return React.createElement("span", { className: "item", "data-level": _this2.state.level, "data-value": item.value, "data-label": item.name }, item.name);
	          });
	          if (data == []) {
	            data = React.createElement("span", null, "无结果");
	          }
	        }

	        return React.createElement("div", { className: "districts-wrapper", onClick: this.changeLevel }, data);
	      },
	      provinceData: function provinceData() {
	        var me = this;
	        this.state.loading = true;
	        Service.Register.province().done(function (data) {
	          me.state.levelData = data;
	          me.state.loading = false;
	          me.setState(me.state);
	        }, me);
	      },
	      cityData: function cityData(provinceData) {
	        var me = this;
	        this.state.loading = true;
	        Service.Register.city(provinceData).done(function (data) {
	          me.state.levelData = data;
	          me.state.loading = false;
	          me.setState(me.state);
	        }, me);
	      },
	      districtData: function districtData(cityData) {
	        var me = this;
	        this.state.loading = true;
	        Service.Register.district(cityData).done(function (data) {
	          me.state.levelData = data;
	          me.state.loading = false;
	          me.setState(me.state);
	        }, me);
	      },
	      orgData: function orgData(districtData) {
	        var me = this;
	        this.state.loading = true;
	        Service.Register.org(districtData).done(function (data) {
	          me.state.levelData = data;
	          me.state.loading = false;
	          me.setState(me.state);
	        }, me);
	      },
	      changeLevel: function changeLevel(ev) {
	        var me = this;
	        if (ev.target.tagName.toLowerCase() == 'span') {
	          var level = ev.target.getAttribute('data-level') - 0;
	          var value = ev.target.getAttribute('data-value'); //待定
	          var label = ev.target.getAttribute('data-label');

	          this.state.picked[this.state.level] = value;
	          this.state.pickedLabels[this.state.level] = label;
	          if (this.state.level < this.props.maxLevel - 1) {
	            this.state.level++;
	            this.setState(this.state);
	            this.getItems();
	          } else {
	            this.setState(this.state);
	            this.getItems();
	          }
	          console.log(value);
	        }
	      },
	      switchLevel: function switchLevel(ev) {
	        var me = this;
	        var level = ev.target.getAttribute('data-level') - 0;
	        var len = this.state.picked.length;
	        //如果level大过 piced 长度 name是不允许的
	        if (level >= len) {
	          return;
	        } else {
	          //否则将降至level 级数据
	          this.state.picked = this.state.picked.splice(0, level);
	          this.state.pickedLabels = this.state.pickedLabels.splice(0, level);
	          this.state.level = level;
	          this.getItems();
	        }
	      },
	      getItems: function getItems() {
	        var level = this.state.level;
	        var data = level > 0 ? this.state.picked[level - 1] : null;
	        var name = this.state.levelNames[level];
	        this.state.levelString = this.state.pickedLabels.join(' ');
	        this[name + 'Data'].call(this, data);
	      }
	    });

	    React.render(React.createElement(Register, null), document.body);
	  })();
	}

/***/ }
/******/ ]);