(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Scroll to Top
	function scrollArrow() {
		if($('.scroll-to-top').length){
			var windowpos = $(window).scrollTop();
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				scrollLink.fadeIn(300);
			} else {
				scrollLink.fadeOut(300);
			}
		}
	}
	
	scrollArrow();


	//Add One Page nav
	if($('ul.scroll-nav').length) {
		$('ul.scroll-nav').onePageNav();
	}

	//Custom Scroll Linsk / Sidebar
	if($('.home-body .scroll-nav li a').length){
		$(".home-body .scroll-nav li a").on('click', function(e) {
			e.preventDefault();
		   $('body').removeClass('navbar-visible');
		});
	}

	//Custom Scroll for Hidden Sidebar
	if ($('.nav-toggler').length) {
		$('.nav-toggler').on('click', function () {
			$('body').toggleClass('navbar-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('body').removeClass('navbar-visible');
	        }
	    });
	}
	
	// Skill Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Jquery Knob animation 
	if($('.dial').length){
	   $('.dial').appear(function(){
          var elm = $(this);
          var color = elm.attr('data-fgColor');  
          var perc = elm.attr('value');  
 
          elm.knob({ 
               'value': 0, 
                'min':0,
                'max':100,
                'skin':'tron',
                'readOnly':true,
                'thickness':0.08,
					'dynamicDraw': true,
					'displayInput':false
          });

          $({value: 0}).animate({ value: perc }, {
			  duration: 2000,
              easing: 'swing',
              progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
              }
          });

          },{accY: 0});
    }
	
	
	//Testimonial Carousel
	if ($('.testi-carousel').length) {
		$('.testi-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:5000,
			navText: [ '<span class="prev-btn sl-icon-arrow-left"></span>', '<span class="next-btn sl-icon-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}

	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		scrollArrow();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

/* ==========================================================================
   When document is Resized
   ========================================================================== */
	
	$(window).on('resize', function() {
		
	});
	
	

})(window.jQuery);