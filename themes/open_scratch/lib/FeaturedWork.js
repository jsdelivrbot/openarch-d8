(function($) {

	//cache dom
	//dom not ready yet

	// $(window).load(function(){
	// 	update();
	// });

	$(document).ready(function() { 
		// console.log("doc ready")
		update();
		// setTimeout(function(){ update() }, 5000);
	});

	$(window).resize(function() { 
		update();
	});

	function update() {

		var $img = $('.featured-work .slide__image');
		// var $img = $wrapper.find('img');
		var	$imgAspect = 1.5; //$img.width() / $img.height();
		var $winAspect = $(window).width() / $(window).height();
		
		if ( $winAspect < $imgAspect ) {

			console.log("set fullheight");
		    $img.removeClass('fullwidth');
		    // $img.addClass('fullheight');

		} else {

			console.log("set fullwidth");
		    // $img.removeClass('fullheight');
		    $img.addClass('fullwidth');
		}				
	}

})(jQuery);