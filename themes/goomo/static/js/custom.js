
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

    // Show the first 6 images
$("img:lt(13)").show();
  $(".btn-view-less").click(function(){
  $('img').slice(13, 57).hide();
    $('.btn-view-less').css({"display": "none"});
    $('.btn-view-more').css({"display": "block"});
  });
// When the gallery button is clicked
$("#gallery-btn").on('click', function(event) {
  // Prevent default behavior
  $('.btn-view-less').css({"display": "block"});
    $('.btn-view-more').css({"display": "none"});
  event.preventDefault();
  // All of the hidden images
  var $hidden = $("img:hidden");
  // Show the next 6 images
  $($hidden).slice(0, 13).fadeIn(800);
  // If the length of $hidden is 4 then hide the button
  if ($hidden.length == 13) {
    $(this).fadeOut();
  }
});



$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 7;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


  $('#carouselExample').carousel({ 
                interval: 2000
        });