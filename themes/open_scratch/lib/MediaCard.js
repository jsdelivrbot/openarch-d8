//mediaCard
MediaCard = (function($) {

    //cache DOM
    var $el = $('.mediaCard');
    var $media = $el.find('.media');
    var $img = $el.find('.media__img');
    var $contents = $el.find('.media__contents');

    //bind events 
    // $(window).resize(function() {
    //     if ($(window).width()>960) {
    //         enableMedia();
    //     }
    //     if ($(window).width()<961) {
    //         disableMedia();
    //     }
    // });

    $(document).ready(function() {

        !Breakpoint.isWider() ? disableMedia() : enableMedia();
    });

    $(window).resize(function() {

        Breakpoint.isWider() ? enableMedia() : disableMedia();

        // if ( Breakpoint.isWider() ) {
        //     enableMedia();
        // } else {
        //     disableMedia();
        // }
    });
    
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
    


