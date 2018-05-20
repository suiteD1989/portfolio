var $hamburger = $(".hamburger");
  	$hamburger.on("click", function(e) {
    	$hamburger.toggleClass("is-active");
    	$(".dropdown-content").toggleClass('toggle-visibilty');
    	$(".dropdown-content a").toggleClass('show-hide');
});  	

var scrollToSection = function() {
	$('.section-link').click(function(){
		var target = $(this).attr("section-target");

		$('html, body').animate({
	        scrollTop: $("#"+target).offset().top
	    }, 500);
	});
}

var scrollToTop = function() {
	$('.return-top').click(function(){
		
		$('html, body').animate({
	        scrollTop: $("#main").offset().top
	    }, 500);
	});
}

$(document).ready(function() {
	$('.has-animation').each(function(index) {
		$(this).delay($(this).data('delay')).queue(function(){
	  		$(this).addClass('animate-in');
		});
  	});

  	scrollToSection();
  	scrollToTop();
});