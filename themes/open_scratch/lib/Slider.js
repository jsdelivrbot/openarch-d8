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
	var isToggled = false;

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
        if (event.ctrlKey && event.keyCode == 83) {       
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

		if (Pg.isFront() || MyFullpage.isEnabled()) {

            close();
            isToggled = false;

        } else if(isToggled) {

        	//do nothing

        	// MyFullpage.isEnabled() ? close() : open()
        	// !isOpen() ? close() : open()
        	// open();

        } else if(Breakpoint.isWide() || Breakpoint.isWider()) {

        	open();
        	isToggled = false; //no nec.

        } else {

        	close();
        	isToggled = false; //no nec.
        }
	};

	function open() { //safe

		console.log("open sidebar");

		$slider.removeClass('close');
		$slider.addClass('open');
		// isOpen = true;
		// MyVisor.hideContent();
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

		isToggled = true;

		//reset
		// MyFlexslider.resize();
		// Resizer.reset();
		MyFlexslider.reset(); 
        MyFlexslider.resize();
        MyVisor.update();
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