jQuery(document).ready(function($) {
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $(this).toggleClass("is-active");
        $('.menu').toggleClass('menu_open');
        $('.content').toggleClass('content_move');
        $('.logo ').toggleClass('logo_move');
        $('.bg ').toggleClass('bg_show');
    });


    $(window).on('load resize ', function() {
        if ($(this).width() > 768) {
            $('.owl-carousel.features-slider').trigger('destroy.owl.carousel');
        } else {
            $('.owl-carousel.features-slider').owlCarousel({
                loop: true,
                margin: 0,
                responsiveClass: true,
                autoplay: true,
                smartSpeed: 700,
                items: 1,
                nav: true,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
            });
        }
    });

    
    var contentHeight = $(".banner").outerHeight();
    var calcHeight = contentHeight - 70;

    $(window).scroll(function() {
        if ($(this).scrollTop() > calcHeight) {
            $('.hamburger_wrapper').addClass('black');
        } else {
            $('.hamburger_wrapper').removeClass('black');
        }
    });

    new Vue({
        el: '#example',
        data: {
            slides: [
                { id: 1, src: '/img/sliders/1.png' },
                { id: 2, src: '/img/sliders/2.png' },
                { id: 3, src: '/img/sliders/3.png' },
                { id: 4, src: '/img/sliders/4.png' },
                { id: 5, src: '/img/sliders/5.png' },
                { id: 6, src: '/img/sliders/6.png' },
                { id: 7, src: '/img/sliders/7.png' },
            ]
        },
        components: {
            'carousel-3d': window['carousel-3d'].Carousel3d,
            'slide': window['carousel-3d'].Slide
        }
    });

    $('.owl-carousel.reviews-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 700,
        navText : ["&#8592; ","&#8594"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }

    });
});