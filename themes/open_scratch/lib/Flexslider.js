
MyFlexslider = (function($) {

    //cache dom
    $fs = $('.flexslider');

    // stop loop
    // (see http://stackoverflow.com/questions/22313398/prevent-an-infinite-loop-on-window-resize)
    $fs.on('resize',function(event){
        event.stopPropagation();
    });

    // $(window).load(function() {
    //     $fs.flexslider({
    //         start: function(slider){
    //             $(silder).resize;
    //         }
    //     });
    // });
    
    function reset() {
        $fs.resize();
    }

    //api
    return {
        reset: reset
    }


})(jQuery);