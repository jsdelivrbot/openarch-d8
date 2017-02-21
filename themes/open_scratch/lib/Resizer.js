

Resizer = (function($) {

	// var timer;

 //    $(window).resize(function() { 

 //        
        
 //        clearTimeout(timer);
 //        timer = setTimeout(delayedResize, 500);      
 //    });

 //    function delayedResize(){
 //        MyFlexslider.resize();
 //    }


	var timer;
    $(window).resize(function() {
    	MySlider.reset();	
        clearTimeout(timer);
        timer = setTimeout(doneResizing, 100);
    });

    function doneResizing(){
        console.log('Flexslider resize'); 
   		MyFlexslider.reset();
    }

})(jQuery);