MyVisor = (function($) {

	//cache dom
	var $visor = $('.visor');
	var $content = $visor.find('.visor-content');
	var $toggle = $visor.find('.visor-toggler');
	// var $nameplate = $('.nameplate');

	//bindings
	// $(document).ready(function() { init() });
	// $(window).resize(function() { init() });
    $(window).scroll(function() { update() });

	// $(document).on('keydown', function (event) {   
	//     if (event.ctrlKey && event.altKey && event.keyCode == 72) {    
	//         toggle()
	//     }
	// });

	//private

	function init() {
		update();
	}

	function addStyle() {

		$visor.addClass('bdb'); 
		$visor.addClass('bdc--ltr'); 
		$visor.addClass('bg--white'); 
		// $visor.addClass('drop--b'); 
	};

	function removeStyle() {

		$visor.removeClass('bdb'); 
		$visor.removeClass('bdc--ltr'); 
		$visor.removeClass('bg--white');
		// $visor.removeClass('drop--b');
	};

	function hideContent() {
		$content.fadeOut(200);
	}

	function showContent() {
		$content.fadeIn(200);
	}

	//public

	function down() {
		$visor.removeClass('up');	
	};

	function up() {
		$visor.addClass('up'); 
	};

	function isDown() {
		return !$visor.hasClass('up');
	}

	function update() {

		$scroll = $(window).scrollTop();
		$rootFont = parseFloat($("html").css("font-size"));
		$bufferSize =  5.0 * $rootFont * 2;

		if (!MyFullpage.isEnabled()) { 

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

		} //else let Fullpage.js handle it

		// whether fullpage or not, this logic still applies
		if (($scroll > 0) || MySlider.isOpen()) {
			hideContent();
		} else {
			showContent();
		} 

	};

	//public methods
	function toggle() {	
		isDown() ? up() : down();
	};

	//public API
	public_API = {
		toggle: toggle,
		up: up,
		down: down,
		update: update
	};

	return public_API

})(jQuery);
