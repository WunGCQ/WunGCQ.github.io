/**
 * Created by wungcq on 15/3/10.
 */
function month_calendar() {
    var that = this;
    return this;
}

month_calendar.prototype._init = function() {

};

month_calendar.prototype.wrapper = document.getElementsByClassName("month-calendar")[0];

month_calendar.prototype.month_of_current_calendar_view = (new Date().getFullYear())+"/"+(new Date().getMonth()+1);

month_calendar.prototype.get_month_on_the_current_calendar_view = function(){
    if(this.month_of_current_calendar_view) {
        return this.month_of_current_calendar_view;
    }
    else{
        this.month_of_current_calendar_view = this.wrapper.getAttribute("data-year-month");
        return this.month_of_current_calendar_view;
    }
};

month_calendar.prototype.change_month = function(direction){

    var year_slash_month = this.get_month_on_the_current_calendar_view();
    var m = new Date(year_slash_month+"/1");
    //向后翻
    if(direction>0) {

        if(m.getMonth()==12){
            this.month_of_current_calendar_view = (m.getFullYear()+1)+"/1";
        }else{
            this.month_of_current_calendar_view = (m.getFullYear())+"/"+(m.getMonth()+1);
        }
    }
    //向前翻
    else {
        if(m.getMonth()==1){
            this.month_of_current_calendar_view = (m.getFullYear()-1)+"/12";
        }else{
            this.month_of_current_calendar_view = (m.getFullYear())+"/"+(m.getMonth()-1);
        }
    }
    return this.month_of_current_calendar_view;
};
month_calendar.prototype.get_the_first_week_of_the_month_sequence = function(){
    var the_first_day_of_the_month = new Date(this.month_of_current_calendar_view+"/1");
    var month = first_day_of_the_month.getMonth();
    var the_first_week_sequence_of_the_month = -1;
    var iterator = first_day_of_the_month;
    var the_first_day_of_the_year = new Date(first_day_of_the_month.getFullYear()+"1/1");
    var monday_of_the_first_week_of_the_year = {};
    var t = the_first_day_of_the_year.getDay();
    
    else if(t == 0){
        monday_of_the_first_week_of_the_year = the_first_day_of_the_year.setDate(the_first_day_of_the_year.getDate()+1);
    }
    else{}
    var monday_of_the_first_week_of_the_month =
        the_first_day_of_the_month.getDay()==1
            ? the_first_day_of_the_month
            : the_first_day_of_the_month.setDate(the_first_day_of_the_month + (8 - the_first_day_of_the_month.getDay()));
    var week_sequence = Math.floor((monday_of_the_first_week_of_the_year - monday_of_the_first_week_of_the_month)/(1000*3600*24*7));

};
month_calendar.prototype.set_calendar = function() {
    var first_day_of_the_month = new Date(this.month_of_current_calendar_view+"/1");
    var month = first_day_of_the_month.getMonth();
    var iterator = first_day_of_the_month;
    var the_first_week_of_the_month = -1;
    while(iterator.getMonth()==month) {
        //还没有确定本月第一周的周数时
        if(the_first_week_of_the_month== -1) {

        }
    }
};
