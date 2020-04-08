$(function(){
  //フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll' ,function(){
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });

  //spメニュー
  $('.js-toggle-sp-menu').on('click',function(){
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });

  $(function(){
    $(window).scroll(function (){
        $('.js-slideIn').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300){
                $(this).css('opacity','2');
                $(this).css('transform','translateX(0)');
        }
      });
    });
  });

});
