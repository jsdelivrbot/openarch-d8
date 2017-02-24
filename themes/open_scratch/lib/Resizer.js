Resizer = (function($) {

    var timer;

    $(window).resize(function() { 

        var existingWidth = $(document).data('resize-width');
        var newWidth = $(document).width();

        //only care about changes in width
        if (existingWidth != newWidth) {

            MyFullpage.reset();
            MySlider.reset();
            MyFlexslider.reset(); 
            MyFlexslider.resize();

            $(document).data('resize-width', newWidth);
        };
    });

})(jQuery);