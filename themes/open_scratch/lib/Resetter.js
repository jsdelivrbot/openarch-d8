Resetter = (function($) {

    function reset() {

        console.log("reset");

        MySlider.reset();
        MyFlexslider.reset(); 
        // MyFlexslider.resize();
    }

    return { 

        reset: reset
    }

})(jQuery);