jQuery(document).ready(function($){

	// $('#fullpage').fullpage({
	//   anchors: ['page1', 'page2'],
	// });

    $( ".grid-toggle" ).click(function() {    
        $('.grid-target').hasClass('grid-on') 
            ? $('.grid-target').removeClass('grid-on') 
            : $('.grid-target').addClass('grid-on')
    });

    // remove buffer from frontpage for widest breakpoint
    if (Breakpoint.isWidest() 
        && (window.location.pathname == "/" 
            || window.location.pathname == "/openarch-d8/"
            || window.location.pathname == "/openarch-d8/eventss"
            || window.location.pathname == "/eventss"
            )) {
        $('.main-content-wrapper').removeClass('buffer--main-top buffer--main-bottom');
    }

    $(function() {
        // var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
        // var pgurl = window.location.pathname.substr(1);
        $('.icon').each(function(){
            if($(this).attr("href") == window.location.pathname.substr(0)) {
                $(this).addClass("active");
            }
        })
    });

    

});

