(function($) {

	//cache dom
	//dom not ready yet

	// $(window).load(function(){
	// 	update();
	// });

	$(document).ready(function() { 
		console.log("doc ready")
		setTimeout(function(){ update() }, 4000);
	});

	$(window).resize(function() { 
		update();
	});

	function update() {

		var $wrapper = $('.featured-work .slide__image');
		var $img = $wrapper.find('img');
		var	$imgAspect = $img.width() / $img.height();
		var $winAspect = $(window).width() / $(window).height();
		
		if ( $winAspect < $imgAspect ) {

			console.log("set fullheight");
		    $wrapper.removeClass('fullwidth');
		    $wrapper.addClass('fullheight');

		} else {

			console.log("set fullwidth");
		    $wrapper.removeClass('fullheight');
		    $wrapper.addClass('fullwidth');
		}				
	}

})(jQuery);