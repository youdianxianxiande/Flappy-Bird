/**
 * Created by Administrator on 2016/4/21.
 */
function Land(img,x,ctx) {
    this.img=img;
    this.x=x;
    this.ctx=ctx;

    this.speed=-0.1;
}

Land.prototype.update=function (dt) {
    if (this.x<-336) {
        this.x=this.x+336*4;
    }
    this.x=this.x+this.speed*dt;
};

Land.prototype.draw=function () {
    this.ctx.drawImage(this.img,this.x,600-112);
};