// 'use strict';
//Nav bar
// let close = document.querySelector( '.close' );
let navbarToggle = document.querySelector('.res_nav');
let menu = document.getElementById('menu');

menu.addEventListener("click", () => {

    navbarToggle.classList.toggle('close');
})


//Sliders
jQuery('.card-slider0').slick({
    slidesToShow:4,
    autoplay: true,
    slidesToScroll: 1,
    dots: true,
    responsive:[
        {
            breakpoint: 821,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

jQuery('.card-slider1').slick({
    slidesToShow:4,
    autoplay: true,
    slidesToScroll: 1,
    dots: false,
    responsive:[
        {
        breakpoint: 805,
        settings: {
            slidesToShow: 3
        }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});