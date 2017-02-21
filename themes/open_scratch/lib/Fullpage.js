MyFullpage = (function($) {

    //hold state
    // var isWidest = (Breakpoint.isWidest());
    // var isFull = (Breakpoint.isFull());
    // var onTask = false;

    //cache DOM
    var $fp = $('.fullpage');
    var $hidden = $('.fullpage__hidden');
    var $asset = $('.fullpage__asset');
    var $header = $('.main-header-layout');
    var $footer = $('.main-footer-wrapper');
    var $nameplate = $('.nameplate');
    var $manifesto = $('.manifesto');
    var $news = $('.recent-news');

    //bindings
    $(document).ready(function() { 
        init() 
    });
    $(window).resize(function() { 
        //omit for now. but will need for resize during task to/from widest/full! 
    });
    $(window).on( "orientationchange", function( event ) { 
        reset() 
    });

    //private methods

    function init() {
        reset();
    }

    function build() {


        $header.hide();
        $footer.hide();
        $hidden.hide();
        $asset.show();

        if (!isBuilt()) {
            $('#fullpage').fullpage({

                //Navigation
                menu: '#menu',
                lockAnchors: false,
                anchors:['firstPage', 'secondPage'],
                navigation: false,
                navigationPosition: 'left',
                navigationTooltips: ['Featured Work', 'Recent News'],
                showActiveTooltip: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',

                //Scrolling
                css3: false,
                scrollingSpeed: 700,
                autoScrolling: true,
                fitToSection: false,
                // fitToSectionDelay: 1000,
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
                scrollOverflow: true,
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
                // responsiveWidth: 0,
                // responsiveHeight: 0,
                // responsiveSlides: false,

                //Custom selectors
                sectionSelector: '.fullpage__section',
                slideSelector: '.fullpage__slide',

                lazyLoading: false,

                //events
                onLeave: function(index, nextIndex, direction){

                    if (index == 1){
                        $nameplate.fadeOut();
                    }

                    if (index == 2){
                        $footer.hide();
                        $header.fadeOut();
                    }
                    
                },
                afterLoad: function(anchorLink, index){

                    if (index == 1){
                        $nameplate.fadeIn();
                        MySlider.close();
                    }

                    if (index == 2){
                        $footer.show();
                        $header.show();             
                    }
                    
                },
                afterRender: function(){},
                afterResize: function(){},
                afterResponsive: function(isResponsive){},
                afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
                onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
            });
        }
    } 

    function destroy() {
   
        $header.show();
        $footer.show();
        $hidden.show();
        $asset.hide();

        if (isBuilt()) $.fn.fullpage.destroy('all');
    }
    
    //public methods

    function reset() {

        if (Pg.isFront()) {

            build();

        } else if (Pg.isTask() && !(Breakpoint.isWidest() || Breakpoint.isFull())) {

            // console.log(screen.orientation.angle);

            if(screen.orientation.angle == 90) { //landscape
                build();
            } else if (screen.orientation.angle == 0) { //portrait
                destroy();
            } else {
                //do nothing
            }

        } else {

            //do nothing
        }
    }

    function disable() {

        $.fn.fullpage.setAutoScrolling(false);
    }

    function enable() {

        $.fn.fullpage.setAutoScrolling(true);
    }

    function isBuilt() {

        return $('html').hasClass('fp-enabled');
    }
    
    //public API

    public_API = { 
        disable: disable,
        enable: enable,
        reset: reset
    }
    
    return public_API

})(jQuery);