
function setSealPosition(){
    var windowHeight=document.documentElement.clientHeight;
    var HeaderContent=document.getElementById('header-content');
    var headerContentHeight=HeaderContent.offsetHeight;
    var headerPadding=Math.floor((windowHeight-headerContentHeight)*0.5);
    var Header=document.getElementById("header");
    Header.style.paddingTop=headerPadding+"px";
    Header.style.height=(windowHeight-headerPadding)+"px";
}
function setHeaderSize() {
    var windowHeight=document.documentElement.clientHeight;
    var Header=document.getElementById("header");
    Header.style.height=windowHeight+"px";
}
function setNavPosition() {
    var windowHeight=document.documentElement.clientHeight;
    var Nav=document.getElementsByClassName("nav")[0];
    Nav.style.top=Math.floor((windowHeight-350)*0.382)+"px";
}

function setFullSCreenSize(){
    var windowHeight=document.documentElement.clientHeight;
    $(".full-screen").css("height",windowHeight);
}

function setPositionAndSize(){
    setFullSCreenSize();
    setHeaderSize();
    setSealPosition();
    setNavPosition();
    $(".nav li").attr("onclick","NavListener(this)");
    $("#my-info-trigger").attr("onmouseover","showMyInfo()");
}
function NavListener(LiClicked){
    var LiClicked=$(LiClicked);
    var LiArr=$(".nav li");
    var LiNum=LiArr.index(LiClicked);
    var divArr=["#header","#me","#skills","#exp","#blog","#hobby","#footer"];
//    $(".nav li").attr("class","");
//    LiClicked.addClass("nav-active");
    $.scrollTo(divArr[LiNum],500);
}
function showMyInfo(){
    var MyInfo=$(document.getElementById("my-info"));
        MyInfo.fadeIn(800);

}
function hideMyInfo(){
    var MyInfo=$(document.getElementById("my-info"));
    MyInfo.css({"display":"none"});
}
function showContent(DivNumber){

}

function blockHoverListener() {
    var top= $(window).scrollTop();
    var h = $(window).outerHeight();
    var nowActive=parseInt(top/h+0.5);
    var LiArr=$(".nav li");
    LiArr.attr("class","");
    var JSNav=document.getElementsByClassName('nav')[0];
    var JSLiArr=JSNav.getElementsByTagName('li');
    JSLiArr[nowActive].className="nav-active";
    if(nowActive==0){
        $(".hr").css({"display":"none"});
        $(".red-ring-bg").css({"display":"none"});
        hideMyInfo();

    }
    else if(nowActive==1){
        var  StayingBlock=FullScreenArr[nowActive-1];
        var NextBlock=FullScreenArr[nowActive];
        var ThisHr=$(StayingBlock.getElementsByClassName("hr")[0]);
        var ThisRedRing=$(StayingBlock.getElementsByClassName("red-ring-bg")[0]);
        var ThisContent=$(StayingBlock.getElementsByClassName("content")[0]);
        ThisHr.fadeIn(500);
        setTimeout(function(){
            ThisRedRing.css({"display":"block"});
        },700);
        setTimeout(function(){
            showMyInfo();
        },700);
        setTimeout(function(){
            ThisContent.fadeIn(600);
        },1200);


        var NextHr=$(NextBlock.getElementsByClassName("hr")[0]);
        var NextRedRing=$(NextBlock.getElementsByClassName("red-ring-bg")[0]);
        var NextContent=$(NextBlock.getElementsByClassName("content")[0]);
        NextHr.css({"display":"none"});
        NextRedRing.css({"display":"none"});
        NextContent.css({"display":"none"});
    }
    else if(nowActive>1 && nowActive<6){
        hideMyInfo();
        var StayingBlock=FullScreenArr[nowActive-1];
        var LastBlock=FullScreenArr[nowActive-2];
        var NextBlock=FullScreenArr[nowActive];
        var ThisHr=$(StayingBlock.getElementsByClassName("hr")[0]);
        var ThisRedRing=$(StayingBlock.getElementsByClassName("red-ring-bg")[0]);
        var ThisContent=$(StayingBlock.getElementsByClassName("content")[0]);
        ThisHr.fadeIn(500);
        setTimeout(function(){
            ThisRedRing.css({"display":"block"});
        },700);
        setTimeout(function(){
            ThisContent.fadeIn(600);
        },700);

        var LastRedRing=$(LastBlock.getElementsByClassName("red-ring-bg")[0]);
        var LastHr=$(LastBlock.getElementsByClassName("hr")[0]);
        var LastContent=$(LastBlock.getElementsByClassName("content")[0]);
        LastHr.css({"display":"none"});
        LastRedRing.css({"display":"none"});
        LastContent.css({"display":"none"});

        var NextHr=$(NextBlock.getElementsByClassName("hr")[0]);
        var NextRedRing=$(NextBlock.getElementsByClassName("red-ring-bg")[0]);
        var NextContent=$(NextBlock.getElementsByClassName("content")[0]);
        NextHr.css({"display":"none"});
        NextRedRing.css({"display":"none"});
        NextContent.css({"display":"none"});


    }

    else if(nowActive==6){
        hideMyInfo();
        var StayingBlock=FullScreenArr[nowActive-1];
        var LastBlock=FullScreenArr[nowActive-2];
        var ThisHr=$(StayingBlock.getElementsByClassName("hr")[0]);
        var ThisRedRing=$(StayingBlock.getElementsByClassName("red-ring-bg")[0]);
        var LastRedRing=$(LastBlock.getElementsByClassName("red-ring-bg")[0]);
        var LastHr=$(LastBlock.getElementsByClassName("hr")[0]);
        var ThisContent=$(StayingBlock.getElementsByClassName("content")[0]);
        LastHr.css({"display":"none"});LastRedRing.css({"display":"none"});
        ThisHr.fadeIn(500);
        setTimeout(function(){
            ThisRedRing.css({"display":"block"});
        },700);
        setTimeout(function(){
            ThisContent.fadeIn(600);
        },700);
    }
}

function showElementByOpacity(ElementJQueryObj){
    ElementJQueryObj.animate({"display":block},"slow");
}
function hideElementByOpacity(ElementJQueryObj){
    ElementJQueryObj.animate({"display":"none"},"slow");
}