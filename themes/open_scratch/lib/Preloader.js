MyPreloader = (function($) {

var $loader = $('.preloader');
var $screen = $('.preloader-screen');
var $content = $('.preloaded-content');

$(document).ready(function () {

	hidePage();

	//reset
	MyFlexslider.reset(); 	
	MyFullpage.reset();
	MySlider.reset(); //after fullpage
	MyMenu.reset(); //after slider
	MyVisor.update(); //after fullpage and slider
    
});

$(window).load(function(){
	showPage();
});

function hidePage() {

	console.log('hide page');

	$screen.addClass('bg--white');
}

function showPage() {

	console.log('show page');

	$loader.css('display', 'none');
	$content.css('display', 'block');
	$screen.delay(500).fadeOut(function() {
		$screen.removeClass('bg--white');
		$screen.show();
	});
}

})(jQuery);

