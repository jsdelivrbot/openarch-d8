//breakpoints
// jQuery(document).ready(function($){

Breakpoint = (function($) {

	// function makeBreak(min,max) {

	// 	var min = min;
	// 	var max = max;
	// 	// var win = $(window);

	//     return function() {
	//         return ( $(window).width() > min && $(window).width() < max )
	//         // (window.matchMedia('(all and (min-width: 351px) and (max-width: 559px))').matches)
	//     }
	// }

	function makeBreak(min,max) {

		var min = window.matchMedia("(min-width: " + min.toString() + "px)");
		var max = window.matchMedia("(max-width: " + max.toString() + "px)");
		// var win = $(window);

	    return function() {
	        return (min.matches && max.matches)
	    }
	}

	// function isTiny() {
	// 	return window.matchMedia('(all and (max-width: 350px))').matches
	// }

	// function isMobile() {
	// 	return window.matchMedia('(all and (min-width: 351px) and (max-width: 559px))').matches
	// }

	// function isNarrow() {
	// 	return window.matchMedia('(all and (min-width: 560px) and (max-width: 750px))').matches
	// }

	// function isWide() {
	// 	return window.matchMedia('(all and (min-width: 751px) and (max-width: 960px))').matches
	// }

	// function isWider() {
	// 	return window.matchMedia('(all and (min-width: 961px) and (max-width: 1199px))').matches
	// }

	// function isWidest() {
	// 	return window.matchMedia('(all and (min-width: 1200px))').matches
	// }

	return {
		isTiny: makeBreak(0, 350),
		isMobile: makeBreak(351, 559),
		isNarrow: makeBreak(560, 750),
		isWide: makeBreak(751, 960),
		isWider: makeBreak(961, 1199),
		isWidest: makeBreak(1200, 100000)
		// isTiny: isTiny,
		// isMobile: isMobile,
		// isNarrow: isNarrow,
		// isWide: isWide,
		// isWider: isWider,
		// isWidest: isWidest
	}

})(jQuery);

// });