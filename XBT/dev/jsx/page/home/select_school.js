/**
 * Created by wungcq on 15/12/20.
 */
var province_names = require('../../common').province_names;
var province_names_reverse = require('../../common').province_names_reverse;
var USER = require('../../service/user');

var template = require('../../templates/school_filter_res.html');
var left_filter = require('../../utils/left_filter');
var header = new (require('../../utils/my_header'))();
var para = require('../../common').para;
var top_filter_res_template = require('../../templates/top_filter_res.erb');


  class top_filter{
    constructor(){
      this.init();
      this.onChange_callback = null;
    }

    init(){

      //data set
      this.tags = {
        province: _.map(province_names,(p)=>{
          return p;
        }),
        category: ["综合类", "理工类", "财经类", "军事类", "林业类", "民族类", "农林类", "商学院", "师范类", "医药类", "艺术类", "语文类", "语言类", "政法类"],
        tags: ['211','985','研究生院','国防生','卓越计划']
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
      this.res_renderer =  _.template(top_filter_res_template);
      //selected tag
      this.selected = {
        province: null,
        category: null,
        tags: [],
      }

      //bind select
      this.bind();

    }

    resumeFromUrl(){
      var me = this;
      var province = para('province'),
          category = para('category'),
          tags = para('tag');

      if(province){
        var province_index = me.tags.province.indexOf(province);
        var node = $('.tag',this.province_index).eq(province_index);
        me.set_selected_tag.call(me,node,'province',province_index);
        // open tag wrapper
        this.province_btn.click(me.switch_tag_wrapper.bind(me,'province'));
        me.switch_tag_wrapper.call(me,'province');
      }
      if(category){
        var category_index = me.tags.category.indexOf(category);
        var node = $('.tag',this.category_wrapper).eq(category_index);
        me.set_selected_tag.call(me,node,'category',category_index);
        // open tag wrapper
        me.switch_tag_wrapper.call(me,'category');
      }
      if(tags){
        var tags_index = me.tags.tags.indexOf(tags);
        var node = $('.tag',this.tags_wrapper).eq(tags_index);
        me.set_selected_tag.call(me,node,'tags',tags_index);
        // open tag wrapper
        me.switch_tag_wrapper.call(me,'tags');
      }
    }


    bind(){
      var me = this;
      //switch
      this.province_btn.click(me.switch_tag_wrapper.bind(me,'province'));
      this.category_btn.click(me.switch_tag_wrapper.bind(me,'category'));
      this.tags_btn.click(me.switch_tag_wrapper.bind(me,'tags'));
      //
      this.bind_change_tag();
    }

    onChange(func){
      this.onChange_callback = func;
    }

    //trigger change event
    emmitChange(){
      this.render_selected();
      console.log(this.selected);
      this.onChange_callback(this.selected);

    }


    bind_change_tag(){
      var me = this;
      $.each($('.tag',this.province_wrapper),(index, node)=>{
        $(node).click(me.set_selected_tag.bind(me,node,'province',index))
      })

      $.each($('.tag',this.category_wrapper),(index, node)=>{
        $(node).click(me.set_selected_tag.bind(me,node,'category',index))
      })

      $.each($('.tag',this.tags_wrapper),(index, node)=>{
        $(node).click(me.set_selected_tag.bind(me,node,'tags',index))
      })

    }

    //set the tag or remove tag
    set_selected_tag(node, wrapper_name, tag_index, isNodeActive){
      var $node = $(node);
      var isActive = $node.hasClass('active');
      var data_arr = this.tags[wrapper_name];
      var tag = data_arr[tag_index];
      //
      if(wrapper_name == 'tags'){
        $node.toggleClass('active');
        //多选
        var selected_tags_index = this.selected.tags.indexOf(tag);
        if( selected_tags_index > -1){
          //已选且取消
          this.selected.tags.splice(selected_tags_index,selected_tags_index+1);
        } else {
          //未选且要选
          this.selected.tags.push(tag);
        }
      }else{
        //单选
        // active -> null
        // not active -> set
        $('.tag', this[`${wrapper_name}_wrapper`]).removeClass('active');
        !isActive && $node.addClass('active');
        this.selected[wrapper_name] =  isActive ? null : tag;
      }

      //emmit change event
      this.emmitChange();
    }

    get_selected_tag(){
      return this.selected;
    }

    render_selected(){
      var tags = [];
      _.each(this.selected,(text,wrapper)=>{
        if(text && text.length > 0) {
          if(wrapper == 'tags'){
            _.each(text,(tag)=>{
              tags.push({
                wrapper: wrapper,
                text: tag,
              });
            })
          }else{
            tags.push({
              wrapper: wrapper,
              text: text,
            });
          }
        }
      });
      this.tags_res_wrapper.html(this.res_renderer({tags:tags}));
      this.bind_selected();
    }

    bind_selected(){
      var me = this;
      $.each($('.tag i',this.tags_res_wrapper),(index,node)=>{
        $(node).click(me.remove_top_filter_tag_by_res.bind(me))
      })
    }

    remove_top_filter_tag_by_res(ev){
      var node = $(ev.target);
      var tag_text = node.attr('data-tag'),
          wrapper_name = node.attr('data-wrapper');

      var index = this.tags[wrapper_name].indexOf(tag_text);
      var top_tag_node = $('.tag', this[`${wrapper_name}_wrapper`]).eq(index);
      top_tag_node.trigger('click');
    }

    switch_tag_wrapper(name){
      var me = this;
      //name :province,category,tags
      //btn toggleClass
      $('.m-title', me.dom).removeClass('active');
      me[`${name}_btn`].addClass('active');
      //wrapper add hide
      $('.m-tag-wrapper', me.dom).addClass('hide');
      me[`${name}_wrapper`].removeClass('hide');
    }
  }


  class controller {

    constructor(){
      this.page = 1;
      this.page_num = 1;
      this.state = {};
      this.wrapper = $('#m_schools_wrapper');
      this.renderer = _.template(template);

      this.left_filter  = new left_filter();
      this.top_filter= new top_filter();
      this.init();
    }

    init() {
      var me = this;
      me.bind();
      me.get_data().done(me.render_data.bind(me));
      this.left_filter.onChange = (function(){
        me.get_data().done(me.render_data.bind(me));
      }).bind(this);

    }

    bind(){
      //bind top_filter;
      var me = this;
      me.top_filter.onChange(()=>{
        me.get_data().done(me.render_data.bind(me));
      })
      me.top_filter.resumeFromUrl();
    }

    render_data(){
      var html = this.renderer({data:this.state.universities});
      this.wrapper.html(html);
    }

    render_top_filter_res(){
      var tmp = '<em class="tag"><span><%=tag%></span><i></i></em>';

      var html = _.map(province_names,(p)=>{
        console.log(p);
        return renderer({tag:p});
      }).join('\n');
      $('#province_tag_wrapper').html(html);
      console.log(html);
    }

    get_data(){
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


      if(top.province) data.province = top.province;
      if(top.category) data.category = top.category;
      if(top.tags && top.tags.length > 0) data.tags = top.tags.join(',');

      //window.location.search param
      if(school_name) data.name = school_name;


      $.get('http://api.learningrabbit.qinixapp.com/v1/universities',data,'json').done((res)=>{
          if(res.code == 0){
              me.state.universities = res.payload.universities;
              cb && cb.call(me);
          }
      });

      return {
        done: (callback)=>{
          cb = callback
        }
      }
    }

  };

module.exports = controller;
