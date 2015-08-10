(function () {
    document.onkeyup = getArrowAndScroll;


    function getArrowAndScroll(event) {
        var arrowUnicode = event.keyCode;
        _scroll(arrowUnicode);
    }

    function _scroll(arrowUnicode) {
        var top = $(window).scrollTop();
        var h = $(window).outerHeight();
        var nowActive = parseInt(top / h + 0.5);
        var divArr = ["#header", "#me", "#skills", "#exp", "#blog", "#hobby", "#footer"];
        if (arrowUnicode == 37 || arrowUnicode == 38) {
            if (nowActive >= 1) {
                $('.nav li').eq(nowActive - 1).trigger('click');
            }

            else {
                $('.nav li').eq(0).trigger('click');
            }
        }
        else if (arrowUnicode == 39 || arrowUnicode == 40) {
            if (nowActive <= 5) {
                $('.nav li').eq(nowActive + 1).trigger('click');
            }

            else {
                $('.nav li').eq(6).trigger('click');
            }
        }
    }


    var divArr = ["#header", "#me", "#skills", "#exp", "#blog", "#hobby", "#footer"];
    var addScrollEvent = (function () {

            if (window.addEventListener) {
                return function (el, sType, fn, capture) {
                    el.addEventListener(sType, fn, (capture));
                };
            }
            else if (window.attachEvent) {
                return function (el, sType, fn, capture) {
                    el.attachEvent("on" + sType, fn);
                };
            }
            else {
                return function () {
                };
            }
        })(),
        stopEvent = function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            else {
                event.cancelBubble = true;
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                event.returnValue = false;
            }
        }

        ,
        lock = (function () {
            var l = true;
            return {
                val: function () {
                    return (l == true);
                },
                change: function () {
                    l = false;
                    return (l == true);
                },
                reset: function () {
                    l = true;
                    return true;
                }
            }
        })()
        ,
        scrollUp = function (delta) {
            if (lock.val()) {
                console.log('go');
                _scroll(37);
                lock.change();
                var s = setTimeout(function () {
                    lock.reset();
                    clearTimeout(s);
                }, 1000);

            } else {
                console.log('no');
                return false;
            }

        },
        scrollDown = function (delta) {
            if (lock.val()) {
                console.log('go');
                _scroll(39);
                lock.change();
                var s = setTimeout(function () {
                    lock.reset();
                    clearTimeout(s);
                }, 1000);

            } else {
                console.log('no');
                return false;
            }
        },
        isFirefox = (window.navigator.userAgent.indexOf('Firefox') != -1)
        ,
        mousewheel = isFirefox ? "DOMMouseScroll" : "mousewheel";


    addScrollEvent(window, mousewheel, function (event) {
        //event.preventDefault();
        var delta = 0;
        event = window.event || event;
        stopEvent(event);
        delta = event.wheelDelta ? (event.wheelDelta / 120) : (-event.detail / 3);

        delta > 0 ? scrollUp(delta) : scrollDown(Math.abs(delta));
    }, false);
})();

(function () {
    $(".nav").on('click', function (e) {
        if (e.target.nodeName == 'LI') {
            var index = $('.nav li').index($(e.target));
            $('.nav li').removeClass('nav-active').eq(index).addClass('nav-active');
            $.scrollTo(".full-screen:eq(" + index + ")", 500);
            $(".full-screen").removeClass("animate").eq(index).addClass("animate");
        }

    }).on('touchstart', function (e) {
        if (e.target.nodeName == 'LI') {
            var index = $('.nav li').index($(e.target));
            $('.nav li').removeClass('nav-active').eq(index).addClass('nav-active');
            $.scrollTo(".full-screen:eq(" + index + ")", 500);
            $(".full-screen").removeClass("animate").eq(index).addClass("animate");
        }
    });


})();

//这个函数一定要放在fundation执行之后
$("input").each(function(){
    $(this).unbind('focus');//统一解除默认绑定，
});