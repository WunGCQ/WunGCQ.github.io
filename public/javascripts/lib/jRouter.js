/**
 * Created by wungcq on 15/2/13.
 */

//功能概述
//基本实现后端服务器的路由功能
//同时轻度集成转场动画，包括加载模板文件的淡入处理，以及页面跳转时的消失动画。
//扫描所有a标签，检查其中href元素是否为不是以#锚点开头&&不是以javascript:开头的字符串，进行正则处理，
//并且支持Restful的URL路径解析
//同时支持页面路径自检,方便分享
//使用historyAPI做AJAX无刷新跳转
//依赖一个全局的实例currentPagejRouter来实现对当前页面的控制和路由的注册;

//          需要在窗口初始化完之后，页面跳转之前实例化一个currentPagejRouter
//模板可以存放在model中。
//模板由统一的标签 <div class="jRouter-template" data-template-model="modelname" data-template-path="url"></div>
//

//路由需要用户自己写实现再由function添加到currentPagejRouter中去；

(function(url) {

    //var document = window.document,navigator = window.navigator,location = window.location;

    var jRouter = function(url) {
            return new jRouter.fn.init(url);
        };
    window.localDomainName = window.location.href.split('://')[1].toString().split('/')[0];
    jRouter.fn = jRouter.prototype = {

        constructor:jRouter,
        init:function(url) {
            var _jRouter = this;
            this.url = url||window.location.href;

            this.domainName =  this.getdomainName();
            //this.localDomainName = window.location.href.split('://')[1].toString().split('/')[0];
            if(!this.isSupportsHistoryApi()) {//错误提示及处理
                alert( '本站基于HTML5构建，检测到您在使用'+this.getBrowserInfo()[0]+'' +
                '浏览器，版本号'+this.getBrowserInfo()[1]+'过低，' +
                '请升级您的浏览器(IE请升级到10或11)');
            }
            return this;
        },
        jRouter:"1.0",
        url:this.url,
        domainName:(function(){return this.getdomainName();}),
        length:0,
        size:function() {
            return this.length;
        },
        protocol:function() {
            return this.url.split('://')[0];
        },
        getdomainName:function() {
            return RegExp('http?://').test(this.url) ? this.url.split('://')[1].toString().split('/')[0] : window.localDomainName;
        },
        //添加历史
        addHistory:function(url){
            //console.log(this);
            //console.log('');
            var URL = url||this.url;
            history.pushState({},'',URL);
        },

        //解析a标签，如果a标签href是路径的话则替换为jRouter的函数
        parseAnchor : function() {
            var Anchors = document.getElementsByTagName('a');
            var temp;
            for(var i = 0; i<Anchors.length; i++) {
                temp = Anchors[i].getAttribute("href");
                if(temp!=null && temp.length>0) {
                    if(temp[0]!='#' && temp.indexOf('javascript:')==-1 && Anchors[i].getAttribute('target')!='_blank') {
                        var target = Anchors[i].getAttribute('target')=='_blank' ? 'new' : 'current';
                        var fun = jRouter.fn.getControllerByUrl(temp);
                        if(fun) {
                            Anchors[i].onclick = fun;
                            Anchors[i].removeAttribute('href');
                        }
                        else{
                            var str = "javascript:"+"jRouter('"+temp+"').redirect('"+target+"')";
                            Anchors[i].setAttribute("href",str);
                        }

                    }
                }
            }
        },
        parseTemplateElment : function(templatename) {
            //若templatename为空的话就扫描文档中所有的template
            if(templatename==null){
                var templateElements = document.getElementsByClassName('jRouter-template');
            }
            else{
                var templateElements = document.querySelectorAll('div [data-template-model="'+templatename+'"]');
            }
            if(templateElements.length>0){
                for(var i= 0; i< templateElements.length; i++){

                }
            }


        },
        //跳转
        redirect : function(para_mode,afterRedirect) {
            var mode = para_mode||'current';
            if(mode=='current') {
                this.jumpAnimation(function() {
                    //判断是否为外部链接
                    if(this.domainName==window.localDomainName){//本地链接
                        this.addHistory();
                        var currentPageRouter = this.currentPagejRouter();
                        this.initWindow(currentPageRouter.initDomFunction);
                        //this.clearDisappearClass();
                    }
                    else {
                        location.href = jRouter.url;
                    }

                });
            }else {
                this.jumpAnimation(function() {
                    window.open(this.url);
                });
            }
        },
        //跳转动画
        jumpAnimation : function(para_callback) {
            document.getElementsByClassName('full-screen')[0].classList.add('moving-disappear-animate');
            var callback = para_callback||function() {
                    return false;
                };
            var _jRouter = this;
            setTimeout(
                function(){
                    _jRouter.c = callback;
                    _jRouter.c(_jRouter.url);
                }

            , 500);
        },
        Controllers:{},
        ControllerList:[],
        Models:{},
        ModelTemplates:[]


    };



    //对HTML5的history API兼容性检查
    jRouter.fn.isSupportsHistoryApi = function() {
        return !!(window.history && history.pushState);
    };

    //检查浏览器版本
    jRouter.fn.getBrowserInfo = function() {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
            (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

        if (Sys.ie) return ['IE', Sys.ie];
        if (Sys.firefox) return['Firefox', Sys.firefox];
        if (Sys.chrome) return['Chrome', Sys.chrome];
        if (Sys.opera) return['Opera', Sys.opera];
        if (Sys.safari) return['Safari', Sys.safari];
        else return['IE', 11];
    };
    //初始化页面结构的外部函数的存储
    jRouter.fn.initDomFunction = function(){};

    //初始化页面
    jRouter.fn.initWindow = function(setNavfun){
        jRouter.fn.clearDisappearClass();
        if(typeof setNavfun=="function")setNavfun();
        jRouter.fn.addShowingClass();
    };

    //清除滑出动画类
    jRouter.fn.clearDisappearClass = function(){
        document.getElementsByClassName('full-screen')[0].className='full-screen';
    };

    //添加化入动画类
    jRouter.fn.addShowingClass = function(){
        document.getElementsByClassName('full-screen')[0].classList.add('moving-show-animate');
    };

    //设置初始化页面的函数
    jRouter.fn.setInitDomFunction = function(fun){
        this.initDomFunction = fun;
    };

    //获得当前页面的路由
    jRouter.currentPagejRouter = jRouter.fn.currentPagejRouter = function(){
        return window.currentPagejRouter;
    };

    //设定controller
    jRouter.setRouter = jRouter.fn.setRouter = function(name,type,url,fun){
        eval('jRouter.prototype.Controllers.'+type+name+'Controller ='+fun.toString()+';');
        eval('jRouter.prototype.ControllerList.push({url:'+url+',controllerFunction:jRouter.prototype.Controllers.'+type+name+'Controller})');
    };
    //选取controller
    jRouter.getControllerByUrl = jRouter.fn.getControllerByUrl = function(url){
        if(url==null||url=='') {
            console.error('url地址不能为空');
            return false;
        }
        else{
            for(var i =0;i<jRouter.prototype.ControllerList.length;i++){
                if(jRouter.prototype.ControllerList[i].url==url) {
                    return jRouter.prototype.ControllerList[i].controllerFunction;
                }
            }
        }
        return false;
    };

    //将URL切片去掉.html后缀后返回参数
    jRouter.getUrlParam =  jRouter.fn.getUrlParam = function(){
        var res = {};
        var protocolTester = new RegExp('http?://');
        res.protocol = protocolTester.exec(this.url)[0];
        res.domainName = protocolTester.test(this.url) ? this.url.split('://')[1].toString().split('/')[0] : window.localDomainName;
        res.params = this.url.split('.html')[0].split('/');

        return res;
    };

    jRouter.loadTemplate = jRouter.fn.loadTemplate = function(){
        var path = 'user.html';
        ajax.send({
            url: path,
            data: null,
            type: "GET",
            dataType: "html",
            success: function(Template){
                jRouter.prototype.ModelTemplates.push(Template);
            }
        });
    };

    jRouter.loadModelData = jRouter.fn.loadModelData = function(){
        var path = '../JSON/get_user.json';
        ajax.send({
            url: path,
            data: null,
            type: "GET",
            dataType: "json",
            success: function(data){
                if(data.status==1){
                    $('#banner').html( nanoRenderer(jRouter.prototype.ModelTemplates[0],data));
                }
            }
        });
    };

    //载入model
    jRouter.Model = jRouter.prototype.Model = function(name,fun){
        eval('jRouter.prototype.Models.'+name+' = '+fun.toString()+';');
    };
    jRouter.Models = jRouter.prototype.Models;




    //原型
    jRouter.fn.init.prototype = jRouter.fn;
    //实例化一个
    window.jRouter = jRouter;



})(window.location.href);

/* Nano Templates - https://github.com/trix/nano */
function nanoRenderer(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
        var keys = key.split("."), v = data[keys.shift()];
        for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
        return (typeof v !== "undefined" && v !== null) ? v : "";
    });
};
