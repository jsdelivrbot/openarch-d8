// var panelExample = $('#panel-example').scotchPanel({
//     containerSelector: 'body', // Make this appear on the entire screen
//     direction: 'left', // Make it toggle in from the left
//     duration: 300, // Speed in ms how fast you want it to be
//     transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
//     clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
//     distanceX: '70%', // Size fo the toggle
//     enableEscapeKey: true // Clicking Esc will close the panel
// });

MySlider = (function($) {

	//hold state
	// var isOpen = false;
	// var isOpen = (Breakpoint.isWide() || Breakpoint.isWider());
	// var isWide = (Breakpoint.isWide() || Breakpoint.isWider());
	// var isFull = (Breakpoint.isWidest())
	// var onTask = false;
	// var onFrontPage = false;

	//cache dom
	var $slider = $('.slider');
	var $drawer = $slider.find('.slider-drawer');
	var $canvas = $slider.find('.slider-canvas');
	var $toggle = $slider.find('.slider-toggler');
	var $screen = $slider.find('.slider-screen');

	//bindings
	$(document).ready(function() { init(); });

    // $(window).one('resize', function() { reset(); alert("resize")});
	$toggle.click(function() { toggle() });
	$screen.click(function() { toggle() });

	$(document).on('keydown', function (event) {          
        if (event.keyCode == 83) {       
            toggle()
        }
    });

    //private methods

	function init() {

		reset();
	}

	//public methods

	function reset() { //safe reset

		console.log("reset sidebar");

		if (!(Breakpoint.isWide() || Breakpoint.isWider()) || Pg.isFront()) {

            close();

        } else { // Let fullpage close slider if it wants to.

        	MyFullpage.isEnabled() ? close() : open()
        	// !isOpen() ? close() : open()
        	// open();
        } 
	};

	function open() { //safe

		console.log("open sidebar");

		$slider.removeClass('close');
		$slider.addClass('open');
		// isOpen = true;
	};

	function close() { //safe

		console.log("close sidebar");

		$slider.removeClass('open');
		$slider.addClass('close'); 
		// isOpen = false;
	};

	function toggle() { //event 3

		console.log("on sidebar toggle");

		isOpen() ? close() : open();

		//reset
		// MyFlexslider.resize();
		// Resizer.reset();
		MyFlexslider.reset(); 
        MyFlexslider.resize();
	};

	function isOpen() {

		return $slider.hasClass('open');
	}

	//public API

	public_API = {
		toggle: toggle,
		isOpen: isOpen,
		close: close,
		open: open,
		reset: reset
	};

	return public_API

})(jQuery);