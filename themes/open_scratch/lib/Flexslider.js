
MyFlexslider = (function($) {

    //cache dom
    var $fs = $('.flexslider'),
        // $taskSlider = $('.optionset-flexslider-carousel-with-min-and-max-ranges'),
        $taskSlider = $('.optionset-open-task-slideshow'),
        $pressSlider = $('.optionset-open-press-carousel'),
        $frontSlider = $('.optionset-open-featured-work'),
        flexslider = { vars:{} };

    // stop loop
    // (see http://stackoverflow.com/questions/22313398/prevent-an-infinite-loop-on-window-resize)
    $fs.on('resize',function(event){
        event.stopPropagation();
    });

    //bindings
    // $(document).ready(function() { init(); });

    //private

    function init() {
        reset();
    }

    //public

    function reset() {

        console.log("reset flexslider");

        if(Pg.isTask()) {

            var numTaskItems = (Breakpoint.isFull()) ? 2 : 1;
            
            $taskSlider.data('flexslider').vars.minItems = numTaskItems;
            $taskSlider.data('flexslider').vars.maxItems = numTaskItems;

        } else if(Pg.isPress()) {

            var numPressItems = (Breakpoint.isFull()) ? 5 :
                                (Breakpoint.isWidest()) ? 4 :
                                (Breakpoint.isWider()) ? 3 :
                                (Breakpoint.isWide()) ? 3 : 
                                (Breakpoint.isNarrow()) ? 3 : 2;

            $pressSlider.data('flexslider').vars.minItems = numPressItems;
            $pressSlider.data('flexslider').vars.maxItems = numPressItems;

        } else {}

        resize();
    }

    var timer;

    function resize() {

        console.log("_resize flexslider");

        // $fs.resize();
        // $fs.data('flexslider').resize(); 
        clearTimeout(timer);
        timer = setTimeout(function() { 
            $(window).resize();
            $(window).resize();
        }, 1);
    }

    //api
    return {
        resize: resize,
        reset: reset
    }


})(jQuery);
