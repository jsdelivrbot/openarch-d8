// var panelExample = $('#panel-example').scotchPanel({
//     containerSelector: 'body', // Make this appear on the entire screen
//     direction: 'left', // Make it toggle in from the left
//     duration: 300, // Speed in ms how fast you want it to be
//     transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
//     clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
//     distanceX: '70%', // Size fo the toggle
//     enableEscapeKey: true // Clicking Esc will close the panel
// });

MyVisor = (function($) {

	//hold state
	var isDown = true; 

	//cache dom
	// var $container = $('.container');
	var $visor = $('.visor');

	//bindings
	$(document).ready(function() { init() });
    $(window).scroll(function() { update() });
    $(window).resize(function() { update() });
	// $('.slider-toggler').click(function() { toggle() });

	function init() {

		update();
	}

	function down() {

		//if has close, then it is wide breakpoint with drawer closed
		if ($visor.hasClass('up')) { 
			$visor.removeClass('up');
		} 

		isDown = true;
	};

	function up() {

		//if has open, then it is mobile breakpoint with drawer open
		if ($visor.hasClass('up')) { 
			/* bad state? */ 
		} else { 
			$visor.addClass('up'); 
		}

		isDown = false;
	};

	function showedge() {

		//if has open, then it is mobile breakpoint with drawer open
		// $visor.addClass('border--b-lighter'); 
		$visor.addClass('drop--b'); 

	};

	function hideedge() {

		//if has open, then it is mobile breakpoint with drawer open
		// $visor.removeClass('border--b-lighter'); 
		$visor.removeClass('drop--b');

	};

	function update() {

		$scroll = $(window).scrollTop();

		// $root-font-size-tiny: 		12;
		// $root-font-size-mobile: 		13;
		// $root-font-size-narrow: 		14;
		// $root-font-size-wide: 		14;
		// $root-font-size-wider: 		15;
		// $root-font-size-widest: 		15;
		// $root-font-size-full: 		17;

		$rootFont = parseFloat($("html").css("font-size"));
		$bufferSize =  5.0 * $rootFont * 2;

		// if (Breakpoint.isTiny()) { 
		// 	$bufferSize =  3.75 * $rootFont;
		// } else { 
		// 	$bufferSize =  5.0 * $rootFont * 2;
		// }

		if ($scroll > $bufferSize) {
			showedge();
		} else {
			hideedge();
		}

		if ($scroll > ($bufferSize * 5)) {
			up();
		} else {
			down();
		}
	};

	// function getScroll() {
	// 	$scroll = $container.scrollTop();
	// };

	//public methods
	function toggle() {

		isDown ? up() : down();

	};

	//public API
	public_API = {
		toggle: toggle,
		up: up,
		down: down
	};

	return public_API

})(jQuery);