Orient = (function($) {

	var ls;

	$(document).ready(function() { reset(); });

	$(window).on( "orientationchange", function() { 
 		
 		reset(function(){
 			MyFullpage.reset();
 			MySlider.reset();
 		});
 	});

 	function reset(callback) {

 		if (
 			(screen.orientation.angle == 90)
			// || (window.innerWidth > window.innerHeight)
			// || (screen.orientation.type.match(/\w+/)[0] === "landscape")
			|| (window.matchMedia("(orientation:landscape)").matches)
			|| (window.orientation == 90)
			|| (window.orientation == -90)) 
		{ 
            ls = true;
            callback();
        } else  {
            ls = false;
            callback();
        }    
        return true; //done
 	}

	function getLs() {

		return ls;
	}

	// $(window).on("orientationchange",function(){
	// 	if(window.orientation == 0) // Portrait
	// 	{
	// 		$("p").css({"background-color":"yellow","font-size":"300%"});
	// 	}
	// 	else // Landscape
	// 	{
	// 		$("p").css({"background-color":"pink","font-size":"200%"});
	// 	}
	// });
	

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
		
		isLandscape: getLs,
		reset: reset
	}

})(jQuery);