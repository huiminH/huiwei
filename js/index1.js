// var data = [
//    {"id":"pro1","src":"image/2-2-2.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"热卖"},
//    {"id":"pro2","src":"image/2-2-4.png","p1":"HUAWEI P20 Pro","p2":"领券减100 赠配件好礼","p3":"￥4988","span":"爆款"},
//    {"id":"pro3","src":"image/2-2-5.png","p1":"荣耀Play","p2":"最高优惠700 积分翻倍","p3":"￥1999","span":"爆款"},
//    {"id":"pro4","src":"image/2-2-4.png","p1":"HUAWEI P20","p2":"领券减100 限量好礼","p3":"￥3388",},
//    {"id":"pro5","src":"image/2-2-6.png","p1":"荣耀10青春版","p2":"送耳机 老用户再送数据线","p3":"￥1399","span":"新品"},
//    {"id":"pro6","src":"image/2-2-7.png","p1":"HUAWEI nova 3","p2":"领券最高减200+赠保护壳","p3":"￥2599",},
//    {"id":"pro7","src":"image/2-2-8.png","p1":"荣耀V10","p2":"限时优惠1000 积分翻倍","p3":"￥199","span":"爆款"},
//    {"id":"pro8","src":"image/2-2-9.png","p1":"华为畅享9 Plus","p2":"6+128GB新版上市  限量赠好礼","p3":"￥1499","span":"新品"},
// ]

// var newList = document.getElementById("duct");
// // console.log(newList);
// var str = ""
// for(var i = 0; i < data.length;i++){
//    var cur = data[i];
//    str+='<li class="duct-d" id="'+cur.id+'"><a href="#" class="duct-d1"><p class="duct-d1-s"><img src=" '+cur.src+'"/></p>',
//    str+='<div class="duct-title">'+cur.p1+'</div><p class="duct-desc">'+cur.p2+'</p>',
//    str+='<p class="duct-price">'+cur.p3+'</p>'
//    str+='<p class="duct-top"><em class="duct-tip"><span class="sp">'+cur.span+'</span></em></p>'
//    str+='</a></li>';
// }
// newList.innerHTML = str;


// var data1 = [
//     {"src":"image/2-3-1.png","p1":"4+32G版限时优惠100","p2":"荣耀畅玩8C","p3":"￥999","span":"新品"},
//     {"src":"image/2-3-2.png","p1":"定金10元抵50","p2":"HUIWEI FreeBuds 2系列","p3":"￥799","span":"预订优惠40元"},    
//     {"src":"image/2-3-3.png","p1":"高性能金属轻薄本","p2":"荣耀Magic Book 锐龙版","p3":"￥3999","span":"免息"},
//     {"src":"image/2-3-5.png","p1":"定金20抵30","p2":"华为手机 3e","p3":"￥109","span":"新品"},
//     {"src":"image/2-3-6.png","p1":"10元定金抵50","p2":"FlyPods Pro无线耳机","p3":"￥999","span":"预订优惠40元"}
// ]
// var Lity = document.getElementById("lity");
// // console.log(newList);
// var str1 = ""
// for(var i = 0; i < data1.length;i++){
//     var cur1 = data1[i];
//     str1+='<li class="lity"><a href="#" class="a1"><div class="lity1"><p class="lity-img"><img src="'+cur1.src+'"/></p>',
//     str1+='<p class="p-desc">'+cur1.p1+'</p></div>'
//     str1+='<div class="p-title">'+cur1.p2+'</div>'
//     str1+='<p class="p-price">'+cur1.p3+'</p>'
//     str1+='<p class="p-top"><em class="p-tip"><span class="p-span">'+cur1.span+'</span></em></p>'
//     str1+='</a></li>';
// }
// Lity.innerHTML = str1;



// // 手机

// var data2 = [
//     {"id":"phone1","src":"image/2-2-4.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"新品"},
//     {"id":"phone2","src":"image/2-2-4.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"新品"},
//     {"id":"phone3","src":"image/2-2-5.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"热卖"},
//     {"id":"phone4","src":"image/2-2-4.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"特惠"},
//     {"id":"phone5","src":"image/2-2-6.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"新品"},
//     {"id":"phone6","src":"image/2-2-7.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199"},
//     {"id":"phone7","src":"image/2-2-8.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"爆款"},
//     {"id":"phone8","src":"image/2-2-9.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"新品"},
//     {"id":"phone9","src":"image/2-2-2.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"新品"},
//     {"id":"phone10","src":"image/2-2-4.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"爆款"},
//     {"id":"phone11","src":"image/2-2-5.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"爆款"},
//     {"id":"phone12","src":"image/2-2-4.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"爆款"},
//     {"id":"phone13","src":"image/2-2-6.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"新品"},
//     {"id":"phone14","src":"image/2-2-7.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"爆款"},
// ]

// var phone = document.getElementById("phone");
// // console.log(newList);
// var str2 = ""
// var str2 = '<li class="duct-d"><a href="#"><img class="img1" src="image/2-4-1.png" alt=""></a></li>';
// for(var i = 0; i < data2.length;i++){
//     var cur2 = data2[i];
//     str2+='<li class="duct-d"><a href="#" class="duct-d1"><p class="duct-d1-s"><img src=" '+cur2.src+'"/></p>',
//     str2+='<div class="duct-title">'+cur2.p1+'</div><p class="duct-desc">'+cur2.p2+'</p>',
//     str2+='<p class="duct-price">'+cur2.p3+'</p>'
//     str2+='<p class="duct-top"><em class="duct-tip"><span class="sp">'+cur2.span+'</span></em></p>'
//     str2+='</a></li>';
// }
// phone.innerHTML = str2;

// // 笔记本    精品平板
// var data3 = [
//     {"src":"image/2-2-2.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"热卖"},
//     {"src":"image/2-2-4.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"爆款"},
//     {"src":"image/2-2-5.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"爆款"},
//     {"src":"image/2-2-4.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199",},
//     {"src":"image/2-2-6.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"新品"},
//     {"src":"image/2-2-7.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199",},
//     {"src":"image/2-2-8.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"热卖"},
//     {"src":"image/2-2-9.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"新品"},
//     {"src":"image/2-2-2.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"热卖"},
//     {"src":"image/2-2-4.png","p1":"荣耀10","p2":"限时优惠500 积分翻倍","p3":"￥2199","span":"爆款"},
// ]

// var computer = document.getElementById("computer");
// var flat = document.getElementById("flat");
// var smart = document.getElementById("smart");
// var home = document.getElementById("home");
// var sell = document.getElementById("sell");
// var brand = document.getElementById("brand");

// console.log(newList);
// var str3 = ""
// for(var i = 0; i < data3.length;i++){
//     var cur3 = data3[i];
//     str3+='<li class="duct-d"><a href="#" class="duct-d1"><p class="duct-d1-s"><img src=" '+cur3.src+'"/></p>',
//     str3+='<div class="duct-title">'+cur3.p1+'</div><p class="duct-desc">'+cur3.p2+'</p>',
//     str3+='<p class="duct-price">'+cur3.p3+'</p>'
//     str3+='<p class="duct-top"><em class="duct-tip"><span class="sp">'+cur3.span+'</span></em></p>'
//     str3+='</a></li>';
// }
// computer.innerHTML = str3;
// flat.innerHTML = str3;
// smart.innerHTML = str3;
// home.innerHTML = str3;
// sell.innerHTML = str3;
// brand.innerHTML = str3;




// var data4 = [
//     {"src":"image/2-4-2.png","p1":"赠充电底座&nbsp;","p2":"HUAWEI WATCH 2","p3":"￥1999","span":"新品"},
//     {"src":"image/2-4-2.png","p1":"赠充电底座&nbsp;","p2":"HUAWEI WATCH 2","p3":"￥1999","span":"新品"},
//     {"src":"image/2-4-2.png","p1":"赠充电底座&nbsp;","p2":"HUAWEI WATCH 2","p3":"￥1999","span":"新品"},
//     {"src":"image/2-4-2.png","p1":"赠充电底座&nbsp;","p2":"HUAWEI WATCH 2","p3":"￥1999","span":"新品"},
//     {"src":"image/2-4-2.png","p1":"赠充电底座&nbsp;","p2":"HUAWEI WATCH 2","p3":"￥1999","span":"新品"},
//     {"src":"image/2-4-2.png","p1":"赠充电底座&nbsp;","p2":"HUAWEI WATCH 2","p3":"￥1999","span":"新品"},
// ]
// var wearer = document.getElementById("wearer");
// var home = document.getElementById("gence");
// var Sell = document.getElementById("ries");
// var Brand = document.getElementById("part");
// console.log(newList);
// var str4 = ""
// for(var i = 0; i < data4.length;i++){
//     var cur4 = data4[i];
//     str4+='<li class="wear"><a href="#"><div class="wear-info"><p class="wear-img"><img src="'+cur4.src+'"/></p>',
//     str4+='<p class="wear-desc">'+cur4.p1+'</p></div>'
//     str4+='<div class="wear-title">'+cur4.p2+'</div>'
//     str4+='<p class="wear-price">'+cur4.p3+'</p>'
//     str4+='</a></li>';
// }
// wearer.innerHTML = str4;
// home.innerHTML = str4;
// Sell.innerHTML = str4;
// Brand.innerHTML = str4;
