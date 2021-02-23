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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 1100,
            settings: {slidesToShow: 3}
        },{
            breakpoint: 769,
            settings: {slidesToShow: 2}
        }, {
            breakpoint: 520,
            settings: {slidesToShow: 1}
        }]
    });
});