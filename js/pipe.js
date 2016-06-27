/**
 * Created by Administrator on 2016/4/21.
 */
function Pipe(img01,img02,x,ctx) {
    this.img01=img01;
    this.img02=img02;
    this.x=x;
    this.ctx=ctx;
    this.pipe02Y=Math.random()*151+50;

    this.speed=-0.1;
}

Pipe.prototype.update=function (dt) {
    if (this.x<-52) {
        this.x=this.x+200*5;
        this.pipe02Y=Math.random()*151+50;
    }
    this.x=this.x+this.speed*dt;
};

Pipe.prototype.draw=function () {
    this.ctx.drawImage(this.img02,this.x,this.pipe02Y-420);
    this.ctx.drawImage(this.img01,this.x,this.pipe02Y+150);

    this.ctx.rect(this.x,this.pipe02Y-420,52,420);
    this.ctx.rect(this.x,this.pipe02Y+150,52,420);
};