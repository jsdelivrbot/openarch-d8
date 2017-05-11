(function($) {

	$(document).ready(function() { 

		// Expand first few elements in expandable lists
	    $(".news-item.expandable input:checkbox:lt(3)").attr('checked', true);
	    $(".event-teaser.expandable input:checkbox:lt(5)").attr('checked', true);
	    $(".book-item.expandable input:checkbox").attr('checked', true); 

		// Collapse some things on task for mobile
	    if (Breakpoint.isMobile() || Breakpoint.isTiny()) {

	        // $("input#related-media").attr('checked', false);
	        $("input#related-work").attr('checked', false);
	        $("input#data").attr('checked', false);
	    }

    });

})(jQuery);