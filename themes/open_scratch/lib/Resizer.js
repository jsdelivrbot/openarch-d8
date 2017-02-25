Resizer = (function($) {

    var timer;

    $(window).on("orientationchange",function(){

        console.log("on reorientation");

        MyFullpage.reset(); 

    });

    $(window).resize(function() { 

        var existingWidth = $(document).data('resize-width');
        var newWidth = $(document).width();

        //only care about changes in width
        if (existingWidth != newWidth) {

            console.log("on resize");

            reset();

            $(document).data('resize-width', newWidth);
        };
    });

    function reset() {

        console.log("reset");

        MySlider.reset();
        MyFlexslider.reset(); 
        MyFlexslider.resize();
    }

    return { 

        reset: reset
    }

})(jQuery);