MyPreloader = (function($) {

var $loader = $('.preloader');
var $screen = $('.preloader-screen');
var $content = $('.preloaded-content');

$(document).ready(function () {
	$screen.addClass('bg--white');
});

$(window).load(function(){
	preload();
});

function preload() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {

	console.log('showPage');

	$loader.css('display', 'none');
	$content.css('display', 'block');
	$screen.delay(500).fadeOut(function() {
		$screen.removeClass('bg--white');
		$screen.show();
	});
}

})(jQuery);

