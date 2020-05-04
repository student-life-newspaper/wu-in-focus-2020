$(document).ready(function(){

      $("#header-presents").animate({'opacity':'1'}, 800);
      $("#header-logo-container").animate({'opacity':'1'}, 800);
      $("#header-year").animate({'opacity':'1'}, 1000);
      $("#row01, #row02").animate({'opacity': '1'}, 1000);


       $("#story-01-text").load('articles/letter-from-the-editor.html');
       $("#story-02-text").load('articles/new-financial-aid-program.html');
       $("#story-03-text").load('articles/building-a-community.html');
       $("#story-04-text").load('articles/maga-country.html');
       $("#story-05-text").load('articles/orthodox.html');
       $("#story-06-text").load('articles/francis-olympic-field.html');
       $("#story-07-text").load('articles/backpack.html');
       var scroll_start = 1000;
       var startchange = $('#story-01-card');
       var offset = startchange.offset();
       var fadedIn = false;
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top && !fadedIn) {
              $('.navbar-custom').css('background-color', 'rgba(255,25,25,0.7)');
              //fadedIn=true;
           } else {
              $('.navbar-custom').css('background-color', 'transparent');
              //fadedIn=false;
           }
       });

        var fadedIn = false;
        $(window).scroll(function() {
          // console.log("ScrollTop: " + $(window).scrollTop());
          // console.log("Height: " +  $('.top-container').outerHeight());
            if ($(window).scrollTop() > $('.top-container').outerHeight() && !fadedIn) {
              $('.focus-nav').first().animate({opacity: 1}, 'fast');
              $(".jump-top-container").animate({opacity: 1}, 'fast');
              fadedIn = true;
            } else if ($(window).scrollTop() < $('.top-container').outerHeight() && fadedIn) {
              $('.focus-nav').first().animate({opacity: 0}, 'fast');
              $(".jump-top-container").animate({opacity: 0}, 'fast');
              fadedIn = false;
            }
        });

        $(".story-card").click(function() {
          event.preventDefault();
          var thisCardSelector   = "#story-" + $(this).data("number") + "-card";
          var thisTextSelector   = "#story-" + $(this).data("number") + "-text";
          var thisArrowSelector  = "#story-" + $(this).data("number") + "-card > .selection-marker";
          $(".story").not(thisTextSelector).slideUp(400);      //close other stories
          $(thisArrowSelector).fadeToggle();
          if($(thisTextSelector).is(":hidden")){                  //only scroll to top if story is closed
              if($(".story").is(":visible")){
                $("#story-" + $(".story:visible").data("number") + "-card > .selection-marker").fadeOut();
                if($(".story:visible").data("number") < $(this).data("number")){                    //fixes where position to scroll is pulled before story above has closed fully, this scrolling to middle of story to be opened
                  $('html, body').animate({
                      scrollTop: $(this).offset().top - 55 - $(".story:visible").outerHeight(true)
                  }, 400);
                }else{
                  $('html, body').animate({
                      scrollTop: $(this).offset().top - 55
                  }, 400);
                }
              }else{
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 55
                }, 400);
              }
          }
          $(thisTextSelector).slideToggle(400);
        });

        $("#jump-top").click(function() {
            $('html, body').animate({
                scrollTop: $("#story-01-card").offset().top - 55
            }, 400);
        });

        $(window).scroll( function(){


    $('.row').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight()/5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){

            $(this).animate({'opacity':'1'},500);

        }

    });

});

});
