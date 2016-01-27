/**
 * Created by wungcq on 15/12/20.
 */
var province_names = require('../../common').province_names;
var para = require('../../common').para;
var USER = require('../../service/user');
var template  = require('../../templates/major.erb');
var left_filter = require('../../utils/left_filter');
var header = new (require('../../utils/my_header'))();
var major_modal_generator = require('../../utils/major_school_modal');

  class controller {

    constructor(){
      this.table_head = $('#major_thead');
      this.selected_tr = $('#selected_tr');
      this.majors_wrapper = $('#majors_wrapper');
      this.render = _.template(template);
      this.major_modal = new major_modal_generator();
      this.level = 1;
      this.level_1_data = [
        {"icon": "&#xe65f;", "name": "理学"},
        {"icon": "&#xe660;", "name": "艺术学"},
        {"icon": "&#xe65b;", "name": "经济学"},
        {"icon": "&#xe65e;", "name": "管理学"},
        {"icon": "&#xe656;", "name": "法学"},
        {"icon": "&#xe657;", "name": "文学"},
        {"icon": "&#xe65c;", "name": "教育学"},
        {"icon": "&#xe661;", "name": "工学"},
        {"icon": "&#xe65d;", "name": "哲学"},
        {"icon": "&#xe65a;", "name": "历史学"},
        {"icon": "&#xe654;", "name": "医学"},
        {"icon": "&#xe655;", "name": "军事学"}
      ];

      this.level_2_data = [];
      this.level_3_data = [];
      //选择的index
      this.level_1_index = 0;
      this.level_2_index = 0;
      Object.prototype.freeze && Object.freeze(this.level_1_data);
      this.left_filter  = new left_filter();
      this.init();
      this.resumeFromUrl();
    }

    resumeFromUrl(){
        var me = this;
        //
        var arr = _.map(this.level_1_data,(item)=>{
          var n = item.name;
          return `<a target="_blank" href="/XBT/html/layout/select_major.html?level1=${n}">${n}</a>`;
        }).join('\n');
        console.log(arr);
        var name = para('level1');
        if(name){
          var index = this.level_1_data.findIndex((item)=>{
            return item.name == name;
          });
          
          me.jump_level_2.call(me, index);
        }
    }

    init() {
      var me = this;
      $('th', this.table_head).eq(0).on('click', me.jump_level_1.bind(me));

      this.left_filter.onChange = (function(){
        if(me.level == 3){
          me.get_level_3_data(me.level_2_index)
            .done(me.render_level_3);
        }
      }).bind(this);
      me.jump_level_1();

    }

    getRightSequence() {
      var arr = this.level_1_data.sort((pre, next) => {
        return (pre.name < next.name);
      });
      console.log(JSON.stringify(arr));
    }


    jump_level_1 () {
      var me = this;

      $('th', this.table_head).removeClass('active');
      $('th.level_1').addClass('active');

      me.level = 1;

      //填充已选择
      $('td .m_major',this.selected_tr).remove();


      this.render_level_1();
    }

    jump_level_2 (index) {
      var me = this;

      $('th', this.table_head).removeClass('active')
      $('td.level_2').addClass('active')

      //存储选择结果
      if(index) this.level_1_index = index;


      //填充已选择
      $('td .m_major',this.selected_tr).remove();
      $('td.level_1').append(me.render({majors:new Array(me.level_1_data[me.level_1_index])}));


      me.get_level_2_data(me.level_1_index)
        .done(me.render_level_2);
    }

    jump_level_3 (index) {
      var me = this;

      $('th', this.table_head).removeClass('active')
      $('th.level_3').addClass('active')

      //存储选择结果
      if(index) me.level_2_index = index;
      //填充已选择
      $('td .m_major',this.selected_tr).remove();
      $('td.level_1').append(me.render({majors:new Array(me.level_1_data[me.level_1_index])}));
      $('td.level_2').append(me.render({majors:new Array(me.level_2_data[me.level_2_index])}));

      me.get_level_3_data(me.level_2_index)
        .done(me.render_level_3);
    }



    render_level_1 () {
      var me = this;

      var html = this.render({majors: this.level_1_data});
      this.majors_wrapper.html(html);

      //bind => jump_to_level_2
      $.each($('.m_major', this.majors_wrapper), (index, node)=> {
        //绑定事件
        $(node).on('click', me.jump_level_2.bind(me, index));
      })
    }

    render_level_2 () {
      var me = this;
      var html = '';
      if(!this.level_2_data || this.level_2_data.length == 0){
        html = '<span class="m_empty">没有搜索结果,请切换搜索选项再试~~</span>'
      }else{
        html = this.render({majors: this.level_2_data});
      }

      this.majors_wrapper.html(html);
      //bind
      $.each($('.m_major', this.majors_wrapper), (index, node)=> {
        //绑定事件

        $(node).on('click', me.jump_level_3.bind(me, index));
      })
    }

    render_level_3 () {
      var me = this;
      var html = '';
      if(!this.level_3_data || this.level_3_data.length == 0){
        html = '<span class="m_empty">没有搜索结果,请切换搜索选项再试~~</span>'
      }else{
        html = this.render({majors: this.level_3_data});
      }

      this.majors_wrapper.html(html);
      //bind
      $.each($('.m_major', this.majors_wrapper), (index, node)=> {
        //绑定事件
        $(node).on('click', me.set_major.bind(me, index, me.level_3_data[index]));
      })
    }

    get_level_2_data (index) {
      var me = this;
      var cb = null;
      var level_1 = me.level_1_data[index].name;

      $.get('http://api.learningrabbit.qinixapp.com/v1/majors/list_level2?level1=' + level_1, null, 'json').done(function (res) {
        if (res.code == 0) {
          me.level_2_data = _.map(res.payload, (major) => {
            return {name: major};
          });
        }
        cb && cb.call(me);
      });

      return {
        done (callback) {
          cb = callback;
        }
      }
    }

    get_level_3_data (index) {
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
          me.level_3_data = _.map(res.payload.majors, (major) => {
            return {
              id : major.id,
              name : major.name
            };
          });
        }
        cb && cb.call(me);
      });

      return {
        done (callback) {
          cb = callback;
        }
      }
    }

    set_major(index,major_info) {
      var major = this.level_3_data[index];
      $('td.level_3 .m_major').remove();
      $('td.level_3').append(this.render({majors:new Array(this.level_3_data[index])}));
      this.get_major_info(major_info.id);
    }

    render_major_modal(data){
      this.major_modal.render(data);
    }

    get_major_info(major_id){
      var me = this;
      var data = {
          user_province: province_names[USER.user_province],
          user_subject: USER.user_subject,
          score: this.left_filter.score
      };
      $.get(`http://api.learningrabbit.qinixapp.com/v1/majors/${major_id}`,data,'json')
      .done((res)=>{
        if (res.code == 0) {
          var data = res.payload;
          var list = [];
          var map = {};
          _.each(res.payload.universities, (uni)=>{
            if(!map[uni.name]){
              list.push(uni);
              map[uni.name] = true;
            }
          });

          data.major = res.payload.name;
          data.universities = list;
          me.render_major_modal(data);
        }
      })
    }


  };

module.exports = controller;
