// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//jQuery to slim down the navbar on scroll
var $navbar = $('.navbar-fixed-top');
var navbar_slim_class = 'top-nav-slim';
$(window).scroll(function() {
    if ($navbar.offset().top > 50) {
        $navbar.addClass(navbar_slim_class);
    } else {
        $navbar.removeClass(navbar_slim_class);
    }
});


$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
