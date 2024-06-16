$(document).ready(function(){

  $(".btn li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    //siblings()매서드 : 선택한 요소의 나머지를 말함

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn(); //hide() fadeIn() 대신 show()도 가능함
  });




});