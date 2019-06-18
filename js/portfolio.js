$(function(){
    $(".section01 .popup").click(function(){
        $(".section04").removeClass('none');
    });
    $(".section04 .close").click(function(){
        $(".section04").addClass('none');
    });

    $(".section01 .logo").click(function(){
        var offset = $(".section01").offset();
        $('html, body').animate({scrollTop : offset.top}, 1000);
    });
    $(".section01 .scroll").click(function(){
        var offset = $(".section02").offset();
        $('html, body').animate({scrollTop : offset.top}, 1000);
    });

    $(".section03 .works_list li a").click(function(){
        $(".section03 .works_list li a .tip").removeClass('active');
        $(this).find(".tip").addClass('active')
    });

    $(".section03 .works_list li").click(function(){
        var index = $(".section03 .works_list li").index(this) + 1;
        var page_w = $("html").width();
        if(page_w <= 640){
            $(".section03 .works_list li .work_detail").remove();
            $(".section03 .work_detail .detail_area").removeClass('active');
            $(".section03 .work_detail").clone().addClass('w640').appendTo(this);
            $(".section03 .work_detail.w640 .detail_area.list" + index).addClass('active');
        }else{
            $(".section03 .works_list li .work_detail").remove();
            $(".section03 .work_detail .detail_area").removeClass('active');
            $(".section03 .work_detail .detail_area.list" + index).addClass('active');
        }

    });
    console.log(a);
});