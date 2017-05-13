Resizer = (function($) {

    $(window).resize(function() { 

        console.log("try resize");

        var existingWidth = $(document).data('resize-width');
        var newWidth = $(document).width();

        //only care about changes in width
        if (existingWidth != newWidth) {

            console.log("_do resize");

            MyFlexslider.reset();
            MySlider.reset();
            MyVisor.update();
             
            $(document).data('resize-width', newWidth);
        };
    });

})(jQuery);