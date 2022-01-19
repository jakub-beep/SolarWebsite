// section controlling appearing navbar sticky and button to scroll
$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 20) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function() {
    $('html').css("scrollBehavior", "smooth");
  });
});