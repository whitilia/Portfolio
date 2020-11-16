$(function(){
	//portfolio
	$(".over a").append("<span class='bar'></span>");
	$(".list li").each(function(){
		$(this).hover(function(){
			if($(window).width()>640){
				$(".overWrap", this).stop().fadeIn(300);
				$(".over a span.bar", this).stop().animate({width : 50},300);
				$(".over a span.tit", this).stop().animate({top : "44%", opacity : 1},300);
				$(".over a span.txt" ,this).stop().animate({top : "56%", opacity : 1},300);
			}
			return false;
		},function(){
			$(".overWrap",this).stop().fadeOut(300);
			$(".over a span.bar", this).stop().animate({width : 0},300);
			$(".over a span.tit", this).stop().animate({top : "50%", opacity : 0},300);
			$(".over a span.txt" ,this).stop().animate({top : "50%", opacity : 0},300);
		});
        
        $(this).click(function(){
            $(".popup").scrollTop(0);
            $("#wrap").delay(600).fadeOut(300);
            $(".popup_con").load($("a",this).attr("href"));
            $(".popup").stop().animate({"left": 0 },600);
            $(".btn_close").delay(600).fadeIn(200);
            return false;
        });
        $(".btn_close").on("click",function(){
            $("#wrap").fadeIn(300);
            $(".btn_close").fadeOut(200);
            $(".popup").stop().animate({"left": "100%"},600);
            return false;
        });
	});


	//sidemenu
	var sdm = $(".sidemenu ul li");
	$(".btn_menu").append("<div class='bg'></div>");
	$(".btn_menu").on("click",function(){
		if($(".sidemenu").css("display") == "none"){
			$(".sidemenu ul li").css("opacity", 0);
			$(".bg",this).stop().animate({backgroundColor:"transparent"},400);
			$(".bg_black").fadeIn();
			$(this).removeClass("open");
			$(this).addClass("close");
			if($(window).width() < 640){
				$(this).stop().animate({left: "260px"},400);
			}else{
				$(this).stop().animate({left: "230px"},400);
			}
			$(".sidemenu").stop().show().animate({left: 0},300);
			for(var i = 0; i < sdm.length; i++){
				sdm.eq(i).stop().animate({"opacity":1},500 * i);
			}
			return false;
		}else{
			$(".bg",this).stop().delay(200).animate({backgroundColor:"#2b3139"},300);
			$(".bg_black").fadeOut(300);
			$(this).removeClass("close");
			$(this).addClass("open");
			$(this).stop().animate({left: "0"},300);
			$(".sidemenu").stop().animate({left: -300},400,function(){
				$(".sidemenu").hide();
				$(".sidemenu ul li").css("opacity", 0);
			});
		}
		return false;
	});

	//graph
	$(".article.graph span.bar").append("<span class='percent'></span>");
	$(window).load(function(){
		var graphNum = $(".article.graph li").length;
		for(var i = 0; i < graphNum; i++ ){
			var percentage = $(".article.graph li").eq(i).find(".tit .per").text();
			$(".article.graph li").eq(i).find("span.bar .percent").stop().animate({width: percentage},1000);
		}
	});

	//popup
	

	//button
	$(".btn").hover(function(){
		$(this).removeClass("off");
		$(this).addClass("on");
	},function(){
		$(this).removeClass("on");
		$(this).addClass("off");
	});
});