/**
 * Created by wungcq on 15/2/15.
 */

var UserModel = function(data){

    var UserObj = this;//创建this的副本方便构造函数等函数内部调用
    UserObj.name = '';
    UserObj.data = data||{};


    //设置原型
    this.prototype = {

        userBar : document.getElementById('user-bar'),
        //constructor:User,
        //初始化用户
        init :function(){
            UserObj.username = UserObj.data.username||{};
            UserObj.is_login = cookieMethods.getCookie('is_login')||false;
            if(UserObj.is_login==false){
                UserObj.prototype.setUserBarUnLog();
            }else {
                UserObj.prototype.setUserBarLog();
            }
        },
        //设为已登陆
        setUserBarLog :function(){
            UserObj.prototype.userBar.classList.remove('unlog');
            UserObj.prototype.userBar.classList.add('log');
        },
        //设为未登录
        setUserBarUnLog : function(){
            UserObj.prototype.userBar.classList.remove('log');
            UserObj.prototype.userBar.classList.add('unlog');
        },
        //存放用户信息的模板
        infoTemplate : '<input type="hidden" name="user-info" data-id="{user.id}" data-usernmae="{user.username}" data-nickname="{user.nickname}" data-student_id="{user.student_id}" data-school="{user.school}" data-college="{user.college}" data-email="{user.email}"/>',

        //
        storeUserInfo : function(userData){
            if(userData!=null){
                UserObj.userInfo = userData;
            }
        }

    };
    //用户登陆
    UserObj.login = function(username,password){
        var is_login = cookieMethods.getCookie('is_login');
        if(is_login!=null){
            var username = cookieMethods.getCookie('username');
            //alert(username+' 你好!');
        }
        ajax.send({
            url: '../JSON/login.json',
            data: {username:username,password:password},
            type: "POST",
            dataType: "json",
            success: function(responseData){
                if(responseData.status==1){
                    var user = responseData.user;
                    console.log(responseData);
                    cookieMethods.setCookie('is_login','true');
                    cookieMethods.setCookie('username',user.username);
                    UserObj.prototype.setUserBarLog();
                    //在代码中添加用户名
                    document.getElementById('user-nav').getElementsByClassName('user-name')[0].innerHTML = user.username;
                    //添加用户信息模块
                    var text = nanoRenderer(UserObj.prototype.infoTemplate,responseData);
                    document.getElementById('nav').innerHTML+=text;
                    //外部的回调函数
                    UserObj.prototype.storeUserInfo(responseData.user);

                }
            }
        });
    };


    UserObj.prototype.init();

    //UserObj.template = '<div>';
    return this;
};

jRouter.Model('User', UserModel);


