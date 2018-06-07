$(function(){
	var navListTop = $("#nav-list").height();
	$("#about").css("margin-top",navListTop+"px")
	$('#myTab li:eq(1) a').tab('show');

	// 点击下拉
	$(".choose-desc").click(function(){
		$(this).siblings(".choose-list").slideToggle()
	})

    // 定位指定链接对应展示内容
	 var urlwen = getUrlArgObject();
	 // console.log(urlwen.year);
     if(urlwen.year){
        var nowLi = ".about-con-nav li[data-link='"+urlwen.year+"']";
        $(nowLi).parents(".about-con-nav").find('ul li').removeClass('active');
        $(nowLi).parents(".about-con-nav").find('ul li').find(".fa").css("display","none")
        $(nowLi).addClass("active")
        $(nowLi).find(".fa").css("display","inline")
        $("."+urlwen.year).addClass("liboxIn").siblings().removeClass("liboxIn")  
        $("#app-about-nav select").find("option[value='"+urlwen.year+"']").attr("selected",true).siblings().attr("selected",false) 
     }

      if(urlwen.txt){
        switch(urlwen.txt)
        {
            case "schoolOne":
            $(".school-con-nav .data-txt").html("International Education Exhibition Tour");
            
            break;
            case "schoolTwo":
            $(".school-con-nav .data-txt").html("School's Lecture");

            break;
            case "schoolThree":
            $(".school-con-nav .data-txt").html("Communication With Students In Class");
            break;
        }
        $("."+urlwen.txt).addClass("liboxIn").siblings().removeClass("liboxIn")   
     }
    
    
     
	// 导航
	$(".about-con-nav li").click(function(){
    	var linkClass = $(this).attr("data-link")
    	// console.log(linkClass)
    	$(this).parents(".about-con-nav").find('ul li').removeClass('active');
    	$(this).parents(".about-con-nav").find('ul li').find(".fa").css("display","none")
    	$(this).addClass("active")
    	$(this).find(".fa").css("display","inline")
    	
    	$("."+linkClass).addClass("liboxIn").siblings().removeClass("liboxIn")
    	

    })
    $(".about-con-nav h5").click(function(){
        window.location.href = "/geaGlobal/event.html"
    });
	

	
	// console.log(activeyN)
    $.ajax({
    	url:"js/event.json",
    	dataType:"json",
    	type:"get",
    	success:function(data){
    		// console.log(data.schoolOne.length)
    		function resultList(numbox){
    			// console.log(numbox)
    			// console.log(data[numbox])
    			var result = "";
    			for (var i = 0; i < data[numbox].length; i++) {
	    			var imglist = "";
	    			for (var j = 0; j < data[numbox][i].img.length; j++) {
	    				// console.log(data[numbox][i].img.length)
		    			var activeyN = j==0 ? "active" : "";
		    			imglist+='<div class="item '+activeyN+'"><img src="img/event-school/'+data[numbox][i].img[j]+'" alt="'+data[numbox][i].img[j]+'"></div>'
	    			}
	    			result += '<div class="col-xs-12 col-sm-6 col-md-4"><div class="schoolbox"><div id="'+numbox+data[numbox][i].id+'" class="carousel slide school-left">'
						+ '<div class="tabPage"><a class="left" href="#'+numbox+data[numbox][i].id+'" role="button" data-slide="prev">'
						+ '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span>'
						+ '</a><a class="right" href="#'+numbox+data[numbox][i].id+'" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>'
						+ '</div><div class="carousel-inner">'+imglist+'</div>'
                        + '<div class="tagdate"><span class="day">'+data[numbox][i].day+'</span><span class="month">'+data[numbox][i].month+'</span></div></div>'
						+ '<div class="school-right"><p>'+data[numbox][i].title+'</p><p><span class="fa fa-clock-o"></span>'+data[numbox][i].date+'</p>'
						+ '<p><span class="fa fa-map-marker"></span>'+data[numbox][i].address+'</p></div></div></div>'
					
				}
				return result;

    		}
    		
			$(".schoolOne").append(resultList("schoolOne"));
			$(".schoolTwo").append(resultList("schoolTwo"));
			$(".schoolThree").append(resultList("schoolThree"));

    	}
    })


    $("#app-about-nav select").change(function(){
        var vals = $(this).val()
        console.log(vals)
        $("."+vals).addClass("liboxIn").siblings().removeClass("liboxIn")
        
    })
})
//url问号后面返回的是对象形式的参数    
function getUrlArgObject(){    
    var args=new Object();    
    var query=location.search.substring(1);//获取查询串    
    var pairs=query.split(",");//在逗号处断开    
    for(var i=0;i<pairs.length;i++){    
        var pos=pairs[i].indexOf('=');//查找name=value    
        if(pos==-1){//如果没有找到就跳过    
            continue;    
        }    
        var argname=pairs[i].substring(0,pos);//提取name    
        var value=pairs[i].substring(pos+1);//提取value   
        // console.log(decodeURI(value)) 
        args[argname]=decodeURI(value);//存为属性    
    }    
    return args;//返回对象    
}   
