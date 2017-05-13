(function($) {

	$(document).ready(function() { 

	    // make table rows clickable
	    $(".clickable").click(function() {

	        var $link = $(this).find(".clickable__target");
	        
	        if ($link.length) {

	            if ($link.attr('target') == '_blank') {
	                window.open($link.attr('href'),'_blank');
	            } else {
	                window.document.location = $link.attr('href');
	            }
	        }
	    });

	    // prevent multiple windows from opening
	    $(".clickable__target").click(function(e) {
	        e.stopPropagation();
	    });

	    // disable clickable if no target
	    $('.clickable').not(':has(.clickable__target)').removeClass('clickable');

    });

})(jQuery);