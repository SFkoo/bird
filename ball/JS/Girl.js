/**
 * Created by Administrator on 2017/12/26.
 */
    // 1.提供一个构造函数
    function Girl(option) {
        this._init(option);
    }

    // 2.设置原型对象
    Girl.prototype = {
        constructor : Girl,
        // 初始化的方法
        _init : function (option) {
            // 兼容性的处理
            option = option || {};
            // 图片
            this.imgSrc = option.imgSrc;
            // 裁剪的宽高
            this.sWidth = option.sWidth || 256;
            this.sHeight = option.sHeight || 256;
            // 显示的位置和尺寸
            this.x = option.x || 0;
            this.y = option.y || 0;
            this.width = option.width || 256;
            this.height = option.height || 256;
            // 动画的时间
            this.duration = option.duration || 300;
            // 方向
            this.dir = option.dir || 0;
        },

        // 绘制
        render : function (ctx) {
            // 0.备份this
            var self = this;
            // 1.创建图片对象
            var image = new Image();
            image.src = this.imgSrc;

            var index = 0;

            // 2.绘制图片
            image.onload = function () {

                // 定时器
                setInterval(function () {
                    // 清屏
                    ctx.clearRect(self.x,self.y,self.width,self.height);
                    ctx.drawImage(image,index * self.sWidth,self.dir * self.sHeight,self.sWidth,self.sHeight,self.x,self.y,self.width, self.height);

                    // 累加索引
                    index++;
                    index %= 8; // 0~7

                },self.duration);

            }
        },

        // 改变方向
        changeDir : function (dir) {
            this.dir = dir;
        }
    }