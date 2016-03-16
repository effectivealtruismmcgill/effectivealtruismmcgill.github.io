
$(window).load(function() {
  $(".loader").fadeOut("slow");
});

function check_if_in_view() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($('.animation-element'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}


function onScroll(event){
    check_if_in_view();
    var scrollPos = $(document).scrollTop();
    arrayofnavbar=['.nav-slide.open ul li','.longbar']
    len=arrayofnavbar.length;
    for(var i=0; i < len; i++){
        $(arrayofnavbar[i]).each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("offset"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    };
}

toggled = false;
maptoggled=false;
$(document).ready(function(){
  $("#bottomicon").click(function(){
    if(maptoggled==false){
        $("#map").css("height","300px");
        setTimeout(function(){ $('html, body').animate({
        scrollTop: $(document).height()
        }, 900); }, 600);
        maptoggled=true;
    }else{
        $("#map").css("height","0");
        maptoggled=false;
    }
  });
  $( ".longbar").on( "mouseenter", function() {
    var corid= $(this).attr("cor");
    if(!$(corid).hasClass("active")){
      $(corid).addClass("active");
    };
  }).on( "mouseleave", function() {
      var corid= $(this).attr("cor");
      var scrollPos = $(document).scrollTop();
      var refElement = $($(corid).attr("offset"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

      }
      else{
          $(corid).removeClass("active");
      }
  });

    $(document).on("scroll", onScroll);

    $(document).on('scroll', check_if_in_view);

    $("#leftsidebar li,.longbar").click(function(){
      $("body, html").animate({ 
          scrollTop: $($(this).attr("offset")).offset().top
      }, 400);
  		$("li").removeClass("active");
  		$(this).addClass("active");
  	})
    $("#upscroll").click(function(){
      $("body, html").animate({ 
          scrollTop:0
      }, 600);
    })
    $("#toggle").click(function(){
      	if (!toggled)
  		{
  			$("#site-wrapper").addClass("open");
  			$("#fist").addClass("fisttransformed");
  			$("#second").addClass("scondtransformed");
  			$("#third").addClass("thirdtransformed");
        $(".nav-icon div").css("background-color","white");
          	toggled = true;
  		}
  		else
  		{
  			$("#site-wrapper").removeClass("open");
  			$("#fist").removeClass("fisttransformed");
  			$("#second").removeClass("scondtransformed");
  			$("#third").removeClass("thirdtransformed");
        $(".nav-icon div").css("background-color","black");
          	toggled = false;
  		}
    });
});