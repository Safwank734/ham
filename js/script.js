(function () {
    "use strict";
    var ARC = {
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.initSlider();
            this.totopButton();
            this.enablePopupGallery();
        }
        , cacheDom: function () {
            this.toTop = $('.totop');
            this._body = $('body');
            this.arcprimeHomepageSlider = $('.arcprime-slider');
            this.arcprimeGalleryTabs = $('.arcprime-toolbar-item');
        }
        , bindEvents: function () {
            var self = this;
            this.arcprimeGalleryTabs.on('click', self.changeActiveTab);
            this.arcprimeGalleryTabs.on('click', self.addGalleryFilter);
            $(window).on('load', self.enablePreloader);
        }
        , /* popup gallery */
        enablePopupGallery: function () {
            $('.arcprime-popup-gallery').each(function () {
                $(this).magnificPopup({
                    delegate: 'a'
                    , type: 'image'
                    , gallery: {
                        enabled: true
                    }
                });
            });
        }
        , /* preloader */
        enablePreloader: function () {
            var preloader = $('#arcprime-page-loading');
            if (preloader.length > 0) {
                preloader.fadeOut("slow", function () {
                    preloader.remove();
                });
            }
        }
        , /* slider */
        initSlider: function () {
            var self = this;
            /* homepage slider */
            self.arcprimeHomepageSlider.slick({
                infinite: true
                , dots: false
                , arrows: true
                , slidesToShow: 3
                , slidesToScroll: 3
                , responsive: [
                    {
                        breakpoint: 768
                        , settings: {
                            slidesToShow: 1
                            , slidesToScroll: 1
                        }
			}
			]
            });
        }
        , /* ======= toTop ======= */
        totopButton: function() {
			var self = this;

			/* Show totop button*/
			$(window).scroll(function(){
				var toTopOffset = self.toTop.offset().top;
				var toTopHidden = 1000;

				if (toTopOffset > toTopHidden) {
					self.toTop.addClass('totop-vissible');
				} else {
					self.toTop.removeClass('totop-vissible');
				}
			});

			/* totop button animation */
			if(self.toTop && self.toTop.length > 0){
				self.toTop.on('click',function (e){
					e.preventDefault();
					$( 'html, body').animate( {scrollTop: 0 }, 'slow' );
				});
			}
		}
    };
    var header = $(".start-style");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        }
        else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
    // Sections Background Image
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    // Isotope Active
    $('.arcprime-project-items').imagesLoaded(function () {
    // Add isotope on click function
    $('.arcprime-project-filter li').on('click', function () {
            $(".arcprime-project-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".arcprime-project-items").isotope({
                filter: selector
                , animationOptions: {
                    duration: 750
                    , easing: 'linear'
                    , queue: false
                , }
            });
            return false;
        });
    $(".arcprime-project-items").isotope({
            itemSelector: '.single-item'
            , layoutMode: 'masonry'
        , });
    });
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    // img zoom
    $(".img-zoom").magnificPopup({
            type: "image"
            , closeOnContentClick: !0
            , mainClass: "mfp-fade"
            , gallery: {
                enabled: !0
                , navigateByImgClick: !0
                , preload: [0, 1]
            }
        })
    ARC.init();
})();

// $(document).ready(function() {
//     $("#submit-form").validate({
//         rules: {
//             fname: {
//                 required: true,
//                 minlength: 4,
//                 maxlength: 10

//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//             message: {
//                 required: true,
//                 minlength: 10
//             }
//         },
//         messages: {
//             fname: {
//                 required: "Enter your name",
//                 minlength: "Enter atleast 4 characters"
//             },
//             email: {
//                 required: "Enter your email address"
//             },
//             message: {
//                 required: "Enter at least 10 characters"
//             }
//         },


//     })
// })


// $("#submit-form").submit((e) => {
//     var isvalid = $("#submit-form").valid();
//     if (isvalid) {
//         e.preventDefault()
//         $.ajax({
//             url: "https://script.google.com/macros/s/AKfycbyJtKDXph9GYYq6AECpU1riQjqvEqe__QFhP9vi/exec",
//             data: $("#submit-form").serialize(),
//             method: "post",
//             success: function(response) {
//                 alert("Form submitted successfully")
//                 window.location.reload()
//                     //window.location.href="https://google.com"
//             },
//             error: function(err) {
//                 alert("Something Error")

//             }
//         });
//     }
// })