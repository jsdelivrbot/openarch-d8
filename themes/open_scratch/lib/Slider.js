MySlider = (function($) {

	//cache dom
	var $slider = $('.slider');
	var $drawer = $slider.find('.slider-drawer');
	var $canvas = $slider.find('.slider-canvas');
	var $toggle = $slider.find('.slider-toggler');
	var $screen = $slider.find('.slider-screen');

	//bindings
	$(document).ready(function() { init(); });
	$toggle.click(function() { toggle() });
	$screen.click(function() { toggle() });

	// $(document).on('keydown', function (event) {          
	// 	if (event.ctrlKey && event.altKey && event.keyCode == 83) {       
	// 		toggle()
	// 	}
	// });

    //private methods

	function init() {
		reset();
	}

	//public methods

	function reset() { //safe reset

		console.log("_reset sidebar");

        if(Breakpoint.isWide() || Breakpoint.isWider() || Breakpoint.isWidest()) {

        	open();

        } else {

        	close();
        }

        // let fullpage close slide if it wants to. no need to close it here.
        // if (Pg.isFront() || MyFullpage.isEnabled()) {
		// if ($('.featured-work').length || MyFullpage.isEnabled()) {
		// 	close();
		// } 
	};

	function toggle() { //event 3

		console.log("_toggle sidebar");

		isOpen() ? close() : open();

		//reset
        MyFlexslider.resize();
        MyVisor.update();
	};

	function open() { //safe

		console.log("__open sidebar");

		$slider.removeClass('close');
		$slider.addClass('open');
	};

	function close() { //safe

		console.log("__close sidebar");

		$slider.removeClass('open');
		$slider.addClass('close'); 
	};

	function isOpen() {

		return $slider.hasClass('open');
	}

	//public API
	public_API = {
		toggle: toggle,
		open: open,
		close: close,
		isOpen: isOpen,
		reset: reset
	};

	return public_API

})(jQuery);