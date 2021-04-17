(function ($) {

    "use strict";

    ////////////////////////////////////////////////////
    //  Sticky Js

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });





    ////////////////////////////////////////////////////
    //  Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });


    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });




    ////////////////////////////////////////////////////
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "768"
    });




    ////////////////////////////////////////////////////
    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });





    ////////////////////////////////////////////////////
    //data background

    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + " ) ")
    });




    ////////////////////////////////////////////////////
    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-chevron-left"></i> </button> ',
            nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-chevron-right"></i> </button> ',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }
		]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


    $('.testimonial-slide').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<button type="button" ><i class="fas fa-chevron-left"> </i></button>',
        nextArrow: '<button type="button" ><i class="fas fa-chevron-right"> </i></button>',
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        /*       autoplay: true,
               autoplaySpeed: 2500,*/
        responsive: [
/*
            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true

                }

			},*/

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true

                }

			},

            {

                breakpoint: 767,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			},

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			}

		]

    });



    ////////////////////////////////////////////////////
    // Testimonial Slider Js

    $('.testimonial-slider').owlCarousel({
        loop: true,

        autoplay: false,

        items: 3,

        margin: 30,

        navText: ['<i class="fas fa-chevron-left"> </i>', '<i class="fas fa-chevron-right"> </i>', ],

        nav: true,

        dots: false,

        responsive: {

            0: {

                items: 1,

            },

            767: {

                items: 2

            },

            992: {

                items: 2

            },

            1200: {

                items: 3

            }

        }

    });

    ////////////////////////////////////////////////////
    // WOW active
    new WOW().init();


    // counterup plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



})(jQuery);
