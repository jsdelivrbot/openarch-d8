//breakpoints
// jQuery(document).ready(function($){

Breakpoint = (function($) {

	function makeBreak(min,max) {

		var min = min;
		var max = max;
		// var win = $(window);

	    return function() {
	        return ( $(window).width() > min && $(window).width() < max )
	    }
	}

	return {
		isTiny: makeBreak(0, 350),
		isMobile: makeBreak(351, 559),
		isNarrow: makeBreak(560, 750),
		isWide: makeBreak(751, 960),
		isWider: makeBreak(961, 100000)
	}

})(jQuery);

// });