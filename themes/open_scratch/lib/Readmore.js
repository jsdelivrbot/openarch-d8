//var onTask = (window.location.pathname.indexOf("/task") == 0
//		|| window.location.pathname.indexOf("/openarch-d8/task") == 0
//		|| window.location.pathname.indexOf("/openarch-d8/cn/task") == 0);

//var isLandscape = (screen.orientation.angle == 90);

//if ((Breakpoint.isWidest() || Breakpoint.isFull())
// 		|| !(onTask && isLandscape)) {
// 		alert("init");
//}

MyReadmore = (function($) {

	$(document).ready(function() {

		$('.bd--expandable').readmore({
	      	moreLink: '<a class="morelink" href="#">More...</a>',
	      	lessLink: '<a class="morelink" href="#">Less</a>',
	      	collapsedHeight: 257
	    });
	});

	function init() {

	    $('.bd--expandable').readmore({
	      	moreLink: '<a class="morelink" href="#">More...</a>',
	      	lessLink: '<a class="morelink" href="#">Less</a>',
	      	collapsedHeight: 257
	    });
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