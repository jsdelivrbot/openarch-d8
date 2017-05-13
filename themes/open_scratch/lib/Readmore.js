
MyReadmore = (function($) {

	//cache dom
	var $bd = $('.bd--expandable');

	$(document).ready(function() {
		init();
	});	

	//see options at https://github.com/jedfoster/Readmore.js
	function init() {

	    $bd.readmore({
	    	speed: 300,
	      	moreLink: '<a class="morelink" href="#">More...</a>',
	      	lessLink: '<a class="morelink" href="#">Less</a>'
	    });
	}

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