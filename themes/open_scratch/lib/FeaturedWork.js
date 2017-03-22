(function($) {

	//cache dom
	
	$(window).load(function(){
		update();
	});

	$(window).resize(function() { 
		update();
	});

	function update() {

		var $wrapper = $('.featured-work .slide__image');
		var $img = $wrapper.find('img');

		var	$imgAspectRatio = $img.width() / $img.height();
		var $winAspectRatio = $(window).width() / $(window).height()
		
		if ( $winAspectRatio < $imgAspectRatio ) {

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