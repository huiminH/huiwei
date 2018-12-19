window.onload = function(){
    $.ajax({
        type:"get",
        url:"json/computer.json",
        cache : true,   
        success:function(res){
            var str3= "";
            for(var key in res){
            //    console.log(key);
            for(var i = 0;i < res[key].list.length;i++){
                var cur3 = res[key].list[i];
                    str3+=`<li class="duct-d id="cur3">
                                <a href="#" class="duct-d1"><p class="duct-d1-s">
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
}
