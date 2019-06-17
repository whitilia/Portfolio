$(function(){
    $(".section01 .popup").click(function(){
        $(".section04").removeClass('none');
    });
    $(".section04 .close").click(function(){
        $(".section04").addClass('none');
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
        $(".section03 .work_detail .detail_area").removeClass('active');
        $(".section03 .work_detail .detail_area.list" + index).addClass('active');

        var page_w = $("html").width();
        if(page_w <= 640){
            $(".section03 .work_detail").appendTo(this);
        }

    });
    console.log(a);
});