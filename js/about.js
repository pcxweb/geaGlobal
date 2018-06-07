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
	
})