 // 顶部
 $(".header .close").click(function(){
    $(this).parent().parent().css("display","none");
 })
 // 导航栏的二级菜单的显示与隐藏
 $(".s3").mousemove(function(){
     $(this).children().css({
         "display":"block"
     })
 })
 $(".s3").mouseout(function(){
     $(this).children().css({
         "display":""
     })
 })
 // 轮播图中的选项栏分类
 $(".tab-li").mousemove(function(){
     $(this).css({
         "border-radius": "0 0 0 0",
         "background": "#ffffff"
     });
     $(this).children(1).css({
         "display":"block"
     })
 })
 $(".tab-li").mouseout(function(){
     $(this).css({
         "background": "rgba(255,255,255,0.9",
         "color":"red"
     })
     $(this).children(1).css({
         "display":""
     })
 })
 // 轮播图
 var leftArrow = $(".left-arrow");
 var rightArrow = $(".right-arrow");
 var imgWidth = $("li img:first-child").eq(0).width();
 var flag = true;
 $(document).ready(function(){
     var timer = 3000;
     var size = $('.banner-box ul li').size();
     for(var i=1;i<=size;i++){
         $('.list').append('<a href="javascript:(void)"></a>')
     }     
     $("banner-box ul li").eq(0).show();
     $('.list a').eq(0).addClass('active')
     $('.list a').mouseover(function(){
         $(this).addClass('active').siblings().removeClass('active');
         var index = $(this).index();
         i=index;
         $('.banner-box ul li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
     });
     $(".banner .left-arrow").click(function(){
         i = index;
         $('.banner-box ul li').eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
     })

     
     var time = setInterval(move,timer);
     var index = 0;
     function move(){
         i++;
         if(i==size){
             i=0;
         }

         $('.list a').eq(i).addClass('active').siblings().removeClass('active');
         $('.banner-box ul li').eq(i).fadeIn(300).siblings().fadeOut(300);
     }

     $('.banner').hover(function(){
         clearInterval(time);
     },function(){
         time = setInterval(move,timer);
     });
     leftArrow.on("click", function() {
         //左箭头
         flag = false;
         clearInterval(timer);
         if(index == 0){
            i =index;
         }
         index--;
         move();
     })
     rightArrow.on("click", function() {
         //右箭头
         flag = false;
         clearInterval(timer);
         index++;
         move();
     })
 })

// 广告文字的无缝滚动
function Scroll(){}
 Scroll.prototype.upScroll=function(dom,_h,interval){
    var dom=document.getElementById(dom);
    var timer=setTimeout(function(){
        var _field=dom.firstElementChild;
        _field.style.marginTop=_h;
        clearTimeout(timer);},1000)
    
      
    $("#demo li").mouseover(function(){
        clearInterval(timer1);
    })
    
    var timer1 = setInterval(function(){
        var _field=dom.firstElementChild;
        _field.style.marginTop="0px";
        dom.appendChild(_field);
        var _field=dom.firstElementChild
        _field.style.marginTop=_h;},interval)
    }
    var myScroll=new Scroll();
    myScroll.upScroll("demo","-43px",3000);
    $("#demo li").mouseout(function(){
        myScroll.upScroll("demo","-43px",3000);
    })