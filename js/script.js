$(document).ready(function(){
    // slider
    $('.slider__inner, .news__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    });


    $('input, select').styler({
        selectSmartPositioning: false
    });

    // Hamburger
    $('.header__btn-menu').on('click', function() {
        $('.header__menu').slideToggle();
    });
});