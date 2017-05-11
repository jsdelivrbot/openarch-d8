(function($) {

	$(document).ready(function() { 

		// if query string exists open toolbar
	    if(document.location.search.length) {      
	        $(".toolbar.peekable input:checkbox").attr('checked', true);
	    }

    });

})(jQuery);