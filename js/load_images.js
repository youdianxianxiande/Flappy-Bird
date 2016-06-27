/**
 * Created by Administrator on 2016/4/21.
 */
//¼ÓÔØÍ¼Æ¬
var imgs=["birds.png","land.png","pipe1.png","pipe2.png","sky.png"];
var imgObjects=[];

var imgCount=0;
imgs.forEach(function (imgURL) {
    var img=new Image();
    img.addEventListener("load",listener);
    img.src="images/"+imgURL;
    imgObjects.push(img);

    function listener() {
        imgCount++;
        if (imgCount>=imgs.length) {
            main();
        }
    }
});