/**
 * Created by wungcq on 15/2/14.
 */


(function(param) {

    //var document = window.document,navigator = window.navigator,location = window.location;

    var chart = function(param) {
        return new chart.fn.init(param);
    };
    chart.fn = chart.prototype = {

        constructor:chart,
        init:function(param) {
            this.param = param;
            return this;
        },
        pointSetStyle:this.param['dataCollectionType']||'separate',
        getPointSet:function(data){
            var dataSet = data||this.param['dataCollection'];
            var pointArray = [];

            if(this.pointSetStyle=='separate'){
                if(this.CoordinatesDimension==2) {
                    for(var i=0;i<dataSet.length ;i++) {
                        var temp = {};
                        temp.name = dataSet[i].name;
                        temp.color = dataSet[i].color;
                        temp.points = [];
                        for(var j=0;j<=dataSet[i].x_data.length;j++) {
                            temp.points.push(new this.chartPoint(dataSet[i].x_data[j],dataSet[i].y_data[j]));
                        }
                        pointArray.push(temp);
                    }
                }else {
                    for(var i=0;i<dataSet.length ;i++) {
                        var temp = {};
                        temp.name = dataSet[i].name;
                        temp.color = dataSet[i].color;
                        temp.points = [];
                        for(var j=0;j<=dataSet[i].x_data.length;j++) {
                            temp.points.push(new this.chartPoint(dataSet[i].x_data[j],dataSet[i].y_data[j]),dataSet[i].z_data[j]);
                        }
                        pointArray.push(temp);
                    }
                }
            }
            return pointArray;
        },
        pointSet: this.getPointSet(),
        CoordinatesDimension:this.param['dimension']||'2',
        Background:this.param['background']||this.param['backgroundColor']||'white',
        chartPoint:function(x,y,z){
            if(this.CoordinatesDimension==2) {
                return {x:x, y:y};
            }else {
                return {x:x, y:y, z:z};
            }
        }


    };
    chart.fn.drawPoint = function(Coordinate,point,Dimension) {
        //穿入坐标系和点还有维度
        var d = Dimension||this.CoordinatesDimension;
        if(d == 2){
            Three.draw(Coordinate,point.x,point.y);//这里是经过变换的xy坐标,具体函数就不多做讨论了、、、
        }else{
            Three.draw(Coordinate,point.x,point.y,point.z);//这里是经过变换的xyz坐标,具体函数就不多做讨论了、、、
        }

    };


    //原型
    chart.fn.init.prototype = chart.fn;
    //实例化一个
    window.chart = chart;
})(window.location.href);













//SpringChart对象参数
para = {
    dimension: '2',
    type: 'runChart',
    width: 700,
    height: 500,
    name: 'the money you own',//可自动生成
    id: 'the-money-you-own-runChart',//可自动生成
    backgroundColor: '#fff',
    x: 'time',
    x_unit: 'year',
    x_range: [2000,2015],
    y: 'money',
    y_unit: '1000 dollar',
    y_range: [0,10000],
    dataCollectionType: 'separate',//各个轴数据分开,当然也可以是合在一起的
    dataCollection:
        [
            {
                name: 'a',
                x_data: [2000,2005,2010],
                y_data: [1,100,1000],
                color: '#f00'
            },

            {
                name: 'a',
                x_data: [2000,2005,2010],
                y_data: [1,100,1000],
                color: '#0f0'
            }
        ]//数据可以有多组，x,y分开
};