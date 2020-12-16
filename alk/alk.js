$(function(){
  
  $('#blog').hide();

$('.categry').click(function(){
  
  $(this).find('.text').toggle(50);


});

$('.logo').mouseenter(function(){
  $('#close').fadeIn(500).fadeOut(500);

});




$('.chaos').hover(function(){
  $('#chaos1').hide();
  $('#blog').fadeIn(500);
});





});
