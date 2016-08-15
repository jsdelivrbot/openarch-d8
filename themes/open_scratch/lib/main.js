jQuery(document).ready(function($) {

(function($) {
    Drupal.theme.prototype.slideshowResizer = function(target) {
        var slideheight = 0;
        $(target + ' .views-slideshow-cycle-main-frame-row').each(function() {
            slideheight = $(this).find('.views-slideshow-cycle-main-frame-row-item').innerHeight();
            if (slideheight != 0) {
                $(target + ' .views-slideshow-cycle-main-frame').css('height', slideheight + 'px');
                $(target + ' .views-slideshow-cycle-main-frame-row').css('height', slideheight + 'px');
                return false;
            }
        });
    };

    Drupal.behaviors.slideshowResize = {
        attach: function(context, settings) {
            $('.view-slideshow', context).once('processed', function() {
                Drupal.theme('slideshowResizer', '.view-slideshow');
            });

            $(window).load(function() {
                Drupal.theme('slideshowResizer', '.view-slideshow');
            });
        }
    };
})
(jQuery);
    
});