
MyReadmore = (function($) {

	//cache dom
	var $bd = $('.bd--expandable');

	$(document).ready(function() {
		init();
		// $bd.hide();
	});	

	$(window).load(function() {

		// init();
		// $bd.show();

		// $bd.delay(1000).readmore('toggle');
	});

	//see options at https://github.com/jedfoster/Readmore.js
	function init() {

	    $bd.readmore({

	    	speed: 300,
	      	moreLink: '<a class="morelink" href="#">More...</a>',
	      	lessLink: '<a class="morelink" href="#">Less</a>'
	      	// startOpen: true

	    //   	beforeToggle: function(trigger, element, expanded) {
			  //   if(! expanded) { 
			  //     	close();
			  //   } else { 
			  //   	open();
			  //   }
		  	// }

	    });


	}

	// function open() { 

	// 	console.log("open text");
	// 	$bd.removeClass('close');
	// };

	// function close() { 

	// 	console.log("close text");
	// 	$bd.addClass('close');
	// };

	function toggle() {

		$bd.readmore('toggle');
	}

    //public API
    public_API = { 
        init: init,
        toggle: toggle
    }
    
    return public_API

})(jQuery);