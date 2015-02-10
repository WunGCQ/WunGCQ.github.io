/**
 * Created by wungcq on 15/2/10.
 */
//创建一个滚动条，需要给予其视窗元素view_port_element，和内部滚动的元素scroll_element,并且监听高度的变化
//能够根据view_port_内部的元素滚动进行位移
//传入的的参数格式应该是这样的
function exam(){
    var x1 = document.getElementById('container');
    var x2 = document.getElementById('water_fall_wrapper');
    var arg = {
        view_port_element : x1,
        scroll_element : x2
    };
    window.x = new scrollbar(arg);
    x.add_scroll_bar();
    x.fresh_controll();
}

function scrollbar(){
    this.arg = arguments[0];
    var s = this;
    this.show_arg = function(){console.log(this.arg)};
    this.view_port_element = this.arg.view_port_element;//视窗元素
    this.scroll_element = this.arg.scroll_element;//滚动内容
    this.is_mouse_down = false;
    this.is_able_to_scroll = true;
    this.scroll_bar_top = 0;

    this.exec_scroll_bar = function(callback) {
        //根据视窗元素和滚动元素高度计算出滚动条高度
        this.view_port_height = parseInt(this.view_port_element._css("height"));
        this.scroll_element_height = parseInt(this.scroll_element._css("height"));
        this.scroll_bar_track_height = this.view_port_height;
        this.scroll_bar_height = parseInt(this.view_port_height * this.view_port_height / this.scroll_element_height);
        this.scroll_bar_top =  this.view_port_height *((- parseInt(this.scroll_element._css("margin-top"))) / (this.scroll_element_height));
        if(callback!=null){
            callback();
        }
    };
    //添加
    this.add_scroll_bar = function() {
        var range = document.createRange();
        var str = '<div class="scroll-bar-track"><div class="scroll-bar" style="height: 0;"></div></div>';
        var fragment = range.createContextualFragment(str);
        this.view_port_element.appendChild(fragment);
        this.exec_scroll_bar();
        this.get_scroll_bar();
        this.scroll_bar._css("height",(this.scroll_bar_height+"px").toString());
    };

    this.get_scroll_bar = function() {
        this.scroll_bar = this.view_port_element.getElementsByClassName("scroll-bar")[0];
    } ;
    this.reset_scroll_bar = function() {
        s.exec_scroll_bar();
        //alert("!");
        this.scroll_bar._css("height",(this.scroll_bar_height+"px").toString());
        this.scroll_bar._css("margin-top",(this.scroll_bar_top+"px").toString());
    };
    this.drag_scroll_bar_controller = function(){
        //this.exec_scroll_bar();
        console.log('ssss');
        s.is_mouse_down = true;
        var event = window.event;
        this.start_Y = event.clientY;
        this.start_time = new Date().getTime();
    };

    this.move_controller = function(){
        var event = window.event;

        if(s.is_mouse_down){
            if(new Date().getTime()-this.start_time>=50){
                var move_offset = event.clientY - this.start_Y;
                console.log(move_offset);
                this.start_time = new Date().getTime();
                this.scroll_bar_top+= move_offset;
                if(this.scroll_bar_top<=0){
                    this.is_able_to_scroll = false;
                    return;
                }
                else if(this.scroll_bar_top + this.scroll_bar_height>=this.scroll_bar_track_height){
                    this.is_able_to_scroll = false;
                    return;
                }
                else {
                    this.scroll_bar._css("margin-top",(this.scroll_bar_top+"px").toString());
                    this.move_scroll_element();
                }
                this.start_Y = event.clientY;
            }


        }

    };
    this.scroll_up = function(){
        if(this.scroll_bar_top>0){
            this.scroll_bar_top-=2;
            this.scroll_bar._css("margin-top",(this.scroll_bar_top+"px").toString());
            this.move_scroll_element();
        }
    };
    this.scroll_down = function(){
        if(this.scroll_bar_top+this.scroll_bar_height < this.scroll_bar_track_height){
            this.scroll_bar_top+=2;
            this.scroll_bar._css("margin-top",(this.scroll_bar_top+"px").toString());
            this.move_scroll_element();
        }
    };


    this.move_scroll_element = function(){
        //if(this.is_able_to_scroll){
            this.scroll_element_top = - parseInt(this.scroll_element_height * (this.scroll_bar_top/this.view_port_height));
            this.scroll_element._css("margin-top",(this.scroll_element_top+"px").toString());
        //}
    };

    this.up_controller = function(){
        this.is_mouse_down = false;
    };
    //绑定刷新事件
    this.fresh_controll = function() {
        this.t_fresh_height = setInterval(function(){s.reset_scroll_bar();},200);
        this.scroll_bar.addEventListener("mousedown", function(){
            console.log('down');
            s.drag_scroll_bar_controller();
        });
        //this.scroll_bar.addEventListener("mousemove", function(){s.move_controller()});
        this.scroll_bar.addEventListener("mouseup",function(){
            //console.log('up');
            //up('up');
            s.up_controller();
        });
        this.view_port_element.addEventListener("keydown",function(){
            //console.log('up');
            //up('up');
            alert(event.keyCode);
            s.up_controller();
        });
        document.getElementById('scroll-up').addEventListener('mousedown',function(){
            s.tt = setInterval(function(){s.scroll_up();},10);
        });
        document.getElementById('scroll-up').addEventListener('mouseup',function(){
            window.clearInterval(s.tt);
        });
        document.getElementById('scroll-down').addEventListener('mousedown',function(){
            s.tt = setInterval(function(){s.scroll_down();},10);
        });
        document.getElementById('scroll-down').addEventListener('mouseup',function(){
            window.clearInterval(s.tt);
        });
    };
    return  this;
}