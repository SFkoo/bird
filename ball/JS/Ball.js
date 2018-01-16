/**
 * Created by Administrator on 2017/12/26.
 */
    // 1.提供一个构造函数
    function Ball(option) {
        this._init(option);
    }
    // 2.设置原型对象
    Ball.prototype = {
        constructor : Ball,
        // 初始化
        _init : function (option) {
            option = option || {};

            // 圆心的坐标
            this.x = option.x || 0;
            this.y = option.y || 0;
            // 半径
            this.r = option.r || 0;
            // 颜色
            this.color = option.color || 'red';
            // 速度
            this.speed = option.speed || 1;
        },

        // 绘制
        render : function (ctx) {
            // 保存状态
            ctx.save();
            ctx.beginPath();

            // 绘制小球
            ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();

            // 还原状态
            ctx.restore();
        },

        // 更新
        update : function () {
            this.x += this.speed;
        }
    }