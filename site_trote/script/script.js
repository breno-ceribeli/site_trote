// Botão slide up
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }
        else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // Slide up Script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Ativar menu da navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Script da animação de digitação
    var typed = new Typed(".typing", {
        strings: ["Solidariedade", "Amizade", "Compaixão", "Esperança"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});