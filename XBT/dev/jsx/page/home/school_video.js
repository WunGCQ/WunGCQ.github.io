var user = require('../../service/user');
var header = new (require('../../utils/my_header'))();
var left_filter = require('../../utils/left_filter');
var template = require('../../templates/video_play.erb');
var comment_template =  require('../../templates/comment.erb');
var para = require('../../common').para;
var province_names = require('../../common').province_names;

//不好意思改的时候一着急,就又顺手把下划线风格写成驼峰的了...凑合看吧...

class controller {
  constructor() {
    var me = this;

    // show left filter
    this.left_filter = new left_filter({is_hide:true});

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

  init() {

    var me = this;
    if(this.school_id){
      me.getSchoolData();
    }else{
      me.renderVideo();
    }

  }


  getSchoolData() {
    var me = this;
    var data = {
      user_province: province_names[user.user_province],
      user_subject: user.user_subject,
    };
    $.get(`http://api.learningrabbit.qinixapp.com/v1/universities/${me.school_id}`, data, 'json')
      .done((res)=> {
        if (res.code == 0) {
          me.school_data = res.payload;
          me.renderVideo();
        } else {
          alert('网络异常,请稍后刷新重试!');
        }
      })
  }


  renderVideo() {
    var me = this;
    var data = {
      school: me.school_data,
      poster: me.poster,
      video_id: me.video_id,
      title: me.title
    }
    var html = this.video_renderer(data);

    $('.g__filter-result-wrapper', this.container).remove();
    $(html).insertAfter('#g_left_filter');

    this.comment_dom = $('#comment_wrapper');

    //btn
    $('#comment_btn').click(me.comment.bind(me))

    //load comments
    me.getComments();
  }

  comment() {
    var me = this;
    var content = $('#comment_input').val();
    var data = {
      content: content
    };

    $.ajax({
      type: 'POST',
      url: `http://api.learningrabbit.qinixapp.com/v1/videos/${me.video_id}/comments`,
      data: data,
      dataType: 'json',
      beforeSend: (xhr)=> {
        xhr.setRequestHeader('Authorization', user.token);
      }
    }).done((res)=> {
      if (res.code == 0) {
        var data = res.payload;
        if (user.token) {
          me.getComments();
        }
      } else {

      }
    })
  }

  getComments() {
    var me = this;
    $.ajax({
      method: 'GET',
      url: `http://api.learningrabbit.qinixapp.com/v1/videos/${me.video_id}/comments`,
      dataType: 'json',
      beforeSend: (xhr)=> {
        xhr.setRequestHeader('Authorization', user.token);
      }
    }).done((res)=> {
      if (res.code == 0) {
        var data = res.payload;
        //存放数据
        me.comments = {comments:data.comments.reverse()};
        // data = data.revert();
        me.renderComments(data);
        me.bindVote();
      } else {

      }
    })
  }

  upVote(index,id){
    var me = this;
    $.ajax({
      type: 'POST',
      url: `http://api.learningrabbit.qinixapp.com/v1/videos/${me.video_id}/comments/${id}/upvote`,
      dataType: 'json',
      beforeSend: (xhr)=> {
        xhr.setRequestHeader('Authorization', user.token);
      }
    }).done((res)=>{
      if(res.code == 0){
        console.log(res);
        me.renderUpVote(index,id);
      }
    })
  }



  downVote(index,id){
    var me = this;
    $.ajax({
      type: 'POST',
      url: `http://api.learningrabbit.qinixapp.com/v1/videos/${me.video_id}/comments/${id}/downvote`,
      dataType: 'json',
      beforeSend: (xhr)=> {
        xhr.setRequestHeader('Authorization', user.token);
      }
    }).done((res)=>{
      if(res.code == 0){
        console.log(res);
        me.renderDownVote(index,id);

      }
    })
  }

  renderUpVote(index, id,isDownVote){
    var me = this;
    var c = me.comments.comments[index];
    if(isDownVote){
      //反对
      if(c.user_upvoted){ // 赞同
        c.user_upvoted = false;
        c.upvote --;
        //取消赞
        $(`#upvote_${id}`)
        .toggleClass('upvote-false')
        .toggleClass('upvote-true')
        .find('span')
        .html(c.upvote)
      }else{
        //原本就不赞则无任何改变
      }
    }else{
      c.user_upvoted = !c.user_upvoted;
      c.upvote += c.user_upvoted ? 1 : -1;

      $(`#upvote_${id}`)
      .toggleClass('upvote-false')
      .toggleClass('upvote-true')
      .find('span')
      .html(c.upvote)
    }

    if(!isDownVote){
      me.renderDownVote(index,id,true);
    }

  }

  renderDownVote(index,id,isUpVote){
    var me = this;
    var c = me.comments.comments[index];
    if(isUpVote){
      //赞同
      if(c.user_downvoted){ // 反对
        c.user_downvoted = false;
        c.downvote --;
        //取消反对
        $(`#downvote_${id}`)
        .toggleClass('downvote-false')
        .toggleClass('downvote-true')
        .find('span')
        .html(c.downvote)
      }else{
        //原本就不反对则无任何改变
      }
    }else{
      c.user_downvoted = !c.user_downvoted;
      c.downvote += c.user_downvoted ? 1 : -1;

      $(`#downvote_${id}`)
      .toggleClass('downvote-false')
      .toggleClass('downvote-true')
      .find('span')
      .html(c.downvote)
    }


    if(!isUpVote){
      me.renderUpVote(index,id,true);
    }
  }

  renderComments(data){
    var html =  this.comment_renderer(data);
    $('#comment_wrapper').html(html);
  }

  bind() {
    var me = this;
    $.each($('.m_college', this.dom), (index, college)=> {
      $(college).click(me.searchVideoByCollege.bind(me, me.data.colleges[index]))
    })
  }
  bindVote(){
    var me = this;
    $.each($('.m-comment .upvote'),(i,elem)=>{
      $(elem).off('click').on('click',me.upVote.bind(me,i,me.comments.comments[i].id));
    })
    $.each($('.m-comment .downvote'),(i,elem)=>{
      $(elem).off('click').on('click',me.downVote.bind(me,i,me.comments.comments[i].id));
    })
  }
}


module.exports = controller;
