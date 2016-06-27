/**
 * Created by Administrator on 2016/4/21.
 */
//Ìì¿Õ
function Sky(img,x,ctx) {
    this.img=img;
    this.x=x;
    this.ctx=ctx;

    this.speed=-0.03;
}

Sky.prototype.update=function (dt) {
    if (this.x<-800) {
        this.x=this.x+800*2;
    }
    this.x=this.x+this.speed*dt;
};

Sky.prototype.draw=function () {
    this.ctx.drawImage(this.img,this.x,0);
};