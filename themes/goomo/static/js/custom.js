
$(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 280) {
        $('.right-sidebar').addClass('affix');
         $('.smooth-scroll').addClass('fixed-top');
    } else{
        $('.right-sidebar').removeClass('affix');
         $('.smooth-scroll').removeClass('fixed-top');
    }

 toScroll = $(document).height() - $(window).height() - 250;
  if ( $(this).scrollTop() > toScroll ) {
   $('.right-sidebar').removeClass('affix');
  }
});  

$(document).ready(function(){
  $('#secondry-menu li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
});
$(document).ready(function() {
  var showChar = 200;
  var ellipsestext = "...";
  var moretext = "Read more";
  var lesstext = "less";
  $('.more').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar-1, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });

  $(".morelink").click(function(){
    if($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });

});

    (function($){
      $(window).on("load",function(){
        
        $("#important-details").mCustomScrollbar({
          setHeight:640,
          theme:"dark-thin"
        });
   
      });
    })(jQuery);