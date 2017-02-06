MyReadmore = (function($) {

	$(document).ready(function() {

        $('.bd--expandable').readmore({
	      	moreLink: '<a class="morelink" href="#">More...</a>',
	      	lessLink: '<a class="morelink" href="#">Less</a>',
	      	collapsedHeight: 257,
	      	afterToggle: function(trigger, element, expanded) {
	        	if(! expanded) { // The "Close" link was clicked
	          		// $('html, body').animate({scrollTop: element.offset().top}, {duration: 100});
	        	}
	      	}
	    });
    });

})(jQuery);