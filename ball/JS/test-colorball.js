function MyBall(option) {
    this._init(option)
}

MyBall.prototype = {
    constructor: MyBall,
    _init: function (option) {
            option = option || {};
            this.x = option.x || 0;
            this.y = option.y || 0;
            this.r = option.r || 50;
            this.color=option.color||"red";

            this.dx=Math.random()*20-10;
            this.dy=Math.random()*20-10;
            this.dr=Math.random()*2+1;

    },
    //绘制
    render:function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.restore()
    },

    //更新
    update:function () {
        this.x+=this.dx;
        this.y+=this.dy;
        this.r-=this.dr;

        if(this.r<=0){
            balls = _.without(balls,this);
        }

    }

}