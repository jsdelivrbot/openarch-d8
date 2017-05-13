//mediaCard
MediaCard = (function($) {

    // cache DOM
    var $el = $('.mediaCard');
    var $media = $el;
    var $img = $el.find('.media__img');
    var $contents = $el.find('.media__contents');

    // bindings
    $(document).ready(function() { reset(); });
    $(window).resize(function() { reset(); });

    function reset() {

        if ($el.hasClass('onNarrow')) { 

            if (!(Breakpoint.isTiny() || Breakpoint.isMobile())) { // is on narrow or greater
                enableMedia();
            } else {
                disableMedia(); 
            }

        } else if ($el.hasClass('onWide')) {

            if (!(Breakpoint.isTiny() || Breakpoint.isMobile() || Breakpoint.isNarrow())) { // is on wide or greater
                enableMedia();
            } else {
                disableMedia(); 
            }

        } else if ($el.hasClass('onWider')) {

            if ((Breakpoint.isWider() || Breakpoint.isWidest() || Breakpoint.isFull())) { // is on wider or greater
                enableMedia();
            } else {
                disableMedia(); 
            }

        } else {

            //do nothing media is enabled by default css
        }
    }
    
    //public methods
    function disableMedia() {

        $media.removeClass('media');
        $img.removeClass('media__img');
        $contents.removeClass('media__contents');
    }

    function enableMedia() {

        $media.addClass('media');
        $img.addClass('media__img');
        $contents.addClass('media__contents');
    }

    //public API
    public_API = { 
        disableMedia: disableMedia,
        enableMedia: enableMedia
    }
    
    return public_API
})(jQuery);
    