window.onload = function(){
    // 热销产品
    $.ajax({
    type:"get",
    url:"json/data.json",
    cache : true,   
    success:function(res){
        // console.log(res)
        var str= "";
        for(var key in res){
        //    console.log(key);
           for(var i = 0;i < res[key].list.length;i++){
               var cur = res[key].list[i];
               str+=`<li class="duct-d" id="${cur.id}">
                        <a href="details.html" class="duct-d1">
                            <p class="duct-d1-s">
                            <img src="${cur.src}"/></p>
                            <div class="duct-title">${cur.p1}</div>
                            <p class="duct-desc">${cur.p2}</p>
                            <p class="duct-price">${cur.p3}</p>
                            <p class="duct-top"> <em class="duct-tip">
                            <span class="sp">${cur.span}</span></em></p>
                        </a>
                    </li>`;
                 }
                }
            $("#duct").html(str);
        }
    })
    

    // 精品推荐
    $.ajax({
        type:"get",
        url:"json/lity.json",
        cache : true,   
        success:function(res){
            // console.log(res)
            var str1= "";
            for(var key in res){
            //    console.log(key);
               for(var i = 0;i < res[key].list.length;i++){
                   var cur1 = res[key].list[i];
                    str1+=`<li class="lity" id="${cur1.id}">
                              <a href="details.html" class="a1">
                                <div class="lity1"><p class="lity-img"><img src="${cur1.src}"/></p>
                                <p class="p-desc">${cur1.p1}</p></div><div class="p-title">${cur1.p2}</div>
                                <p class="p-price">${cur1.p3}</p>
                                <p class="p-top"><em class="p-tip"><span class="p-span">${cur1.span}</span></em></p>
                                </a>
                              </li>`;
                    }
                }
            $("#lity").html(str1);
        }
    })

    
    // 手机
    $.ajax({
        type:"get",
        url:"json/phone.json",
        cache : true,   
        success:function(res){
            // console.log(res)
            var str2= "";
            str2 = '<li class="duct-d"><a href="details.html"><img class="img1" src="image/2-4-1.png" alt=""></a></li>';
            for(var key in res){
            //    console.log(key);
               for(var i = 0;i < res[key].list.length;i++){
                   var cur2 = res[key].list[i];
                   str2+=`<li class="duct-d" id="${cur2.id}">
                            <a href="details.html" class="duct-d1">
                                <p class="duct-d1-s"><img src="${cur2.src}"/></p>
                                <div class="duct-title">${cur2.p1}</div>
                                <p class="duct-desc">${cur2.p2}</p>
                                <p class="duct-price">${cur2.p3}</p>
                                <p class="duct-top"><em class="duct-tip">
                                <span class="sp">${cur2.span}</span></em></p>
                            </a>
                          </li>`;                                           
                        }
                    }
                $("#phone").html(str2);
            }
        })

    // 笔记本电脑
    $.ajax({
        type:"get",
        url:"json/computer.json",
        cache : true,   
        success:function(res){
            var str3= "";
            for(var key in res){
            //    console.log(key);
            str3 = '<li class="duct-d"><a href="details.html"><img class="img1" src="image/computer.png" alt=""></a></li>';
            for(var i = 0;i < res[key].list.length;i++){
                var cur3 = res[key].list[i];
                    str3+=`<li class="duct-d id="${cur3.id}">
                                <a href="details.html" class="duct-d1"><p class="duct-d1-s">
                                    <img src="${cur3.src}"/></p>
                                    <div class="duct-title">${cur3.p1}</div>
                                    <p class="duct-desc">${cur3.p2}</p>
                                    <p class="duct-price">${cur3.p3}</p>
                                    <p class="duct-top"><em class="duct-tip">
                                    <span class="sp">${cur3.span}</span></em></p>
                                </a>
                            </li>`;
                    }
                }
             $("#computer").html(str3);
        }
    })


    // 精品平板
    $.ajax({
        type:"get",
        url:"json/flag.json",
        cache : true,   
        success:function(res){
            var str4= "";
            str4 = '<li class="duct-d"><a href="details.html"><img class="img1" src="image/flag.png" alt=""></a></li>';
            for(var key in res){
            //    console.log(key);
            for(var i = 0;i < res[key].list.length;i++){
                var cur4 = res[key].list[i];
                    str4+=`<li class="duct-d id="${cur4.id}">
                                <a href="details.html" class="duct-d1"><p class="duct-d1-s">
                                    <img src="${cur4.src}"/></p>
                                    <div class="duct-title">${cur4.p1}</div>
                                    <p class="duct-desc">${cur4.p2}</p>
                                    <p class="duct-price">${cur4.p3}</p>
                                    <p class="duct-top"><em class="duct-tip">
                                    <span class="sp">${cur4.span}</span></em></p>
                                </a>
                            </li>`;
                    }
                }
             $("#flat").html(str4);
        }
    })
    

    // 智能穿戴
    $.ajax({
        type:"get",
        url:"json/smart.json",
        cache : true,   
        success:function(res){
            // console.log(res);
            var str5= "";
            str5 = '<li class="duct-d" id="wr"><a href="details.html"><img class="img1" src="image/smart.png" alt=""></a></li>';
            for(var key in res){
                for(var i = 0;i < res[key].list.length;i++){
                    var cur5 = res[key].list[i];
                    // console.log(cur5);
                        str5+=`<li class="duct-d id="${cur5.id}">
                                    <a href="details.html" class="duct-d1"><p class="duct-d1-s">
                                        <img src="${cur5.src}"/></p>
                                        <div class="duct-title">${cur5.p1}</div>
                                        <p class="duct-desc">${cur5.p2}</p>
                                        <p class="duct-price">${cur5.p3}</p>
                                        <p class="duct-top"><em class="duct-tip">
                                        <span class="sp">${cur5.span}</span></em></p>
                                    </a>
                                </li>`; 
                    }
                 $("#smart").html(str5);
            }
        }
    })
    //z智能穿戴
    $.ajax({
        type:"get",
        url:"json/wearer.json",
        cache : true,   
        success:function(res){
            // console.log(res);
            var str6= "";
            for(var key in res){
                for(var i = 0;i < res[key].list.length;i++){
                    var cur6 = res[key].list[i];
                    // console.log(cur6);
                    for(var i = 0; i < res[key].list.length;i++){
                                var cur6 = res[key].list[i];
                                str6+=`<li class="wear">
                                    <a href="details.html"><div class="wear-info"><p class="wear-img">
                                    <img src="${cur6.src}"/></p>
                                    <p class="wear-desc">${cur6.p1}</p></div>
                                    <div class="wear-title">${cur6.p2}</div>
                                    <p class="wear-price">${cur6.p3}</p>
                                    </a>
                                    </li>`;
                                }
                            }
                        $("#wearer").html(str6);
                   }
               }
    })


    // 智能家居
    $.ajax({
        type:"get",
        url:"json/home.json",
        cache : true,   
        success:function(res){
            // console.log(res);
            var str7= "";
            str7 = '<li class="duct-d" id="wr"><a href="details.html"><img class="img1" src="image/home.png" alt=""></a></li>';
            for(var key in res){
                for(var i = 0;i < res[key].list.length;i++){
                    var cur7 = res[key].list[i];
                    // console.log(cur5);
                        str7+=`<li class="duct-d id="${cur7.id}">
                                    <a href="details.html" class="duct-d1"><p class="duct-d1-s">
                                        <img src="${cur7.src}"/></p>
                                        <div class="duct-title">${cur7.p1}</div>
                                        <p class="duct-desc">${cur7.p2}</p>
                                        <p class="duct-price">${cur7.p3}</p>
                                        <p class="duct-top"><em class="duct-tip">
                                        <span class="sp">${cur7.span}</span></em></p>
                                    </a>
                                </li>`; 
                    }
                 $("#home").html(str7);
            }
        }
    })
    $.ajax({
        type:"get",
        url:"json/gence.json",
        cache : true,   
        success:function(res){
            // console.log(res);
            var str8= "";
            for(var key in res){
                for(var i = 0;i < res[key].list.length;i++){
                    var cur8 = res[key].list[i];
                    // console.log(cur6);
                    for(var i = 0; i < res[key].list.length;i++){
                                var cur8 = res[key].list[i];
                                str8+=`<li class="wear">
                                    <a href="#"><div class="wear-info"><p class="wear-img">
                                    <img src="${cur8.src}"/></p>
                                    <p class="wear-desc">${cur8.p1}</p></div>
                                    <div class="wear-title">${cur8.p2}</div>
                                    <p class="wear-price">${cur8.p3}</p>
                                    </a>
                                    </li>`;
                                }
                            }
                        $("#gence").html(str8);
                   }
               }
    })


    //  热销配件
    $.ajax({
        type:"get",
        url:"json/sell.json",
        cache : true,   
        success:function(res){
            // console.log(res);
            var str9= "";
            str9 = '<li class="duct-d" id="wr"><a href="details.html"><img class="img1" src="image/sell.png" alt=""></a></li>';
            for(var key in res){
                for(var i = 0;i < res[key].list.length;i++){
                    var cur9 = res[key].list[i];
                    // console.log(cur5);
                        str9 +=`<li class="duct-d id="${cur9.id}">
                                    <a href="details.html" class="duct-d1"><p class="duct-d1-s">
                                        <img src="${cur9.src}"/></p>
                                        <div class="duct-title">${cur9.p1}</div>
                                        <p class="duct-desc">${cur9.p2}</p>
                                        <p class="duct-price">${cur9.p3}</p>
                                        <p class="duct-top"><em class="duct-tip">
                                        <span class="sp">${cur9.span}</span></em></p>
                                    </a>
                                </li>`; 
                    }
                 $("#sell").html(str9);
            }
        }
    })

    $.ajax({
        type:"get",
        url:"json/ries.json",
        cache : true,   
        success:function(res){
            // console.log(res);
            var num= "";
            for(var key in res){
                for(var i = 0;i < res[key].list.length;i++){
                    var res1 = res[key].list[i];
                    // console.log(cur6);
                    for(var i = 0; i < res[key].list.length;i++){
                                var res1 = res[key].list[i];
                                num+=`<li class="wear">
                                    <a href="details.html"><div class="wear-info"><p class="wear-img">
                                    <img src="${res1.src}"/></p>
                                    <p class="wear-desc">${res1.p1}</p></div>
                                    <div class="wear-title">${res1.p2}</div>
                                    <p class="wear-price">${res1.p3}</p>
                                    </a>
                                    </li>`;
                                }
                            }
                        $("#ries").html(num);
                   }
               }
    })


    // 品牌配件
    $.ajax({
        type:"get",
        url:"json/brand.json",
        cache : true,   
        success:function(res){
            // console.log(res);
            var num1= "";
            num1 = '<li class="duct-d" id="wr"><a href="details.html"><img class="img1" src="image/brand.png" alt=""></a></li>';
            for(var key in res){
                for(var i = 0;i < res[key].list.length;i++){
                    var res2 = res[key].list[i];
                    // console.log(cur5);
                        num1 +=`<li class="duct-d id="${res2.id}">
                                    <a href="details.html" class="duct-d1"><p class="duct-d1-s">
                                        <img src="${res2.src}"/></p>
                                        <div class="duct-title">${res2.p1}</div>
                                        <p class="duct-desc">${res2.p2}</p>
                                        <p class="duct-price">${res2.p3}</p>
                                        <p class="duct-top"><em class="duct-tip">
                                        <span class="sp">${res2.span}</span></em></p>
                                    </a>
                                </li>`; 
                    }
                 $("#brand").html(num1);
            }
        }
    })

    $.ajax({
        type:"get",
        url:"json/part.json",
        cache : true,   
        success:function(res){
            // console.log(res);
            var num2= "";
            for(var key in res){
                for(var i = 0;i < res[key].list.length;i++){
                    var res3 = res[key].list[i];
                    // console.log(cur6);
                    for(var i = 0; i < res[key].list.length;i++){
                                var res3 = res[key].list[i];
                                num2+=`<li class="wear">
                                    <a href="details.html"><div class="wear-info"><p class="wear-img">
                                    <img src="${res3.src}"/></p>
                                    <p class="wear-desc">${res3.p1}</p></div>
                                    <div class="wear-title">${res3.p2}</div>
                                    <p class="wear-price">${res3.p3}</p>
                                    </a>
                                    </li>`;
                                }
                            }
                        $("#part").html(num2);
                   }
               }
    })

}