(function($) {

	var $input = $('.expandable input');

	$(document).ready(function() { 

		// Expand first few elements in expandable lists
	    $("input.expand1:lt(1)").attr('checked', true);
	    $("input.expand3:lt(3)").attr('checked', true);
	    $("input.expand5:lt(5)").attr('checked', true);
	    
		// Collapse some things on task for mobile
	    if (Breakpoint.isMobile() || Breakpoint.isTiny()) {

	    	$("input.collapseMobile").attr('checked', false);
	    }

    });

})(jQuery);