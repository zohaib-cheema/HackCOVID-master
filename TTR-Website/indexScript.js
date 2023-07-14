/*$(document).ready(function(){

    // owl carousel script
    $('.carousel').owlCarousel({
    margin: 20,
    loop: false,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items :1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
    
    }); 
});
*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '49px',
    duration: 2000,
    loop:true
});

sr.reveal('.logo',{delay:150});
sr.reveal('.menu',{delay:150});