/**
 * Created by WunG on 2014/10/14.
 */
function init_fsm(){
     window.char_fsm;//字符变量，存放当前读入的字符
     window.token=new Array();//存放单词字符串

    var fsm=StateMachine.create({
        initial:'InputString',
        events:[
            { name: 'getchar',  from: '',                                to: 'satisfied' },
        ]
    });
}
//读取字符串的过程
function getchar(){

}
//反复调用getchar直至char进入一个非空白字符
function getnbc() {

}
//char与token连接
function cat() {

}
//判断char的具体类型
function chartype() {

}
//读字符指针后退一个字符
function ungetch(){

}
//判断token中的字符串是保留字还是标识符
function reverse() {

}
//字符串到数字的转换
function atoi(str,type) {
    var num;
    if(type==null){
        num=parseInt(str);
    }
    else {
        num=parseInt(type,str);
    }
    return num;
}

