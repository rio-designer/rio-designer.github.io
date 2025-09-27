'use strict';

{
    $('.img__05').slick({
        infinite:true,
        speed:1000,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:2000,
    });

    $('.top_btn').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },600);
    })

}