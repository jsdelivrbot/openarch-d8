(function($) {

	$(document).ready(function() { 

	    // make table rows clickable
	    // $(".row--clickable").click(function() {
	    $(".clickable").click(function() {

	        // var $link = $(this).find("a");
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
	    // $(".row--clickable a").click(function(e) {
	    $(".clickable__target").click(function(e) {
	        e.stopPropagation();
	    });

	    // disable clickable if no target
	    $('.clickable').not(':has(.clickable__target)').removeClass('clickable');

    });

})(jQuery);