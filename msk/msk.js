$(function(){

 
   $('#penktv').hide();
   $('.tv').mouseover(function(){
     $('#penktv').fadeIn(5).css('background-color','grey').fadeOut(100);
   });

   $('#button2').click(function(){
    $('.maintainance').fadeIn();
  });

  $('#button2').mouseleave(function(){
    $('.maintainance').fadeOut();
  })
      

 });
