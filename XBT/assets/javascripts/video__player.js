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
/***/ function(module, exports) {

	/**
	 * Created by wungcq on 15/11/25.
	 */

	"use strict";

	function addPreviousAndNext2ToolBar() {
	  var html = $("#tool-bar-previous-next").html();
	  $(html).insertAfter(".vjs-control-bar .vjs-remaining-time");
	}

	(function initPlayer() {
	  //设置全屏
	  var v = document.getElementById("school-video");

	  var h = document.documentElement.clientHeight;
	  v.setAttribute("height", h + "px");

	  var player = videojs('school-video', {}, function () {

	    $(".container").removeClass("loading");
	    addPreviousAndNext2ToolBar();
	    //
	    //bind

	    bindVideoEvents();
	  });
	})();

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

	function bindVideoEvents() {

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

	bindVideoEvents();

/***/ }
/******/ ]);