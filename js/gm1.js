$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: false,
        loop: true,
        items:3,
        margin: 0,
        stagePadding: 0,
        nav: true,
        navText: ['<span class="fa fa-caret-left" style="font-size: large">', '<span class="fa fa-caret-right" style="font-size: large">'],
        responsive:{
            0:{
                items: 1,
                autoplay: true,
                autoplayTimeout:3000,
                autoplayHoverPause:true
            },
            600:{
                items: 3,
                autoplay: true,
                autoplayTimeout:3000,
                autoplayHoverPause:true
            },
            1000:{
                items: 4,
                autoplay: true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                margin: 12
            }
        },
        
    });
    
});