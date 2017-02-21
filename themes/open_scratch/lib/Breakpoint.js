Breakpoint = (function($) {

	function makeBreak(min,max) {

		var min = window.matchMedia("(min-width: " + min.toString() + "px)");
		var max = window.matchMedia("(max-width: " + max.toString() + "px)");

	    return function() {
	        return (min.matches && max.matches)
	    }
	}
		
	return {
		
		isTiny: makeBreak(0, 350),
		isMobile: makeBreak(351, 560),
		isNarrow: makeBreak(561, 750),
		isWide: makeBreak(751, 1050),
		isWider: makeBreak(1051, 1200),
		isWidest: makeBreak(1201, 1440),
		isFull: makeBreak(1441, 100000)
	}

})(jQuery);
