// Declare all functions
function navToggle() {
	var $hamburger = $(".hamburger");

  	$hamburger.on("click", function(e) {
    	$hamburger.toggleClass("is-active");
    	$(".dropdown-content").toggleClass('toggle-visibilty');
    	$(".dropdown-content a").toggleClass('show-hide');
	});  
}	

function scrollToSection() {
	$('.section-link').click(function(){
		var target = $(this).attr("section-target");

		$('html, body').animate({
	        scrollTop: $("#"+target).offset().top
	    }, 500);
	});
}

function scrollToTop() {
	$('.return-top').click(function(){
		
		$('html, body').animate({
	        scrollTop: $("#main").offset().top
	    }, 500);
	});
}

function hasAnimation() {
	$('.has-animation').each(function(index) {
		$(this).delay($(this).data('delay')).queue(function(){
	  		$(this).addClass('animate-in');
		});
  	});
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Declaration ends

$(document).ready(function() {
	navToggle();
  	scrollToSection();
  	scrollToTop();
  	hasAnimation();
});

$(window).scroll(function(){
  
    if(isScrolledIntoView('#main')) {
		
    }
});