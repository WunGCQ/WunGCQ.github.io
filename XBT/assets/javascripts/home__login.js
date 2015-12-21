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

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var S = __webpack_require__(4);

	var Login = function Login() {};

	var loginController = new Login();
	module.exports = loginController;

/***/ },
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

/***/ }
/******/ ]);