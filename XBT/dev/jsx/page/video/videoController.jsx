/**
 * Created by wungcq on 15/11/25.
 */

var template = require("../../templates/player.html");
var para = require('../../common').para;
var user = require('../../service/user');


var endList = (function () {
  var endList = $("#tmp-c-course-video-end-list").html();
  return {
    showEndList: function () {
      if ($("#c-video-view >.video-js .c-course-video-end-list").length > 0) {
        $("#c-video-view >.video-js .c-course-video-end-list").addClass("active");
      } else {
        $("#c-video-view >.video-js").append(endList);
      }
    },
    hideEndList: function () {
      $("#c-video-view >.video-js .c-course-video-end-list").removeClass("active");
    }
  }
})();


class Player {
  constructor() {
    this.player = null;
    this.video_id = para('v_id');
    this.init();
  }

  init() {
    this.getVideoData();
  }

  getVideoData() {
    var me = this;
    $.ajax({
      url: `http://api.learningrabbit.qinixapp.com/v1/videos/${me.video_id}`,
      dataType: 'json',
      beforeSend: (xhr)=> {
        xhr.setRequestHeader('Authorization', user.token);
      }
    }).done((res)=> {
      if (res.code == 0) {
        var data = res.payload;
        console.log(res);
        $('body').html(_.template(template)(data));
        me.initPlayer()

      } else {

      }
    })
  }

  initPlayer() {
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
    })
  }

  addPreviousAndNext2ToolBar() {
    var html = $("#tool-bar-previous-next").html();
    $(html).insertAfter(".vjs-control-bar .vjs-remaining-time");
  }


  bindVideoEvents() {


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
      })
    });

    //videojs API绑定

  }

}

module.exports  = new Player();
