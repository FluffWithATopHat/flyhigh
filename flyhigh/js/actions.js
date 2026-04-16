// JavaScript Document

jQuery(document).ready(function() {
  "use strict";  


	/* Add Bootstrap classes to gravityform */	
	jQuery('.gform_wrapper .gform_button').addClass('btn btnc');	
	jQuery('.gform_wrapper .ginput_container input').addClass('form-control');
	jQuery('.gform_wrapper .ginput_container textarea').addClass('form-control');
	jQuery('.gform_wrapper .ginput_container textarea').closest('li').addClass('textarea_wrapper');	
	jQuery('.gform_wrapper .ginput_container select').addClass('form-control');			
	

	// Add an anchor to the href based on the link title attribute
	jQuery('a[title*="#"]').each(function(){
			var hash = '';
			var splittitle = jQuery(this).attr("title").split(" ");
			for(var i = 0; i < splittitle.length; i++) {
				if(splittitle[i].charAt(0) === "#") {
					hash = splittitle[i];	  
				}
			}  
			var newtitle = jQuery(this).attr("title").replace(hash,"");
			jQuery(this).attr("title",newtitle);
			var newurl = jQuery(this).attr("href") + hash;
			jQuery(this).attr("href",newurl);
	});	
	
	
	/* Add #main to the href of links */
	jQuery(".slidetomain a").not("a[href*='#']").each(function(){
		var newurl = jQuery(this).attr("href") + "#main";
		jQuery(this).attr("href",newurl);
	}); 	
	
	//Remove Slide to Main from the first link of the 
	jQuery("#mainmenu>li:first a[href*='#']").each(function(){
		var nomainhash = jQuery(this).attr("href").replace("#main","");
		jQuery(this).attr("href",nomainhash);
	});
	
	// Add target _blank to all external links 
	var mndomain_check = document.domain.replace("www.","");
	jQuery("a[href^='htt']").not("a[href*='"+mndomain_check+"']").attr("target","_blank");
	jQuery("a[href$='pdf']").attr('target','_blank');
	

	//Add a class "htag" to all headers tags
	jQuery("h1, h2, h3, h4 ,h5, h6").addClass('htag');
	
	jQuery('p:empty').remove();
	
	
	//Smooth Scroll to Top
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {jQuery('.backtotop.styled').fadeIn(); } else {jQuery('.backtotop.styled').fadeOut();}
	}); 
	
	jQuery('.backtotop').click(function(){ 
		jQuery('html, body').animate({scrollTop:0},817); return false;
	});		
	
	jQuery('.scrolltoID[href*="#"], .scrolltoID a[href*="#"]').click(function(){ 
			var hasurl = jQuery(this).attr('href');
			var elementtoScrollToID = hasurl.substring(hasurl.indexOf('#'));
			elementtoScrollToID = elementtoScrollToID.replace('#','');
		jQuery('html, body').animate({scrollTop:jQuery('#'+elementtoScrollToID).offset().top},817); return false;
	});	
	
	
	// Add support for FontAwesome icons on UL items 
	// Move class from parent to child 			
	jQuery('ul[class*="fa-"]').each(function(i, el){
		var name = (el.className.match(/(^|\s)(fa\-[^\s]*)/) || [,,''])[2];
		jQuery(this).addClass('faul');
		jQuery(this).removeClass(name);
		jQuery(this).find("li").addClass(name);
	});	
	
});