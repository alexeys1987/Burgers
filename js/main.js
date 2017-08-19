$(document).ready(function() {
    // Animated intro section
    $('.intro-top__menu-list--popup').removeClass('intro-top__menu-list--popup');
    $('.intro-top__menu-mobile--popup').removeClass('intro-top__menu-mobile--popup');
    $('.intro-top__menu-mobile').on('click', function(e) {
        e.preventDefault();
        $('.intro-top__menu-list').toggleClass('intro-top__menu-list--popup');
        $(e.currentTarget).toggleClass('intro-top__menu-mobile--popup');
    });
    // Animated team section
    $('.team-list__link').not('.team-list__link--show').find('.team-list__decs').hide();
    $('.team-list__link').on('click', function(e) {
        e.preventDefault();
        var elemShow = $(e.target).closest('.team-list__link').hasClass('team-list__link--show');
        if (elemShow === true) {
            $(e.target).closest('.team-list__link').removeClass('team-list__link--show').find('.team-list__decs').slideUp();
        } else {
            $(e.target).closest('.team-list').find('.team-list__link--show').removeClass('team-list__link--show').find('.team-list__decs').slideUp();
            $(e.target).closest('.team-list__link').addClass('team-list__link--show').find('.team-list__decs').slideDown();
        }
    });
    // Animated menu section
    $('.menu .menu-acco .menu-acco__desc').removeClass('menu-acco__desc-wrapper--show');
    $('.menu-title').on('click', function(e) {
        var allElemShow = $(e.currentTarget).closest('.menu').find('.menu-acco__desc-wrapper');
        // allElemShow.animate({
        //     'width': '0'
        // }, 300, "linear");
        allElemShow.removeClass('menu-acco__desc-wrapper--show');
    });
    $('.menu-title-wrapper').on('click', function(e) {
        var allElemShow = $(e.currentTarget).closest('.menu').find('.menu-acco__desc-wrapper');
        // allElemShow.animate({
        //     'width': '0'
        // }, 300, "linear");
        allElemShow.removeClass('menu-acco__desc-wrapper--show');
    });
    $('.menu .menu-acco .menu-acco__link').on('click', function(e) {
        e.preventDefault();
        var elemShow = $(e.currentTarget).find('.menu-acco__desc-wrapper').hasClass('menu-acco__desc-wrapper--show');
        console.log(elemShow);
        if (elemShow === true) {
            var allElemShow = $(e.currentTarget).find('.menu-acco__desc-wrapper');
            // allElemShow.animate({
            //     'width': '0'
            // }, 300, "linear");
            allElemShow.removeClass('menu-acco__desc-wrapper--show');
        } else {
            var lastElemShow = $(e.currentTarget).closest('.menu-acco').find('.menu-acco__desc-wrapper--show');
            var nowElemShow = $(e.currentTarget).find('.menu-acco__desc-wrapper');
            // nowElemShow.animate({
            //     'width': '540px'
            // }, 300, "linear");
            // lastElemShow.animate({
            //     'width': '0'
            // }, 300, "linear");
            lastElemShow.removeClass('menu-acco__desc-wrapper--show');
            nowElemShow.addClass('menu-acco__desc-wrapper--show');
        }
    });

    // $(e.target).closest('.team-list__link--show').removeClass('team-list__link--show').find('.team-list__decs').slideUp();
    // $('.team-list__link').removeClass('team-list__link--show').find('.team-list__decs').slideUp();
    // $(e.target).closest('.team-list__link').toggleClass('team-list__link--show');
    // $(e.target).closest('.team-list__link--show').find('.team-list__decs').slideToggle();

    // $('.team-list__link').on('click', function(e) {
    //     e.preventDefault();
    //     var elem = $(e.target).find('team-list__decs');
    //     elem == true ? console.log('123');
    // });

    // $('.menu-acco__link').on('click', function(e) {
    //     e.preventDefault();
    //     var elem = $(e.target).closest('').find('');
    // });
});