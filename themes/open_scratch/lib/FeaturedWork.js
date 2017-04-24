(function($) {

	// $(document).ready(function() { 
	// 	if (Pg.isFront()) update()
	// });

	$(window).load(function(){
		if (Pg.isFront()) update()
	});

	$(window).resize(function() { 
		if (Pg.isFront()) update()
	});

	function update() {

		var $img = $('.featured-work .slide__image');
		var	$imgAspect = 1.5; //$img.width() / $img.height();
		var $winAspect = $(window).width() / $(window).height();
		
		if ( $winAspect < $imgAspect ) {

			console.log("set fullheight");
			$img.removeClass('fullwidth');

		} else {

			console.log("set fullwidth");
			$img.addClass('fullwidth');
		}	

		// MyFlexslider.reset();			
	}

})(jQuery);