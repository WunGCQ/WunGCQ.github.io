/**
 * Created by wungcq on 15/2/13.
 */

function UI_Animate(){
    var obj = this;
    this.closeAnimate = function(){
        document.getElementsByClassName('full-screen')[0].classList.add("moving-disappear-animate");
    };
    this.bind = function(){
        $('body').beforeunload(function(){
          obj.closeAnimate();
        });
    };
    return this;
}