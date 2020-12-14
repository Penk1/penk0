$(function(){
  
  var $element = $('#hide');
  setInterval(function () {

    $element.fadeIn(10).fadeOut(10).delay(10).fadeIn(10).delay(10).fadeOut(10).delay(10).fadeIn(10).delay(10);

  }, 1000);

    

  
  


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

