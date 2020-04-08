//DropDownmenu
$(function(){
  $("ul.c-menu li").hover(function(){
    $("ul.sub:not(:animated)", this).slideDown();
  }, function(){
    $("ul.sub", this).slideUp();
  });
});
//spメニュー
  $('.js-toggle-sp-menu').on('click',function(){
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
