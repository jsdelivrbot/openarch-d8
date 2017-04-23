// Let resize handle orientation change handling because resize
// always occurs with orientation change but not vis versa

Orient = (function($) {

	// $(document).ready(function() { Resizer.reset(); });

	function isLandscape() {

		if (
 			// (screen.orientation.angle == 90)
			// || (window.innerWidth > window.innerHeight)
			// || (screen.orientation.type.match(/\w+/)[0] === "landscape")
			(window.matchMedia("(orientation:landscape)").matches)
			|| (window.orientation == 90)
			|| (window.orientation == -90)) 
		{ 
            return true;

        } else  {

            return false;
        }
	}
		
	return {
		
		isLandscape: isLandscape
	}

})(jQuery);