jQuery(document).ready(function($){

	// $('#fullpage').fullpage({
	//   anchors: ['page1', 'page2'],
	// });

    $(document).on('keydown', function (event) {
        if (event.keyCode == 71) {
            $('.grid-target').hasClass('grid-on') 
                ? $('.grid-target').removeClass('grid-on') 
                : $('.grid-target').addClass('grid-on')
        }
        if (event.keyCode == 73) {       
            $('table').hasClass('invert') 
                ? $('table').removeClass('invert') 
                : $('table').addClass('invert')
            $('.title').hasClass('invert') 
                ? $('.title').removeClass('invert') 
                : $('.title').addClass('invert')
            $('.tag').hasClass('invert') 
                ? $('.tag').removeClass('invert') 
                : $('.tag').addClass('invert')
            $('.focus').hasClass('invert') 
                ? $('.focus').removeClass('invert') 
                : $('.focus').addClass('invert')
            $('.menu').hasClass('invert') 
                ? $('.menu').removeClass('invert') 
                : $('.menu').addClass('invert')
            $('.bg').hasClass('invert') 
                ? $('.bg').removeClass('invert') 
                : $('.bg').addClass('invert')
            $('body').hasClass('invert') 
                ? $('body').removeClass('invert') 
                : $('body').addClass('invert')
            $('.sidebar').hasClass('invert') 
                ? $('.sidebar').removeClass('invert') 
                : $('.sidebar').addClass('invert')
            // $('.bg--white').hasClass('bg--dark') 
            //     ? $('.bg--white').removeClass('bg--dark') 
            //     : $('.bg--white').addClass('bg--dark')
            $('.c--black').hasClass('c--white') 
                ? $('.c--black').removeClass('c--white') 
                : $('.c--black').addClass('c--white')
        }
    });

    // $( ".grid-toggle" ).click(function() {    
    //     $('.grid-target').hasClass('grid-on') 
    //         ? $('.grid-target').removeClass('grid-on') 
    //         : $('.grid-target').addClass('grid-on')
    // });


    // remove buffer from frontpage for widest breakpoint
    if (Breakpoint.isWidest() 
        && (window.location.pathname == "/" 
            || window.location.pathname == "/openarch-d8/"
            )) {
        $('.main-content-wrapper').removeClass('buffer--main-top buffer--main-bottom');
    }

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

    // expand first element in expandable list
    $(".expandable input:checkbox:first").attr('checked', true);

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


});

