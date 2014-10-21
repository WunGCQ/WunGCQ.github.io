/**
 * Created by WunG on 2014/10/13.
 */
function load_magic(){
    w = $(window).outerWidth();
    h = $(window).outerHeight();

    $(".fullscreen").css({height:h});
    var magic_center_x = Math.floor((w-magic_r)/2);
    var magic_center_y = Math.floor((h-magic_r)/2);

    $("#icon-me").css({left: Math.floor((w-headicon_r)/2),top: Math.floor((h-headicon_r)/2)});
    $("#header-circle").css({left:  magic_center_x,top:  magic_center_y});
    $("#briefintro-info").css({left:magic_center_x+330,top:magic_center_y-50});
    $("#skills-info").css({left:magic_center_x+431,top:magic_center_y+119});
    $("#projects-info").css({left:magic_center_x+380,top:magic_center_y+340});
    $("#blog-info").css({left:magic_center_x-155,top:magic_center_y+340});
    $("#music-info").css({left:magic_center_x-220,top:magic_center_y+65});
    $("#mytitle-chn").css({left:Math.floor((w-$("#mytitle-chn").width())/2),top:(magic_center_y-100)});
    $("#mytitle").css({left:Math.floor((w-$("#mytitle").width())/2+30),top:(magic_center_y-160)});

    init_unit1();

}
function load_animation(){
    setTimeout(function(){
        $("#icon-me").attr("class","head-showed");
    },0);
    setTimeout(function(){
        $("#magic").attr("class","circle-showed");
    },500);
    setTimeout(function(){
        $("#inner-circle").attr("class","circle-showed");
    },1000);
    setTimeout(function(){
        $("#icon-brief-intro").attr("class","icon-intro icon-showed");
    },1550);
    setTimeout(function(){
        $("#icon-skills").attr("class","icon-intro icon-showed");
    },1700);
    setTimeout(function(){
        $("#icon-projects").attr("class","icon-intro icon-showed");
    },1850);
    setTimeout(function(){
        $("#icon-blog").attr("class","icon-intro icon-showed");
    },2000);
    setTimeout(function(){
        $("#icon-music").attr("class","icon-intro icon-showed");
    },2150);
    setTimeout(function(){
        $("#outer-circle").attr("class","outer-circle-showed");
    },2300);
    setTimeout(function(){
        $("#outer-circle").attr("class","rotating");
        $("#inner-circle").attr("class","reverse-rotating");
    },2800);
}
function bind_intro_listener(){
    $("#icon-brief-intro").hover(function(){
        $("#briefintro-info").fadeIn(500);
    });
    $("#icon-brief-intro").mouseout(function(){
        $("#briefintro-info").fadeOut(500);
    });
    $("#icon-brief-intro").click(function(){
        $.scrollTo('#briefintro',300);
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-1").attr("class","active nav-bar");
    });


    $("#icon-skills").hover(function(){
        $("#skills-info").fadeIn(500);
    });
    $("#icon-skills").click(function(){
        $.scrollTo('#skills',500);
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-2").attr("class","active nav-bar");
    });
    $("#icon-skills").mouseout(function(){
        $("#skills-info").fadeOut(500);
    });


    $("#icon-projects").hover(function(){
        $("#projects-info").fadeIn(500);
    });
    $("#icon-projects").click(function(){
        $.scrollTo('#projects',500);
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-3").attr("class","active nav-bar");
    });
    $("#icon-projects").mouseout(function(){
        $("#projects-info").fadeOut(500);
    });


    $("#icon-blog").click(function(){
        $.scrollTo('#blog',500);
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-4").attr("class","active nav-bar");
    });
    $("#icon-blog").hover(function(){
        $("#blog-info").fadeIn(500);
    });
    $("#icon-blog").mouseout(function(){
        $("#blog-info").fadeOut(500);
    });



    $("#icon-music").click(function(){
        $.scrollTo('#music',500);
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-5").attr("class","active nav-bar");
    });
    $("#icon-music").hover(function(){
        $("#music-info").fadeIn(500);
    });
    $("#icon-music").mouseout(function(){
        $("#music-info").fadeOut(500);
    });


//        头像点击绑定
    $("#inner-circle").click(function(){
        if($(".my-info").css("display")=="none"){
            $(".my-info").fadeIn(500);
        }
        else{
            $(".my-info").fadeOut(500);
        }
    });

//        导航栏滚动绑定
    $("#nav-to-0").click(function () {
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-0").attr("class","active nav-bar");
        $.scrollTo('#header',500);
    });

    $("#nav-to-1").click(function () {
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-1").attr("class","active nav-bar");
        $.scrollTo('#briefintro',500);
    });

    $("#nav-to-2").click(function () {
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-2").attr("class","active nav-bar");
        $.scrollTo('#skills',500);
    });

    $("#nav-to-3").click(function () {
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-3").attr("class","active nav-bar");
        $.scrollTo('#projects',500);
    });
    $("#nav-to-4").click(function () {
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-4").attr("class","active nav-bar");
        $.scrollTo('#blog',500);
    });
    $("#nav-to-5").click(function () {
        $(".nav-bar").attr("class","nav-bar");
        $("#nav-to-5").attr("class","active nav-bar");
        $.scrollTo('#music',500);
    });

}
function check_stay_in_div(dir){
    var div_arr=["#header","#briefintro","#skills","#projects","#blog","#music"];
    var top= $(window).scrollTop();
    var h = $(window).outerHeight();
    var now_active=Math.floor(top/h);
    if(now_active==active){

    }else{
        $(".nav-bar").attr("class","nav-bar");
        var id_num="nav-to-"+now_active.toString();
        $("#"+id_num).attr("class","nav-bar active");
        active=now_active;

    }
    if(dir==0){

    }
    else if(dir>0){
        if(active==0){

        }
        else{
            active--;
            var id_num="nav-to-"+active.toString();
            var div_id="#"+div_arr[active];
            $.scrollTo(div_id,500);
            $(".nav-bar").attr("class","nav-bar");
            $("#"+id_num).attr("class","nav-bar active");
        }
    }
    else{
        if(active==5){

        }
        else{
            active++;
            var id_num="nav-to-"+active.toString();
            var div_id=div_arr[active];
            $.scrollTo(div_id,500);
            $(".nav-bar").attr("class","nav-bar");
            $("#"+id_num).attr("class","nav-bar active");
        }
    }
}
function bind_wheel_action(){
    $(window).on('mousewheel', function(event,delta) {
        //console.log(event.deltaX, event.deltaY, event.deltaFactor);
        var dir=delta>0?1:-1;//1向上-1乡下

        check_stay_in_div(dir);
    });
    $(window).mousewheel(function(){

    });
    //window.onmousewheel=document.onmousewheel=check_stay_in_div();//IE/Opera/Chrome
}
function init_unit1(){
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    $(".mid-title-1").css({left:Math.floor((w-$(".mid-title-1").outerWidth())/2)});
    $(".content-intro-1").css({left:Math.floor((w-886)/2)});
}