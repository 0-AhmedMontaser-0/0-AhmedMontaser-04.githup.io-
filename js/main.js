//
$(function(){	
	"use strict";
	$(window).scroll(function(){
	
		let navbar= $(".navbar");
	if($(window).scrollTop() >= navbar.height()){
		navbar.addClass("scrolled");	
	}
	else{
		navbar.removeClass("scrolled");
	}
$(window).scrollTop() >= navbar.height()?navbar.addClass("scrolled"):navbar.removeClass("scrolled");

	});
	// deal with tabs-section
	$(".tab-switch li").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
			
				$("."+$(this).data("class")).show().siblings().hide();

	});
});