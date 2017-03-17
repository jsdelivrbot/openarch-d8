jQuery(document).ready(function($){

    

    // alert("main ready");

	// $('#fullpage').fullpage({
	//   anchors: ['page1', 'page2'],
	// });

    $(document).on('keydown', function (event) {

        if (event.keyCode == 71) {
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
    $(".book-item.expandable input:checkbox:first").attr('checked', true);

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
    $(".row--clickable").click(function() {

        var $row = $(this);
        var $link = $row.find("a");
        window.document.location = $link.attr('href');
    });

    //drop toolbar-toggle icon for some pages
    // if ((Pg.isAwards() && !Breakpoint.isFull()) ||
    //     (Pg.isBooks() && !Breakpoint.isFull()) ||
    //     (Pg.isEvents() && !(Breakpoint.isFull() || Breakpoint.isWidest() || Breakpoint.isWider())) ||
    //     (Pg.isProjTable() && !Breakpoint.isFull())) {

    //     $(".toolbar-toggle").addClass('below');
    // }

    
});



