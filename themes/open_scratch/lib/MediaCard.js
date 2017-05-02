//mediaCard
MediaCard = (function($) {

    //cache DOM
    var $el = $('.mediaCard');
    var $media = $el;
    var $img = $el.find('.media__img');
    var $contents = $el.find('.media__contents');

    $(document).ready(function() {

        !(Breakpoint.isWider() || Breakpoint.isWidest() || Breakpoint.isFull()) ? disableMedia() :
        ((Pg.isTask() || Pg.isMedia()) && !(Breakpoint.isNarrow() || Breakpoint.isWide())) ? disableMedia() : enableMedia();
    });

    $(window).resize(function() {

        (Breakpoint.isWider() || Breakpoint.isWidest() || Breakpoint.isFull()) ? enableMedia() :
        ((Pg.isTask() || Pg.isMedia()) && (Breakpoint.isNarrow() || Breakpoint.isWide())) ? enableMedia() : disableMedia();

    });
    
    //public methods
    function disableMedia() {

        $media.removeClass('media');
        $img.removeClass('media__img');
        $contents.removeClass('media__contents');

        if (Pg.isIdeas() || Pg.isPreopen() || Pg.isTask() || Pg.isMedia()) {
            $contents.addClass('hide');
        }
    }

    function enableMedia() {

        $media.addClass('media');
        $img.addClass('media__img');
        $contents.addClass('media__contents');

        if (Pg.isIdeas() || Pg.isPreopen() || Pg.isTask() || Pg.isMedia()) {
            $contents.removeClass('hide');
        }
    }

    //public API
    public_API = { 
        disableMedia: disableMedia,
        enableMedia: enableMedia
    }
    
    return public_API
})(jQuery);
    
// MediaCard2 = (function($) {

//     //cache DOM
//     var $el = $('.relation');
//     var $media = $el;
//     var $img = $el.find('.media__img');
//     var $contents = $el.find('.media__contents');

//     $(document).ready(function() {

//         !(Breakpoint.isWide() || Breakpoint.isWider() || Breakpoint.isWidest() || Breakpoint.isFull()) ? disableMedia() : enableMedia();
//     });

//     $(window).resize(function() {

//         (Breakpoint.isWide() || Breakpoint.isWider() || Breakpoint.isWidest() || Breakpoint.isFull()) ? enableMedia() : disableMedia();

//     });
    
//     function disableMedia() {

//         $media.removeClass('media');
//         $img.removeClass('media__img');
//         $contents.removeClass('media__contents');
//         $contents.addClass('hide');
        
//     }

//     function enableMedia() {

//         $media.addClass('media');
//         $img.addClass('media__img');
//         $contents.addClass('media__contents');
//         $contents.removeClass('hide');
        
//     }
    
//     public_API = { 
//         disableMedia: disableMedia,
//         enableMedia: enableMedia
//     }
    
//     return public_API
// })(jQuery);


