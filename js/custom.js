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

function formSubmit() {
	$('#form-submit').submit(function(e){
    	e.preventDefault();
	    $.ajax({
	        url:'contact.php',
	        type:'post',
	        data:$('#contact-form').serialize(),
	        success:function(){
	            //whatever you wanna do after the form is successfully submitted
	            $('#contact-form')[0].reset();
	            $('.form-success').addClass('is-visible');
	        },
	        error: function(XMLHttpRequest, textStatus, errorThrown) {
	        	$('.form-fail').addClass('is-visible');
	        }
	    });
	});
}

function formValidate() {
	$('#contact-form').parsley().on('field:validated', function() {
    	var ok = $('.parsley-error').length === 0;
	    $('.bs-callout-info').toggleClass('hidden', !ok);
	    $('.bs-callout-warning').toggleClass('hidden', ok);

	    if (ok) {
	    	console.log('alright');
	    }

	    else {
	    	console.log('oh fuck');
	    }
  	})
	.on('form:submit', function() {
		
	});
}

// Declaration ends

$(document).ready(function() {
	navToggle();
  	scrollToSection();
  	scrollToTop();
  	hasAnimation();
  	formValidate();
  	// formSubmit();
});

$(window).scroll(function(){
  
    if(isScrolledIntoView('#contact')) {
		
    }
});