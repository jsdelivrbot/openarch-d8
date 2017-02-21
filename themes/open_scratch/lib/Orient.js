Orient = (function($) {

	// var ls;

	// $(window).on( "orientationchange", function( event ) { 
 	// 		isLandscape() 
 	// });

	function isLandscape() {

		if ((screen.orientation.angle === 90)
			|| (window.innerWidth > window.innerHeight)
			|| (screen.orientation.type.match(/\w+/)[0] === "landscape")
			|| (window.matchMedia("(orientation:landscape)").matches)) { //landscape
            return true;
        } else  {
            return false;
        }
	}
	

	// function isLandscape2() {

	// 	if(window.innerWidth > window.innerHeight) { 
 //            return true;
 //        } else  {
 //            return false;
 //        }
	// }

	// function isLandscape3() {

	// 	if(screen.orientation.type.match(/\w+/)[0] === "landscape") { 
 //        } else  {
 //            return false;
 //        }
	// }
		
	return {
		
		isLandscape: isLandscape
	}

})(jQuery);