$(function(){

  $('#hide').hide();
    $('.header-0').mouseenter(function(){
     
      $('#hide').fadeIn(50).fadeOut(50).fadeToggle(7);
    });

    $('.header-0').mouseleave(function(){
      $('#hide').hide();
    });


    $('.logo').mouseenter(function(){
      $('#close').fadeIn(500).fadeOut(500);

    });



    


$('.logo-wrapper').mouseenter(function(){
  $('.penk-text').fadeIn(500);

});

$('.logo-wrapper').mouseleave(function(){
  $('.penk-text').fadeOut(9000);
});
    
        

      });
      
    
      
