jQuery(document).ready(function($){

    // alert("main ready");

	// $('#fullpage').fullpage({
	//   anchors: ['page1', 'page2'],
	// });

    $(document).on('keydown', function (event) {

        if (event.ctrlKey && event.altKey && event.keyCode == 71) {
            $('.grid-target').hasClass('grid-on') 
                ? $('.grid-target').removeClass('grid-on') 
                : $('.grid-target').addClass('grid-on')
        }

        // if (event.keyCode == 70) {
        //     $('.grid-target').hasClass('grid-on') 
        //         ? $('.grid-target').removeClass('grid-on') 
        //         : $('.grid-target').addClass('grid-on')
        // }

    });

    

    // $( ".grid-toggle" ).click(function() {    
    //     $('.grid-target').hasClass('grid-on') 
    //         ? $('.grid-target').removeClass('grid-on') 
    //         : $('.grid-target').addClass('grid-on')
    // });

    // remove buffer from frontpage for widest breakpoint
    // if (Breakpoint.isWidest() 
    //     && (window.location.pathname == "/" 
    //         || window.location.pathname == "/openarch-d8/"
    //         )) {
    //     $('.main-content-wrapper').removeClass('buffer--main-top buffer--main-bottom');
    // }

    // remove top border from a few pages
    $(function() {
        var parsed_path = window.location.pathname.split('/');
        var rel_path = parsed_path[parsed_path.length - 1]
        if (rel_path == "practice" 
                || rel_path == "gallery"
                || rel_path == "videos"
                || rel_path == "press"
                ) {
            $('.main-content__primary').removeClass('border--top');
        }
    })

    $(function() {
        // var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
        // var pgurl = window.location.pathname.substr(1);
        $('.icon').each(function(){
            if($(this).attr("href") == window.location.pathname.substr(0)) {
                $(this).addClass("active");
            }
        })
    });

    // expand first few elements in expandable list
    $(".news-item.expandable input:checkbox:lt(3)").attr('checked', true);
    $(".event-teaser.expandable input:checkbox:lt(3)").attr('checked', true);
    $(".book-item.expandable input:checkbox").attr('checked', true);

    // open toolbar by defualt on certain pages
    // $(".toolbar.peekable input:checkbox").attr('checked', false);
    // if(Pg.isTask()) {
    //     $(".toolbar.peekable input:checkbox").attr('checked', true);
    // }

    // ie toolbar fix -> not quite working
    // $("a.icon--filter.checked").click(function() {
    //     console.log('click');
    //     $(".toolbar.peekable input:checkbox").attr('checked', false);
    // })
    // $("a.icon--filter.unchecked").click(function() {
    //     console.log('click');
    //     $(".toolbar.peekable input:checkbox").attr('checked', true);
    // })

    // all <a> tags containing a certain rel=""
    $("a[rel~='keep-params']").click(function(e) {
        e.preventDefault();

        var params = window.location.search,
            dest = $(this).attr('href') + params;

        // timeout for browser bugs
        window.setTimeout(function() {
            window.location.href = dest;
        }, 100);
    });

    //make table rows clickable
    $(".row--clickable a").click(function(e) {
        e.stopPropagation();
    });
    $(".row--clickable").click(function() {

        var $link = $(this).find("a");
        if($link.data('clicked')) {console.log('clickeroni')}
        if ($link.length) {         
            if ($link.attr('target') == '_blank') {
                window.open($link.attr('href'),'_blank');
            } else {
                window.document.location = $link.attr('href');
            }
        }
    });
    

    //drop toolbar-toggle icon for some pages
    // if ((Pg.isAwards() && !Breakpoint.isFull()) ||
    //     (Pg.isBooks() && !Breakpoint.isFull()) ||
    //     (Pg.isEvents() && !(Breakpoint.isFull() || Breakpoint.isWidest() || Breakpoint.isWider())) ||
    //     (Pg.isProjTable() && !Breakpoint.isFull())) {

    //     $(".toolbar-toggle").addClass('below');
    // }

    $(function() {
        // alert(!(window.ActiveXObject) && "ActiveXObject" in window)
        var ua = window.navigator.userAgent;
        // if (ua.indexOf("Trident/7.0") > 0) {
        if (!(window.ActiveXObject) && "ActiveXObject" in window) {
            //return 11;
            $('.notice').addClass('ie-not-supported')
            $('.notice__content').append( "<p>openarch.com目前正在测试中，暂不支持用IE浏览器访问。请选用chrome, firefox或其它浏览器。</p><p></p><p>openarch.com does not currently support Internet Explorer. Please view site with chrome, firefox, or other browser of your choice.</p>" );
        } else if (ua.indexOf("Trident/6.0") > 0) {
            //return 10;
            $('.notice').addClass('ie-not-supported')
            $('.notice__content').append( "<p>Openarch.com does not currently support Internet Explorer. Please view site with chrome, firefox, or other browser of your choice.</p>" );
        } else if (ua.indexOf("Trident/5.0") > 0) {
            //return 9;
            $('.notice').addClass('ie-not-supported')
            $('.notice__content').append( "<p>Openarch.com does not currently support Internet Explorer. Please view site with chrome, firefox, or other browser of your choice.</p>" );
        } else {
            //return 0;  
            // not IE9, 10 or 11
        }
    });
    
});