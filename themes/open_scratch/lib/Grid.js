(function($) {

	$(document).on('keydown', function (event) {

        if (event.ctrlKey && event.altKey && event.keyCode == 71) {
            $('.grid-target').hasClass('grid-on') 
                ? $('.grid-target').removeClass('grid-on') 
                : $('.grid-target').addClass('grid-on')
        }

    });

})(jQuery);