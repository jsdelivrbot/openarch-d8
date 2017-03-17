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

	//state
	var isDown = true; 

	//cache dom
	var $visor = $('.visor');
	var $content = $visor.find('.visor-content');
	var $toggle = $visor.find('.visor-toggler');
	var $nameplate = $('.nameplate');

	//bindings
	$(document).ready(function() { init() });
	$(window).resize(function() { init() });
    $(window).scroll(function() { update() });

	$(document).on('keydown', function (event) {   

        if (event.ctrlKey && event.altKey && event.keyCode == 72) { // "h" for header    
            toggle()
        }
    });

	function init() {

  		enable();
		update();
	}

	function down() {

		$visor.removeClass('up');
		isDown = true;

		if(Pg.isFront()) {
			$nameplate.fadeOut();
			// addStyle();
		}	
	};

	function up() {

		$visor.addClass('up'); 
		isDown = false;

		// if(Pg.isFront()) {
		// 	removeStyle();
		// } 
	};

	function hideContent() {

		$content.fadeOut(200);
	}

	function showContent() {

		$content.fadeIn(200);
	}

	function addStyle() {

		//if has open, then it is mobile breakpoint with drawer open
		$visor.addClass('border--b-lighter'); 
		$visor.addClass('bg--white'); 
		// $visor.addClass('drop--b'); 
	};

	function removeStyle() {

		//if has open, then it is mobile breakpoint with drawer open
		$visor.removeClass('border--b-lighter'); 
		$visor.removeClass('bg--white');
		// $visor.removeClass('drop--b');
	};

	function disable() {
		$visor.removeClass('visor'); 
	}

	function enable() {
		$visor.addClass('visor'); 
	}

	function update() {

		$scroll = $(window).scrollTop();
		$rootFont = parseFloat($("html").css("font-size"));
		$bufferSize =  5.0 * $rootFont * 2;

		if (!Pg.isFront()) {

			if ($scroll > $bufferSize) {
				addStyle();
			} else {
				removeStyle();
			}

			if ($scroll > ($bufferSize * 10)) {
				up();
			} else {
				down();
			}

		} else { //Frontpage

			// isDown ? addStyle() : removeStyle();
		}

		if (($scroll > 0) || MySlider.isOpen()) {
			hideContent();
		} else {
			showContent();
		} 
	};

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
		enable: enable,
		update: update,
		addStyle: addStyle,
		removeStyle: removeStyle
	};

	return public_API

})(jQuery);
