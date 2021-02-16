var numOfSlides = 0;
$(function() {      
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    // console.log(isMobile);
    if (isMobile) {
        numOfSlides = 1;    
    } else {
        numOfSlides = 4;
    }
 });
$(document).ready(function(){
    // console.log(numOfSlides);
    $('.customer-logos').slick({
        slidesToShow: numOfSlides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
            pauseOnHover: false,
            responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});