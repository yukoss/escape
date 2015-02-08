
//============Slow scrolling page============================//
(jQuery)(document).ready(function(){
    $("a").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1000);
    });
});
//============End============================================//


//============Appearance of submit=============//
jQuery(function($){
    $("form[method=post]").mouseenter(function(){
        $("input[type=submit]").fadeIn("slow");
    });
    $("form[method=post]").mouseleave(function(){
        $("input[type=submit]").fadeOut("slow");
    });
});
//============End==============================//


//============Fixed Nav===========================================//
(jQuery)(function() {
    $(window).scroll(function(){
        var distanceTop = 630; //$("#service").offset().top - $(window).height();
        if  ($(window).scrollTop() > distanceTop)
            $('#fixed-nav').animate({'top':'0px'},800);
        else
            $('#fixed-nav').stop(true).animate({'top':'-50px'},300);
    });
    $('#fixed-nav .close').bind('click',function(){
        $(this).parent().remove();
    });
});
//============End=================================================//


//============Slide Fixed Nav==============//
(jQuery)(document).ready(function() {
    $("#fixed-nav button").click(function(){
        $("#fixed-nav nav").slideToggle(500);
    });
});
//============End=========================//

//============Slide Header Nav============//
(jQuery)(document).ready(function() {
    $("#home button").click(function(){
        $("#home nav").slideToggle(500);
    });
});
//============End=========================//