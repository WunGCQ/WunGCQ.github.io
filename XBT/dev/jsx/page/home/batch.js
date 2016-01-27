
var left_filter = require('../../utils/left_filter');
var template = require('../../templates/batch.html');
var para = require('../../common').para;
var user = require('../../service/user');
var province_names = require('../../common').province_names;
var header = new (require('../../utils/my_header'))();

class controller {
  constructor() {
    var me  = this;
    this.renderer = _.template(template);
    this.left_filter = new left_filter();
    this.left_filter.onChange = (function(){
      me.init();
    }).bind(this);
    this.school_id = para('school_id');
    this.data = {};
    this.init();
  }

  init(){
    var data = {
      province: province_names[this.left_filter.province],
    };
    var me = this;
    $.get('http://api.learningrabbit.qinixapp.com/v1/batch',data,'json')
    .done((res)=>{
      if(res.code == 0){
        me.data = res.payload;
        $('.m_h2_user_province').html(`（ ${data.province} ）`);
        me.render();
      }
    })
  }

  render(){
    $('#tbody_1').html(this.renderer({data: this.data.science_batch}));
    $('#tbody_2').html(this.renderer({data: this.data.arts_batch}));
  }
}



module.exports = controller;
