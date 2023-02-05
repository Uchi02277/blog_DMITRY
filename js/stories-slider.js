$(document).ready(function(){
    $(".stories__list").slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,      
        slidesToScroll: 1,    
        speed: 1000,            
        easing: "ease",         
        infinite: true,         
        initialSlide: 0,         
        autoplay: true,          
        draggable: true,         
        swipe: true,    
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]         
    });
});