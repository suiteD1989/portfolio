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

	   	$(".hamburger").toggleClass("is-active");
		$(".dropdown-content").toggleClass('toggle-visibilty');
    	$(".dropdown-content a").toggleClass('show-hide');
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

function validateSubmit() {
	$('#contact-form').submit(function(e) {
	
  	e.preventDefault(); 
  	if ( $(this).parsley().isValid() ) {

  		var data = $('#contact-form').serialize();

		$.ajax({
	        url: 'contact.php',
	        type: 'POST',
	        data: data,
	        success:function(){
	            $('#contact-form')[0].reset();
	            $('.form-success').addClass('is-visible');
	        },
	        error: function(XMLHttpRequest, textStatus, errorThrown) {
	        	$('.form-fail').addClass('is-visible');
	        }
	    });  
   	}
});
}

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};

function getYear() {
	var date = (new Date().getFullYear());

	$('.date').append(date);
}
// Declaration ends

$(document).ready(function() {
	navToggle();
  	scrollToSection();
  	scrollToTop();
  	hasAnimation();
  	validateSubmit();
  	getYear();
});

$(window).on('resize scroll', function() {
	$('.section-animate').each(function(){
		var section = $(this).attr('id');

		if ($(this).isInViewport()) {
			$('.'+section+'-animation').each(function(index) {
				$(this).delay($(this).data('delay')).queue(function(){
	  				$(this).addClass('animate-in');
				});
  			});
    	} 
	});
});