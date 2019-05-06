jQuery(function($) {
    var $navbar = $('#alert_panel'),
        navheight = $navbar.outerHeight(),
        $window = $(window);
    
    function toggleNavBar() {
        var scroll = $window.scrollTop();
        
        if (scroll >= navheight) {
        if (!$navbar.hasClass('navbar-fixed-top')) {
            $navbar.addClass('navbar-fixed-top');
            $navbar.css('margin-top', -navheight);
            $navbar.animate({ marginTop: 0 }, 500, function() {
            $window.one('scroll', toggleNavBar);
            });
        } else {
            $window.one('scroll', toggleNavBar);
        }
        } else {
        if ($navbar.hasClass('navbar-fixed-top')) {
            $navbar.removeClass('navbar-fixed-top');
        }
        
        $window.one('scroll', toggleNavBar);
        }
    }
    
    $window.one('scroll', toggleNavBar);
});

$(document).ready(function(){

    $('#btn_panel').click(function (e) {      

        e.preventDefault();      

        $( '#alert_panel' ).slideUp();

    });   

    var $win = $(window);
    
    $win.scroll(function () {
        if($win.scrollTop() > 500) {
            var cookis = $.cookie('panel');

            if (cookis == 'true' && cookis != 'undefined') {
                $("#newsletter").hide();
            } else {
                $( '#newsletter' ).show('slow');
            }
            
        }
    });

    $("#btn_close").click(function(e) {

        var date = new Date();
        var minutes = 10;
        date.setTime(date.getTime() + (minutes * 60 * 1000));
         $.cookie('panel', 'true', { expires: date });
                    
        $( '#newsletter' ).hide('slow');
    });

});


 