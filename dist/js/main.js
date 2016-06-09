(function($) {
	"use strict";
	$(document).ready(function() {
		$("#frm-login").validate({
			rules: {
				username: "required",
				password: "required"
			}
		});

    if($('ul.tabs').length != 0){
			jQuery('ul.tabs').each(function(){
		    // For each set of tabs, we want to keep track of
		    // which tab is active and it's associated content
		    var $active, $content, $links = jQuery(this).find('a');

		    // If the location.hash matches one of the links, use that as the active tab.
		    // If no match is found, use the first link as the initial active tab.
		    $active = jQuery($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		    $active.addClass('active');

		    $content = $($active[0].hash);

		    // Hide the remaining content
		    $links.not($active).each(function () {
	        jQuery(this.hash).hide();
		    });

		    // Bind the click event handler
		    jQuery(this).on('click', 'a', function(e){
	        // Make the old tab inactive.
	        $active.removeClass('active');
	        $content.hide();

	        // Update the variables with the new link and content
	        $active = jQuery(this);
	        $content = jQuery(this.hash);

	        // Make the tab active.
	        $active.addClass('active');
	        $content.show();

	        // Prevent the anchor's default click action
	        e.preventDefault();
		    });
			});
    }

    if($('.owl-carousel').length != 0){
      $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        margin: 20,
        nav: true,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:5
          },
          1000:{
              items:9
          }
        }
      });
    }

    if($('.owl-carousel-home').length != 0){
      $('.owl-carousel-home').owlCarousel({
        loop:true,
        margin:100,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    }

    if($('.float-button').length != 0){
      $('.float-button').draggable()
    }

    $('#header .header-top .menu button').click(function(even){
      even.preventDefault();
      $('#header .navigation').slideToggle('slow');
    });
	});
})(jQuery);
