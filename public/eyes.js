/**
 * Created by Administrator on 2016/12/1.
 */
(function(){
    
    document.body.addEventListener('mousein',function(e){
        window.MOUSE = {
            x:e.pageX,
            y:e.pageY,
        };
        document.body.removeEventListener('mousein');
    });
    document.body.addEventListener('mousemove',function(e){
        window.MOUSE = {
            x:e.pageX,
            y:e.pageY,
        };
    });
    var w = window.innerWidth;
    var h = window.innerHeight;
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width',w);
    canvas.setAttribute('height',h);
    canvas.id='canvas';
    document.body.appendChild(canvas);
    init(w,h);
})();
function init(w,h){
    var canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    const img = document.getElementById('eye');
    class Point {
        constructor(x,y){
            this.x = x;
            this.y = y;
        }
        move(ctx){
            ctx.moveTo(this.x - 0, this.y -0);
        }
    }
    function drawBezier(ctx,start,P0,P1,end){
        ctx.beginPath();
        start.move(ctx);
        ctx.bezierCurveTo(P0.x,P0.y,P1.x,P1.y,end.x,end.y);
        ctx.fillStyle = '#333';
        ctx.fill();
        ctx.stroke();
        return ctx;
    }

    function drawEyeBall(ctx,center,r,t){
        let xOffset = 0.2 * r * Math.sin(t/500);
        let yOffset = 0.05 * r * Math.cos(t/800);
        var {x:_x,y:_y} = window.MOUSE;

        let xOffset = 0.13*r*Math.atan(_x - center.x);
        let yOffset = 0.07*r*Math.atan(_y - center.y );
        // let xOffset = 0, yOffset = 0;
        let x = xOffset + center.x;
        let y = center.y + yOffset;

        ctx.restore();
        ctx.beginPath();
        // ctx.arc(x, y, r*0.2, 0, 2*Math.PI, false);
        ctx.save();
        ctx.fllStyle = 'rgba(0,0,0,0.5)';
        ctx.drawImage(img, x - r*0.3 + 0.01*r*Math.random(), y - r * 0.3 + 0.01*r*Math.random(), r*0.6, r * 0.6);
        ctx.restore();
        ctx.fillStyle = '#730505';

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#730505';
        ctx.stroke();

    }

    function drawEye(pointCenter = new Point(0,0), r = 10, openPercent = 0.6,rotate,t,allRotate){
        const c = pointCenter;
        pointCenter.move(ctx);
        // let R = {x: r, y : r* openPercent};
        //我试图建立一个等六边形，六边形的左右顶点为bezier曲线的起点终点，剩余点为控制点.
        //按照眼睛六边形建模r为六边形顶点同心圆半径
        //通过上下scaleY控制闭合程度，通过translate控制眼睛中心偏移。
        const deltaX  = r * 0.5;
        const deltaY = r * 0.5 * Math.pow(2.5,0.5);
        //六个点

        let startPoint = new Point(0 - r, 0);

        let topLeftPoint = new Point(0 - deltaX, 0 - deltaY);
        let topRightPoint = new Point(0 + deltaX, 0 - deltaY);

        let endPoint = new Point(0 + r, 0);

        let bottomLeftPoint = new Point(0 - deltaX, 0 + deltaY);
        let bottomRightPoint = new Point(0 + deltaX, 0 + deltaY);

        //设置样式
        ctx.lineWidth  = 2;
        ctx.strokeStyle = 'black';
        ctx.save();
        //transform
        ctx.translate(c.x, c.y);
        ctx.rotate(rotate);
        ctx.scale(1,openPercent);

        //画下半部分线条
        drawBezier(ctx,startPoint,bottomLeftPoint,bottomRightPoint,endPoint);

        //画上半部分线条
        drawBezier(ctx,startPoint,topLeftPoint,topRightPoint,endPoint);






        ctx.beginPath();
        startPoint.move(ctx);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.strokeStyle = '#333'
        ctx.stroke();

        //回到中心，画个圆
        drawEyeBall(ctx, c, r , t);

        ctx.restore();
        ctx.rotate(allRotate);



    }

    var start = null;

    const eyes = (()=>{
        var maxRectLen = 100;
        var minLen = (w * h )/(maxRectLen*maxRectLen);
        var len =  parseInt(minLen * 0.8 + 0.5 * Math.random()* minLen);
        var rect = w * h / len;
        var square_width = Math.pow(rect,0.5);
        var horizental_num = (w / square_width);
        return Array.from(new Array(len),(__,i)=>{
            var x = (i+1) % horizental_num;
            var y = parseInt((i+1) / horizental_num);
            var rotate_seed = Math.cos(Math.random()*100);
            var p = Math.PI;
            return {
                center: new Point( x * square_width + (0.1 * (Math.random() - 0.5)*w),
                    y * square_width + (0.1 *(Math.random() - 0.5)* h)),
                r: 20 + Math.random() * 40,
                seed: -0.4 - 0.1*Math.random(),
                rotate: rotate_seed >= 0 ? p + p * rotate_seed :  ( -p + p * rotate_seed)
            };
        });
    })();
    function step(t) {
        if (!start) start = t;
        var progress = t - start;
        // drawEye(new Point(200,100),20,openPercent,t);
        // ctx.clearRect(0,0,w,h);
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fillRect(0,0,w,h);
        var newRotate = -0.001;
        eyes.forEach((args,i)=>{
            var temp = args.seed*1000;
            var openPercent = 0.7 + 0.6*Math.abs(Math.sin(t/(5*(-temp)) + temp )) + args.seed + 0.2;
            drawEye(args.center,args.r,openPercent,args.rotate,t,newRotate);

        });

        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}
