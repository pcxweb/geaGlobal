$(function(){
	// 全屏图片或者视频滚动完毕后
    // $()
    var screenH = $(window).height();
    var screenW = $(window).width();
    // console.log(screenW);
    navScroll()
   
    $(window).scroll(function(){
        navScroll()
    })
    function navScroll(){
        var scrollTop = $(window).scrollTop()
        // console.log("screenH"+screenH +" : scrollTop"+ scrollTop)
        if((scrollTop+170)>=screenH){
            // alert(1)
            $("#nav-menuId").addClass("nav-menu-white")
        }else{
            $("#nav-menuId").removeClass("nav-menu-white")
        }
    }
    $(".nav-down").click(function(){
        $(window).scrollTop(screenH-100)
    })
    $("#btn-menu").click(function(){
        $("#nav-menuId").slideToggle(500);
    })
    $("#nav-menuId li a").click(function(){
        $("#nav-menuId").slideToggle(500);
    })
    
    mediofun(screenW);
    $(window).resize(function(){
        var screenWs = $(window).width();
        mediofun(screenWs); 
    })

    // jq模仿锚点

  $('.nav-menu a[href*="#"]').click(function() {
    // console.log($(this))
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash); //hash 属性是一个可读可写的字符串，该字符串是 URL 的锚部分（从 # 号开始的部分）。
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset-120
        },
        1000);
        return false;
      }
    }
  });

})

function mediofun(screenW){
    console.log(1+":"+screenW)
    if(screenW<580){
        $("#nav-menuId").addClass("hidden-xs-menuId")
        $("#nav-menuId").hide();
    }else{
        $("#nav-menuId").removeClass("hidden-xs-menuId")
        $("#nav-menuId").show();
    }
}

