$(function(){
	$('.panel-collapse').on('show.bs.collapse', function () {
		// $(this).siblings(".panel-heading").find(".fa").css("color","#fff")
	    $(this).siblings(".panel-heading").find(".fa").addClass("fa-minus").removeClass("fa-plus")
	    // console.log($(this).siblings(".panel-heading").html())
	})
	$('.panel-collapse').on('hide.bs.collapse', function () {
		// $(this).siblings(".panel-heading").find(".fa").css("color","#fff")
	    $(this).siblings(".panel-heading").find(".fa").addClass("fa-plus").removeClass("fa-minus")
	    // console.log($(this).siblings(".panel-heading").html())
	})
	
	function aboutSize(){
		var screenW = $(window).width();
		if(screenW>768){
			var aboutRightMenu = $(".about-right-menu").outerWidth();
			$("#about-con .con-box .aboutconbox-right").width(aboutRightMenu);
			$("#about-con .con-box .aboutconbox-left").width(screenW-aboutRightMenu)
		}
	}
	aboutSize()
	
	var navListTop = $("#nav-list").height();
	$("#about").css("margin-top",navListTop+"px")
	$(window).resize(function(){
        aboutSize()
    })

    // 左侧部分导航

    $(".about-con-nav li").click(function(){
    	var inId = $(this).index()
    	// console.log(inId)
    	$(this).find(".fa").css("display","inline")
    	$(this).addClass("active").siblings('li').removeClass('active');
    	$(this).siblings('li').find(".fa").css("display","none")
    	$(".li_"+inId).addClass("liboxIn").siblings(".libox").removeClass("liboxIn")
    	if(inId>0){
    		$(".about-con-left .desc").css("display","none")
    	}else{
    		$(".about-con-left .desc").css("display","block")
    	}

    })
    $(".about-con-nav h5").click(function(){
    	window.location.href = "/geaGlobal/about.html"
    })

    $("#app-about-nav select").change(function(){
        var vals = $(this).val()
        console.log(vals)
        $(".li_"+vals).addClass("liboxIn").siblings(".libox").removeClass("liboxIn")
        if(vals>0){
            $(".about-con-left .desc").css("display","none")
        }else{
            $(".about-con-left .desc").css("display","block")
        }
    })

    // 定位指定链接对应展示内容
     var urlwen = getUrlArgObject();
     // console.log(urlwen)
     if(urlwen.tag){
        var inIdnum = 0;
        if(urlwen.tag=="leadership"){
            inIdnum = 1;
        }else if(urlwen.tag=="history"){
            inIdnum = 2;
        }else{
            inIdnum = 0
        }
        // console.log(inIdnum)
        $(".about-con-nav li").eq(inIdnum).find(".fa").css("display","inline")
        $(".about-con-nav li").eq(inIdnum).addClass("active").siblings('li').removeClass('active');
        $(".about-con-nav li").eq(inIdnum).siblings('li').find(".fa").css("display","none")
        $(".li_"+inIdnum).addClass("liboxIn").siblings(".libox").removeClass("liboxIn")
        if(inIdnum>0){
            $(".about-con-left .desc").css("display","none")
        }else{
            $(".about-con-left .desc").css("display","block")
        }
     }
	
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