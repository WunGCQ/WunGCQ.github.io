var service = {};
var dataSet = {
  test:{
    Register:{
      checkInfo:{
        code: 200,
        result: 'pass'
      },
      finalCheck:{
        code: 200,
        result: 'success'
      },
      province:[
        {name:'省名1',value:1},
        {name:'省名2',value:2},
        {name:'省名3',value:3},
        {name:'省名4',value:4},
      ],
      city:[
        {name:'城市1',value:1},
        {name:'城市2',value:2},
        {name:'城市3',value:3},
        {name:'城市4',value:4},
      ],
      district:[
        {name:'区县1',value:1},
        {name:'区县2',value:2},
        {name:'区县3',value:3},
        {name:'区县4',value:4},
      ],
      org:[
        {name:'组织1',value:1},
        {name:'组织名称2',value:2},
        {name:'组织',value:3},
        {name:'大型养老院4',value:4},
      ]
    }
  }
};

service.mode = (function(str){
  var mode = 'debug';
  return (str == mode);
});

service.login = {

}


service.Register = {
  checkInfo(){
    var cb = null,
        err_cb = null;
    function connect(cb){
      $.get('/',null,'json')
       .done((data)=>{
         deal(data);
       });
    }
    function debug(){
      var data = {code:200 , list:dataSet.test.Register.checkInfo}
      setTimeout(()=>{
        deal.call(null,data);
      },50);
    }
    function deal(dataToDealWith){
      if(dataToDealWith.code != 200){
        err_cb && err_cb();
      }
      cb && cb(dataToDealWith.list);
    }
    function done(fun,ctx){
      cb = fun;
      cb.bind(ctx);
      if (service.mode('debug')) debug();
      else connect();
    }
    function err(fun,ctx){
      err_cb = fun;
      err_cb.bind(ctx);
    }
    return {
      done: done,
      error: err
    };
  },

  finalCheck(){
    var cb = null,
        err_cb = null;
    function connect(cb){
      $.get('/',null,'json')
       .done((data)=>{
         deal(data);
       });
    }
    function debug(){
      var data = dataSet.test.Register.finalCheck;
      setTimeout(()=>{
        deal.call(null,data);
      },50);
    }
    function deal(dataToDealWith){
      if(dataToDealWith.code != 200){
        err_cb && err_cb();
      }
      cb && cb(dataToDealWith.list);
    }
    function done(fun,ctx){
      cb = fun;
      cb.bind(ctx);
      if (service.mode('debug')) debug();
      else connect();
    }
    function err(fun,ctx){
      err_cb = fun;
      err_cb.bind(ctx);
    }
    return {
      done: done,
      error: err
    };
  },

  province(){
    var cb = null,
        err_cb = null;
    function connect(cb){
      $.get('/',null,'json')
       .done((data)=>{
         deal(data);
       });
    }
    function debug(){
      var data = {code:200 , list:dataSet.test.Register.province}
      setTimeout(()=>{
        deal.call(null,data);
      },50);
    }
    function deal(dataToDealWith){
      if(dataToDealWith.code != 200){
        err_cb && err_cb();
      }
      cb && cb(dataToDealWith.list);
    }
    function done(fun,ctx){
      cb = fun;
      cb.bind(ctx);
      if (service.mode('debug')) debug();
      else connect();
    }
    function err(fun,ctx){
      err_cb = fun;
      err_cb.bind(ctx);
    }
    return {
      done: done,
      error: err
    };
  },
  city(provinceData){
    var cb = null,
        err_cb = null;
    function connect(cb){
      $.get('/',null,'json')
       .done((data)=>{
         deal(data);
       });
    }
    function debug(){
      var data = {code:200 , list:dataSet.test.Register.city}
      setTimeout(()=>{
        deal.call(null,data);
      },50);
    }
    function deal(dataToDealWith){
      if(dataToDealWith.code != 200){
        err_cb && err_cb();
      }
      cb && cb(dataToDealWith.list);
    }
    function done(fun,ctx){
      cb = fun;
      cb.bind(ctx);
      if (service.mode('debug')) debug();
      else connect();
    }
    function err(fun,ctx){
      err_cb = fun;
      err_cb.bind(ctx);
    }
    return {
      done: done,
      error: err
    };
  },
  district(cityData){
    var cb = null,
        err_cb = null;
    function connect(cb){
      $.get('/',null,'json')
       .done((data)=>{
         deal(data);
       });
    }
    function debug(){
      var data = {code:200 , list:dataSet.test.Register.district}
      setTimeout(()=>{
        deal.call(null,data);
      },50);
    }
    function deal(dataToDealWith){
      if(dataToDealWith.code != 200){
        err_cb && err_cb();
      }
      cb && cb(dataToDealWith.list);
    }
    function done(fun,ctx){
      cb = fun;
      cb.bind(ctx);
      if (service.mode('debug')) debug();
      else connect();
    }
    function err(fun,ctx){
      err_cb = fun;
      err_cb.bind(ctx);
    }
    return {
      done: done,
      error: err
    };
  },
  org(districtData){
    var cb = null,
        err_cb = null;
    function connect(cb){
      $.get('/',null,'json')
       .done((data)=>{
         deal(data);
       });
    }
    function debug(){
      var data = {code:200 , list:dataSet.test.Register.org}
      setTimeout(()=>{
        deal.call(null,data);
      },50);
    }
    function deal(dataToDealWith){
      if(dataToDealWith.code != 200){
        err_cb && err_cb();
      }
      cb && cb(dataToDealWith.list);
    }
    function done(fun,ctx){
      cb = fun;
      cb.bind(ctx);
      if (service.mode('debug')) debug();
      else connect();
    }
    function err(fun,ctx){
      err_cb = fun;
      err_cb.bind(ctx);
    }
    return {
      done: done,
      error: err
    };
  },

}

module.exports = service;
