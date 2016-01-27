var is = require('../common').is;
var user = require('../service/user');

class major_modal_generator {
  constructor() {
    this.state = '';

    this.dom = null;
    this.modol_window = null;

    var template = require('../templates/major_school.erb');
    this.renderer = _.template(template)
  }
  //接收数据并渲染
  render(data){
    var html = this.renderer(data);
    $('body').append(html);
    this.show();
    //free
    html = null;
  }
  //显示
  show(){
    this.dom = $('#m__major_modal_mask');
    this.dom.addClass('show');
    this.modal_window = $('#m__modal_window');
    this.bind()
  }

  //隐藏
  hide(){
    var me = this;
    me.dom.addClass('hide').removeClass('show');
    var s = setTimeout(()=>{
      me.dom.removeClass('hide');
      me.remove();
      clearTimeout(s)
    },350)
  }
  //移除
  remove(){
    this.dom.remove()
    this.dom = null;
  }

  //事件绑定
  bind(){
    var me  = this;

    //点击外部消失
    this.dom.on('click',(ev)=>{
      if(ev.target == me.dom.get(0)){
        me.hide()
      }
    })

  }
}

module.exports = major_modal_generator;
