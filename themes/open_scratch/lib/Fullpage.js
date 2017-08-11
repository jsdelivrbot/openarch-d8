MyFullpage = (function($) {

    //cache DOM
    var $fp = $('.fullpage');
    var $hidden = $('.fullpage__hidden');
    var $asset = $fp.find('.fullpage__asset');
    var $toggle = $fp.find('.fullpage__toggler');
    var $header = $('.main-header-layout');
    var $footer = $('.main-footer-wrapper');
    
    //bindings

    $toggle.click(function() { toggle() });

    // $(document).on('keydown', function (event) {          
    //     if (event.ctrlKey && event.keyCode == 70) {     
    //         toggle()
    //     }
    // });

    //private methods

    function init() {

        $asset.hide();
        reset();
    }

    function build() {
      
        var $nameplate = $('.nameplate');
        var $manifesto = $('.manifesto');
        var $news = $('.recent-news');
        var $screen = $('.bg__screen');

        //console.log('_build fullpage');

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
                            MyVisor.down();
                            $nameplate.fadeOut();
                            (Breakpoint.isWide() || Breakpoint.isWider()) ? MySlider.open() : MySlider.close();  

                            // Fix scroll issue (see http://stackoverflow.com/questions/26986136/fullpage-js-will-only-scrolloverflow-after-window-resize) 
                            $.fn.fullpage.reBuild();         
                        }
                        
                    },
                    afterRender: function(){

                        MySlider.close();
                        MyVisor.up();
                        
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
                    onLeave: function(index, nextIndex, direction){},
                    afterLoad: function(anchorLink, index){},
                    afterRender: function(){

                        MySlider.close();
                        MyVisor.up();

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
    } 

    function destroy() {

        console.log('_destroy fullpage');
   
        $header.show();
        $footer.show();
        $hidden.show();
        $asset.hide();
        $toggle.removeClass('fixed');

        if (isEnabled()) $.fn.fullpage.destroy('all');

    }
    
    //public methods

    function toggle() {

        console.log("toggle fullpage");

        isEnabled() ? destroy() : build();

        //reset
        MySlider.reset();
        MyFlexslider.reset(); 
        MyVisor.update();
    };

    function reset() {

        console.log("reset fullpage");

        if (Pg.isFront()) { //only front page enables fullpage automatically

            build();

        } else { //other pages and task page when break is widest/full

            destroy(); //ensure known state on reset
        }
    }

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