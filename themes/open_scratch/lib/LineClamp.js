(function($) {

	$(document).ready(function() { clamp() });
    $(window).resize(function() { clamp() });

    function clamp() { //safe reset

		$('.lc--2 p').each(function(index, element) {
	        $clamp(element, { 
	        	clamp: 2 
	        	// useNativeClamp: false 
	        });
	    });

	    $('.lc--3 p').each(function(index, element) {
	        $clamp(element, { 
	        	clamp: 3 
	        	// useNativeClamp: false 
	        });
	    });

	    $('.lc--4 p').each(function(index, element) {
	        $clamp(element, { 
	        	clamp: 4 
	        	// useNativeClamp: false 
	        });
	    });
	};

})(jQuery);