/**
 * Created by Administrator on 2016/4/21.
 */
//bird
function Bird(img,cvs,ctx) {
    var self_this=this;

    this.img=img;
    this.ctx=ctx;

    this.x=200;
    this.y=100;
    this.frameIndex=0;

    this.speed=0;
    this.a=0.0005;
    this.waitTime=0;


    //µã»÷
    cvs.addEventListener("click",function () {
        self_this.fly();
    });

    //°´¼ü
    document.body.addEventListener("keydown",function (e) {
        if (e.keyCode===32) {
            self_this.fly();
        }
    });
}

Bird.prototype.update=function (dt) {
    this.waitTime=this.waitTime+dt;
    if (this.waitTime>100) {
        this.frameIndex=(this.frameIndex+1)%3;
        this.waitTime=this.waitTime-100;
    }
    this.speed=this.speed+this.a*dt;
    this.y=this.y+this.speed*dt;
};

Bird.prototype.draw=function () {
    this.ctx.drawImage(this.img,52*this.frameIndex,0,52,45,this.x-26,this.y-22.5,52,45);
};

Bird.prototype.fly=function () {
    this.speed=-0.3;
};