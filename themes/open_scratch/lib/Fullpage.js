MyFullpage = (function($) {

    //hold state
    var isWidest = (Breakpoint.isWidest());
    var isFull = (Breakpoint.isFull());

    //cache DOM
    var $el = $('.fullpage');
    var $header = $('.main-header-layout');
    var $nameplate = $('.nameplate');
    var $manifesto = $('.manifesto');
    var $news = $('.recent-news');

    $(document).ready(function() {

        // init();
        // if ((Breakpoint.isFull() || Breakpoint.isWidest())
        //     && (window.location.pathname == "/" 
        //         || window.location.pathname == "/openarch-d8/"
        //         || window.location.pathname == "/openarch-d8/cn"
        //         || window.location.pathname == "/openarch-d8/cn/")) { 
        //             init(); 
        //     }
        
        if ((window.location.pathname == "/" 
                || window.location.pathname == "/openarch-d8/"
                || window.location.pathname == "/openarch-d8/cn"
                || window.location.pathname == "/openarch-d8/cn/")) { 
                    init(); 
            }

    });

    $(window).resize(function() {

        wasWidest = isWidest;
        wasFull = isFull;
        isWidest = (Breakpoint.isWidest());
        isFull = (Breakpoint.isFull());
        onFrontPage = (window.location.pathname == "/" 
            || window.location.pathname == "/openarch-d8/"
            || window.location.pathname == "/openarch-d8/cn"
            || window.location.pathname == "/openarch-d8/cn/");

        if(onFrontPage && (!(wasWidest || wasFull) && (isWidest || isFull))) { init() }
        if(onFrontPage && ((wasWidest || wasFull) && !(isWidest || isFull))) { destroy() }

        if(onFrontPage) { init() }
        if(onFrontPage) { destroy() }

        // if(!wasFull && isFull) { init() }
        // if(wasFull && !isFull) { destroy() }
        
    });

    function init() {

        $header.hide();

        $('#fullpage').fullpage({

            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['firstPage', 'secondPage', 'thirdPage'],
            navigation: false,
            navigationPosition: 'left',
            navigationTooltips: ['Featured Work', 'OPEN Manifesto', 'Recent News'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: false,
            fitToSection: false,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
            // sectionsColor : [ 'rgba(255,255,255,.1)', 'rgba(235, 97, 0, 0.9)', 'rgb(255,255,255)'],
            sectionsColor: [ 'rgba(255,255,255,.1)', 'rgb(255,255,255)'],
            paddingTop: '0',
            paddingBottom: '0',
            // fixedElements: '.section__header, .section__footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: '.fullpage__section',
            slideSelector: '.fullpage__slide',

            lazyLoading: false,

            //events
            onLeave: function(index, nextIndex, direction){
                if (index == 2){
                    $header.fadeOut();
                }
                if (index == 1){
                    $nameplate.fadeOut();
                }

            },
            afterLoad: function(anchorLink, index){
                if (index == 2){
                    $header.fadeIn();
                }
                if (index == 1){
                    $nameplate.fadeIn();
                }

            },
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });

    }

    function destroy() {

        $.fn.fullpage.destroy('all');
        $header.fadeIn();
    }
    
    //public methods
    function disable() {

        $.fn.fullpage.setAutoScrolling(false);

    }

    function enable() {

        $.fn.fullpage.setAutoScrolling(true);

    }

    function pass() {}
    
    //public API
    public_API = { 
        disable: disable,
        enable: enable
    }
    
    return public_API

})(jQuery);