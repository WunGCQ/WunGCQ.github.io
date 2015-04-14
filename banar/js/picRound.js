/**
 * Created by wungcq on 15/4/7.
 */
var picRound = {};
picRound.picWrapper = document.getElementById("pages-wrapper");
picRound.isAutoScroll = true;
picRound.picNumber = 2;
picRound.currentPage = 0;
picRound.autoScroll = function(){
    setInterval(function(){
        if(picRound.isAutoScroll){
            picRound.scroll();
            picRound.pageAdd();
        }

    },3000);
};
picRound.pageAdd = function(){
    picRound.currentPage++;
    if(picRound.currentPage>picRound.picNumber) {
        picRound.currentPage = 0;
    }
};
picRound.pageMinus = function(){
    picRound.currentPage--;
    if(picRound.currentPage<0) {
        picRound.currentPage = picRound.picNumber;
    }
};
picRound.scroll = function() {
    $(picRound.picWrapper).css("left",-picRound.currentPage*100+"vw");
};
picRound.bind = function(){
    $(".pic-round .prev").click(function(){
        picRound.pageMinus();
        picRound.scroll();

    });
    $(".pic-round .next").click(function(){
        picRound.pageAdd();
        picRound.scroll();

    });
    $(".pic-round").mouseover(function(){
        picRound.isAutoScroll = false;
    });
    $(".pic-round").mouseout(function(){
        picRound.isAutoScroll = true;
    });
};

picRound.init = function(){
    picRound.bind();
    picRound.autoScroll();
};