/**
 * Created by Administrator on 2017/12/26.
 */
// 2.提供一个构造函数
function ColorBall(option) {
    this._init(option);
}

// 3.设置原型对象
ColorBall.prototype = {
    constructor : ColorBall,
    // 初始化
    _init : function (option) {
        option = option || {};
        // 圆心的坐标以及半径
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.r = option.r || 0;
        this.color = option.color || 'red';

        // 变化的量
        this.dx = Math.random()*20 - 10; // 0~1 0~20 -10~10
        this.dy = Math.random()*20 - 10;
        this.dr = Math.random()*2 + 1;
    },
    // 绘制
    render : function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    },

    // 更新
    update : function () {
        this.x += this.dx;
        this.y += this.dy;
        this.r -= this.dr;

        if(this.r <= 0){
            // 删除小球
//                this.r = 0;
            // 第一参数:要操作的数组
            // 第二个参数:要删除的元素 this->小球
            ballArray = _.without(ballArray,this);
        }
    }
}
