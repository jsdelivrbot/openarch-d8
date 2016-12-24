MyFullpage = (function($) {

    //hold state
    var isWidest = (Breakpoint.isWidest());

    //cache DOM
    var $el = $('.fullpage');

    $(document).ready(function() {

        // init();
        if (Breakpoint.isWidest() && (window.location.pathname == "/" || window.location.pathname == "/openarch-d8/")) { init(); }
        if (Breakpoint.isWidest() && (window.location.pathname == "/events" || window.location.pathname == "/openarch-d8/events")) { initHoriz(); }
    });

    $(window).resize(function() {

        wasWidest = isWidest;
        isWidest = (Breakpoint.isWidest());

        if(!wasWidest && isWidest) { init() }
        if(wasWidest && !isWidest) { destroy() }
        
    });

    function init() {

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
            scrollBar: true,
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
            sectionsColor : [ 'rgba(255,255,255,.1)', 'rgba(255,255,255,.9)'],
            paddingTop: '0',
            paddingBottom: '0',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: true,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            lazyLoading: false,

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });

    }

    function initHoriz() {

        $('#fullpage').fullpage({

            //Navigation
            menu: '#menu',
            lockAnchors: false,
            // anchors:['firstPage', 'secondPage'],
            navigation: false,
            navigationPosition: 'left',
            // navigationTooltips: ['OPEN Manifesto', 'Recent News'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
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
            // normalScrollElements: '#element1, .element2',
            scrollOverflow: true,
            // scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: false,
            verticalCentered: false,
            // sectionsColor : [ 'rgba(255,0,0,.5)' ],
            paddingTop: '0',
            paddingBottom: '0',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: true,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            lazyLoading: true,

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });

    }

    function destroy() {

        $.fn.fullpage.destroy('all');
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