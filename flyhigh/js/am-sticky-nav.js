jQuery(document).ready(function() {
  "use strict";  



	/**
	 * Sticky top driver/logic ( Responsive ) 
	 * Controls the sticky header from desktop widths all the way down to mobile device widths 
	 */
	var scrollPosition = jQuery(document).scrollTop(); // The scroll position of when the page load
	var headerHeight = jQuery('#mainheader').height(); // The height of the main header on page load
	var viewportWidth = jQuery(window).width();	 // Width of the viewport on load
	var viewportHeight = jQuery(window).height(); // Height of the viewport on load
	var heightBreakPoint = 650; // The breakpoint where we hide the sticky-top to allow more viewport on devices 800px and below.
	
	if(jQuery(location.href.split("#")[1])) {
		var hashash = true; // If the page loads with a hashtag assume its anchoring 
		
		// Wait 1.5 seconds before allowing the sticky top back
		setTimeout(function(){
		  hashash = false; 
		}, 1500);
		
	}	
	
	jQuery(document).on('scroll', function(){

		// Check variables again becuase dimensions change on responsive
		viewportWidth = jQuery(window).width();
		viewportHeight = jQuery(window).height();
	    headerHeight = jQuery('#mainheader').height();

		// If the header is out of the viewport and the user is scrolling up 
		// and we are withing the height breakpoint fade in the sticky-top in
		if ( scrollPosition > headerHeight && jQuery(this).scrollTop() < scrollPosition && viewportHeight < heightBreakPoint ) {
			
			if (hashash !== true){ // add the class only if the hashash is false
				jQuery('#am-sticky-header').addClass('fades');
			}

		// If the header is out of the viewport and we are out of the height breakpoint then show the sticky-top
		} else if ( scrollPosition > headerHeight && viewportHeight > heightBreakPoint ) {
			
			if (hashash !== true){// add the class only if the hashash is false
				jQuery('#am-sticky-header').addClass('fades');			
			}
			
		} else { // Else always hide the sticky-top
			
			jQuery('#am-sticky-header').removeClass('fades');			
			
		}

		scrollPosition = jQuery(this).scrollTop();
		//hashash = false; // On scrolling the hash goes back to false

		// if the body is scrolling down to a page 
		if ( jQuery('body').is(':animated') ) {
						
			jQuery('#am-sticky-header').removeClass('fades');
		}

		
		// Failsafe to turn of sticky at top.. (so it doesnt get stuck)
		if ( scrollPosition < 10 ){
			jQuery('#am-sticky-header').removeClass('fades');
		}
		

		//alert('scrolling');
		
	});




	jQuery(".toggleSidepanel").click( function( e ) {
		e.preventDefault();
		
		jQuery("#am-sticky-side-panel").fadeToggle();
		
		//var state = Math.abs( parseInt( $('#sticky-side-panel').css('left'), 10 )) >= 320;
		//jQuery("#sticky-side-panel").animate({left: state ? 0 : -320},350);
		
	}); 
	
	

	
});
	