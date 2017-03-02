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
	var $toggle = $visor.find('.visor-toggler');
	var $nameplate = $('.nameplate');

	//bindings
	$(document).ready(function() { init() });
	$(window).resize(function() { init() });
    $(window).scroll(function() { update() });
	// $('.slider-toggler').click(function() { toggle() });

	$(document).on('keydown', function (event) {          
        if (event.keyCode == 72) { // "h" for header    
            toggle()
        }
    });

	function init() {

		// $isFullpage = (
		// 	Breakpoint.isWidest() || Breakpoint.isFull()) 
	 //        && (window.location.pathname == "/" 
  //           || window.location.pathname == "/openarch-d8/"
  //           );

  		enable();
		update();

  //       $isFullpage = (window.location.pathname == "/" 
  //           || window.location.pathname == "/openarch-d8/"
  //           );

		// if ($isFullpage) {
	 //        disable();
	 //    } else {
	 //    	enable();
		// 	update();
		// }
	}

	function down() {

		$isFullpage = (window.location.pathname == "/" 
            || window.location.pathname == "/openarch-d8/"
            );

		$visor.removeClass('up');

		if($isFullpage) {
			$nameplate.fadeOut();
		}

		isDown = true;
	};

	function up() {


		$visor.addClass('up'); 
		// $nameplate.fadeIn();

		isDown = false;
	};

	function addStyle() {

		//if has open, then it is mobile breakpoint with drawer open
		// $visor.addClass('border--b-lighter'); 
		$visor.addClass('bg--white'); 
		$visor.addClass('drop--b'); 
	};

	function removeStyle() {

		//if has open, then it is mobile breakpoint with drawer open
		// $visor.removeClass('border--b-lighter'); 
		$visor.removeClass('bg--white');
		$visor.removeClass('drop--b');
	};

	function disable() {

		// if ($visor.hasClass('visor')) { 
			$visor.removeClass('visor'); 
		// } 
	}

	function enable() {

		// if (!$visor.hasClass('visor')) { 
			$visor.addClass('visor'); 
		// }	
	}

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

		$isFullpage = (window.location.pathname == "/" 
            || window.location.pathname == "/openarch-d8/"
            );

		if (!$isFullpage) {

			if ($scroll > $bufferSize) {
				addStyle();
			} else {
				removeStyle();
			}

			if ($scroll > ($bufferSize * 5)) {
				up();
			} else {
				down();
			}

		} else {

			//Let Fullpage.js handle this
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
		down: down,
		disable: disable,
		enable: enable
	};

	return public_API

})(jQuery);
