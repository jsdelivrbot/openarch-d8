MyInverter = (function($) {

    //hold state
    //var isInverted = false;

    //cache dom
    var $toggler = $('.inverter__toggler');
    var $target = $('.inverter__target');

    //bindings
    $(document).ready(function() { init() });
    $(document).on('keydown', function (event) {          
        if (event.ctrlKey && event.altKey && event.keyCode == 73) {       
            toggle()
        }
    });
    $( document ).ajaxComplete(function() {
        init()
    });

    $toggler.click(function() { 
        toggle()
    });

    function init() {

        if (sessionStorage.getItem('isInverted') == "true") {

            invert();

        } else {

            reset();
        }

    }

    function toggle() {

        if (sessionStorage.getItem('isInverted') == "true") {

            reset();

        } else {

            invert();
        }
    };

    function invert() {

        $('.invertable').addClass('invert');
        $('table').addClass('invert');
        $('.title').addClass('invert');
        $('.tag').addClass('invert');
        $('.focus').addClass('invert');
        // $('.menu').addClass('invert');
        // $('.bg').addClass('invert');
        // $('body').addClass('invert');
        // $('.sidebar').addClass('invert');
        // $('.toolbar').addClass('invert');
        // $('.c--black').addClass('c--white');

        // Save data to sessionStorage
        sessionStorage.setItem('isInverted', 'true');
    }

    function reset() {

        $('.invertable').removeClass('invert');
        $('table').removeClass('invert');
        $('.title').removeClass('invert');
        $('.tag').removeClass('invert');
        $('.focus').removeClass('invert');
        // $('.menu').removeClass('invert');
        // $('.bg').removeClass('invert');
        // $('body').removeClass('invert');
        // $('.sidebar').removeClass('invert');
        // $('.toolbar').removeClass('invert');
        // $('.c--black').removeClass('c--white');

        // Save data to sessionStorage
        sessionStorage.setItem('isInverted', 'false');
    }

    //public API
    public_API = {
        toggle: toggle,
        invert: invert,
        reset: reset
    };

    return public_API

})(jQuery);