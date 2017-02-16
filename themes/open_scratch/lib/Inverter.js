MyInverter = (function($) {

    //hold state
    //var isInverted = false;

    //cache dom
    var $toggler = $('.inverter__toggler');
    var $target = $('.inverter__target');

    //bindings
    $(document).ready(function() { init() });
    $(document).on('keydown', function (event) {          
        if (event.keyCode == 73) {       
            toggle()
        }
    });

    $toggler.click(function() { 
        toggle()
    });

    function init() {

        //do nothing
    }

    function toggle() {

        // $('.inverter__target').hasClass('invert') 
        //     ? $('.inverter__target').removeClass('invert') 
        //     : $('.inverter__target').addClass('invert')

        $('table').hasClass('invert') 
            ? $('table').removeClass('invert') 
            : $('table').addClass('invert')
        $('.title').hasClass('invert') 
            ? $('.title').removeClass('invert') 
            : $('.title').addClass('invert')
        $('.tag').hasClass('invert') 
            ? $('.tag').removeClass('invert') 
            : $('.tag').addClass('invert')
        $('.focus').hasClass('invert') 
            ? $('.focus').removeClass('invert') 
            : $('.focus').addClass('invert')
        $('.menu').hasClass('invert') 
            ? $('.menu').removeClass('invert') 
            : $('.menu').addClass('invert')
        $('.bg').hasClass('invert') 
            ? $('.bg').removeClass('invert') 
            : $('.bg').addClass('invert')
        $('body').hasClass('invert') 
            ? $('body').removeClass('invert') 
            : $('body').addClass('invert')
        $('.sidebar').hasClass('invert') 
            ? $('.sidebar').removeClass('invert') 
            : $('.sidebar').addClass('invert')
        $('.c--black').hasClass('c--white') 
            ? $('.c--black').removeClass('c--white') 
            : $('.c--black').addClass('c--white')
    };

    //public API
    public_API = {
        toggle: toggle
    };

    return public_API

})(jQuery);