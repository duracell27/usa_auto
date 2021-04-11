$(function () {
    $('.carousel__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 841,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings:{
                    slidesToShow: 1,
                }
            },
        ]
    });
})