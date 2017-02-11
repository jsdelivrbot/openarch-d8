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
	var isOpen = (Breakpoint.isWide() || Breakpoint.isWider());
	var isWide = (Breakpoint.isWide() || Breakpoint.isWider());
	var isFull = (Breakpoint.isWidest())

	//cache dom
	var $slider = $('.slider');
	var $drawer = $slider.find('.slider-drawer');
	var $canvas = $slider.find('.slider-canvas');
	var $toggle = $slider.find('.slider-toggler');
	var $screen = $slider.find('.slider-screen');

	//bindings
	$(document).ready(function() { init() });
    $(window).resize(function() { reset() });
	$toggle.click(function() { toggle() });
	$screen.click(function() { toggle() });

	function init() {

		if(isFull) { $slider.addClass('close'); isOpen = false;}
	}

	function open() {

		//if has close, then it is wide breakpoint with drawer closed
		if ($slider.hasClass('close')) { 
			$slider.removeClass('close');
		} else { 						
			$slider.addClass('open'); 
		}

		isOpen = true;
	};

	function close() {

		//if has open, then it is mobile breakpoint with drawer open

		if ($slider.hasClass('open')) { 
			$slider.removeClass('open'); 
		} else { 
			$slider.addClass('close'); 
		}

		isOpen = false;
	};

	function reset() {

		wasWide = isWide;
    	isWide = (Breakpoint.isWide() || Breakpoint.isWider() || Breakpoint.isWidest());
    	wasFull = isFull;
    	isFull = (Breakpoint.isWidest());

    	if(!wasWide && isWide && !isOpen) { isOpen = true;}
    	if(!wasWide && isWide && isOpen) { $slider.removeClass('open close'); isOpen = true;}
    	if(wasWide && !isWide && !isOpen) { $slider.removeClass('open close'); }
    	if(wasWide && !isWide && isOpen) { isOpen = false; }
    	if(isFull) { $slider.addClass('close'); isOpen = false;}
    	if(wasFull && !isFull) { $slider.removeClass('close'); isOpen = true;}

	};

	function isitOpen() {

		// return isOpen
	};


	//public methods
	function toggle() {

		isOpen ? close() : open();

	};

	//public API
	public_API = {
		toggle: toggle,
		isOpen: isOpen
	};

	return public_API

})(jQuery);