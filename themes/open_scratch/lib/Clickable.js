(function($) {

	$(document).ready(function() { 

		//make table rows clickable
	    $(".row--clickable a").click(function(e) {
	        e.stopPropagation();
	    });
	    $(".row--clickable").click(function() {

	        var $link = $(this).find("a");
	        
	        if ($link.length) {         
	            if ($link.attr('target') == '_blank') {
	                window.open($link.attr('href'),'_blank');
	            } else {
	                window.document.location = $link.attr('href');
	            }
	        }
	    });

    });

})(jQuery);