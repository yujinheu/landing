$(document).ready(function(){

  /*메뉴버튼*/
  $(".top_right").click(function(){
    $(".menu_all").stop(true,true).animate({left:"0"});
    $("html").css({overflowY:"hidden"}); 
  });

  $(".main").click(function(){
    $(this).siblings().find(".sub").slideUp(300);
    $(this).siblings().find(">a").removeClass("uparrow")
    $(this).find(".sub").stop().slideToggle(200);
    $(this).find(">a").toggleClass("uparrow");
  });

  /*닫기버튼*/	    
  $(".mright .close").click(function(){  
    $(".menu_all").stop(true,true).animate({left:"-100%"});
    $("html").css({"overflow-y":"scroll"});
  });	


});