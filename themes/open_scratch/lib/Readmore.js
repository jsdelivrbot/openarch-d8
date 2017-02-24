
MyReadmore = (function($) {

	// $(document).ready(function() {
	$(window).load(function() {

		init();
		// $('.bd--expandable').readmore({
	 //      	moreLink: '<a class="morelink" href="#">More...</a>',
	 //      	lessLink: '<a class="morelink" href="#">Less</a>',
	 //      	collapsedHeight: 257
	 //    });
	});

	//see options at https://github.com/jedfoster/Readmore.js
	function init() {

	    // $('.bd--expandable').readmore({
	    // 	speed: 100 in milliseconds,
	    //   	moreLink: '<a class="morelink" href="#">More...</a>',
	    //   	lessLink: '<a class="morelink" href="#">Less</a>',
	    //   	collapsedHeight: 257,
	    //   	heightMargin: 16
	    // });

	    $('.bd--expandable').readmore({
	    	speed: 200,
	      	moreLink: '<a class="morelink" href="#">More...</a>',
	      	lessLink: '<a class="morelink" href="#">Less</a>'
	    });

	    // $('.bd--expandable').readmore();
	}

    function toggle() {

    	 $('.bd--expandable').readmore('toggle');
    }

    //public API
    public_API = { 
        init: init,
        toggle: toggle
    }
    
    return public_API

})(jQuery);