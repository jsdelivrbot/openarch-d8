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
    var $toggle = $('.fullpage__toggler');
    var $screen = $('.bg__screen');

    //bindings

    $toggle.click(function() { toggle() });

    $(document).on('keydown', function (event) {          
        if (event.keyCode == 70) {       
            toggle()
        }
    });

    $(document).ready(function() { 

        init() 
    });

    //private methods

    function init() {

        $asset.hide();
        reset();
    }

    function build() {

        console.log('build fullpage');

        // $header.hide();
        $footer.hide();
        $hidden.hide();
        $asset.show();
        $toggle.addClass('fixed');

        if (!isEnabled()) { 

            if (Pg.isFront()) {

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
                    sectionsColor: [ , 'rgb(255,255,255)'],
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
                            // $header.fadeOut();
                        }
                        
                    },
                    afterLoad: function(anchorLink, index){

                        if (index == 1){
                            $nameplate.fadeIn();
                            MySlider.close();
                            MyVisor.up();
                        }

                        if (index == 2){
                            $footer.show();
                            // $header.show(); 
                            MyVisor.down();
                            // (Breakpoint.isWide() || Breakpoint.isWider()) ? MySlider.open() : MySlider.close();            
                        }
                        
                    },
                    afterRender: function(){

                        MySlider.close();
                        MyVisor.up();
                        
                        // $screen.delay(500).fadeOut(function() {
                        //     $screen.removeClass('bg--white');
                        //     $screen.show();
                        // });

                    },
                    afterResize: function(){},
                    afterResponsive: function(isResponsive){},
                    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
                    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
                });

            } else { //is task

                $screen.addClass('bg--white');

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
                    // sectionsColor: [ , 'rgb(255,255,255)'],
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

                        // if (index == 1){
                        //     $nameplate.fadeOut();
                        // }

                        // if (index == 2){
                        //     $footer.hide();
                        //     $header.fadeOut();
                        // }
                        
                    },
                    afterLoad: function(anchorLink, index){

                        // if (index == 1){
                        //     $nameplate.fadeIn();
                        //     MySlider.close();
                        // }

                        // if (index == 2){
                        //     $footer.show();
                        //     $header.show(); 
                        //     MySlider.open();            
                        // }
                        
                    },
                    afterRender: function(){

                        // MySlider.close();
                        $screen.delay(500).fadeOut(function() {
                            $screen.removeClass('bg--white');
                            $screen.show();
                        });

                    },
                    afterResize: function(){},
                    afterResponsive: function(isResponsive){},
                    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
                    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
                });
            }
        }

        // MyFlexslider.resize();
    } 

    function destroy() {

        console.log('destroy fullpage');
   
        $header.show();
        $footer.show();
        $hidden.show();
        $asset.hide();
        $toggle.removeClass('fixed');

        if (isEnabled()) $.fn.fullpage.destroy('all');

        // MySlider.reset();
        // MyFlexslider.reset(); 
        // MyFlexslider.resize();
    }
    
    //public methods

    function toggle() {

        console.log("on fullpage toggle");

        isEnabled() ? destroy() : build();

        //reset
        // MySlider.reset();
        // MyFlexslider.resize();
        // Resizer.reset();
        MySlider.reset();
        MyFlexslider.reset(); 
        MyFlexslider.resize();
    };

    function reset() {

        console.log("reset fullpage");

        if (Pg.isFront()) {

            build();

        } else if (Pg.isTask() && (Breakpoint.isTiny() || Breakpoint.isMobile() || Breakpoint.isNarrow())) {

            // console.log(screen.orientation.angle);

            if(Orient.isLandscape()) { //landscape

                build();

            } else { //portrait

                destroy();
            }

        } else { //other pages and task page when break is widest/full

            destroy(); //ensure known state on reset
        }
    }

    // function disable() {

    //     $.fn.fullpage.setAutoScrolling(false);
    // }

    // function enable() {

    //     $.fn.fullpage.setAutoScrolling(true);
    // }

    function isEnabled() {

        return $('html').hasClass('fp-enabled');
    }
    
    //public API

    public_API = { 

        reset: reset,
        isEnabled: isEnabled
    }
    
    return public_API

})(jQuery);