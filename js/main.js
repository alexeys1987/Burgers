$(document).ready(function() {
    var scrollEnable = true;
    var currentSection = 0;
    var numberSection = ($('.section').length - 1);
    var moveElem = $('.wrapper');
    var fixedMenu = $('.menu-radio-fixed__link');
    fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active');

    // Popup on click button in feeds section
    $('.feeds__item').on('click', function(e) {
        e.preventDefault();
        console.log($(e.currentTarget).find('.feeds__text').css("display"));
        if (!($(e.currentTarget).find('.feeds__text').css("display") == 'none')) return;
        $('.feeds-popup').css({ "display": "flex" });
        scrollEnable = false;
    });
    $('.feeds__button').on('click', function(e) {
        console.log($(e.currentTarget).find('.feeds__text').css("display"));
        $('.feeds-popup').css({ "display": "flex" });
        scrollEnable = false;
    });
    $('.feeds-popup__button').on('click', function(e) {
        $(e.currentTarget).closest('.feeds-popup').css({ "display": "none" });
        scrollEnable = true;
    });

    // Order on click order button in order section
    $('.buttom-order').on('click', function(e) {
        e.preventDefault();
        if ($(e.currentTarget).closest('.order').length) return;
        currentSection = 6;
        moveElem.css({
            'transform': 'translateY(' + (currentSection * -100) + 'vh)',
            '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
        });
        fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active').siblings().removeClass('menu-radio-fixed__link-active');
    });

    // Order on click order button in order section
    $('.buttom-order').on('click', function(e) {
        e.preventDefault();
        if ($(e.currentTarget).closest('.order').length) return;
        currentSection = 6;
        moveElem.css({
            'transform': 'translateY(' + (currentSection * -100) + 'vh)',
            '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
        });
        fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active').siblings().removeClass('menu-radio-fixed__link-active');
    });

    // Animated scroll page on click order button
    $('.order .buttom-order').on('click', function(e) {
        e.preventDefault();

        console.log("123");
    });

    // Animated scroll page on click arrow
    $('.intro-bottom__link').on('click', function(e) {
        e.preventDefault();
        currentSection = 1;
        moveElem.css({
            'transform': 'translateY(' + (currentSection * -100) + 'vh)',
            '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
        });
        fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active').siblings().removeClass('menu-radio-fixed__link-active');
    });

    // Animated scroll page on click text menu
    $('.intro-top__menu-link').on('click', function(e) {
        e.preventDefault();
        currentSection = $(e.currentTarget).closest('.intro-top__menu-item').index() + 1;
        if (currentSection == 6) { currentSection++ };
        moveElem.css({
            'transform': 'translateY(' + (currentSection * -100) + 'vh)',
            '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
        });
        fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active').siblings().removeClass('menu-radio-fixed__link-active');
        $('.intro-top__menu-list').removeClass('intro-top__menu-list--popup');
        $('.intro-top__menu-mobile').removeClass('intro-top__menu-mobile--popup');
        scrollEnable = true;
    });

    // Animated scroll page on click radio-button menu
    $('.menu-radio-fixed__link').on('click', function(e) {
        e.preventDefault();
        currentSection = $(e.currentTarget).index();
        moveElem.css({
            'transform': 'translateY(' + (currentSection * -100) + 'vh)',
            '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
        });
        fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active').siblings().removeClass('menu-radio-fixed__link-active');
        console.log(currentSection);
    });

    // Animated scroll page on wheel
    $(document).on('wheel', function(e) {
        e.preventDefault();
        if (!scrollEnable) return;
        if (e.originalEvent.deltaY > 0) {
            if (currentSection < numberSection) currentSection++;
        } else {
            if (currentSection > 0) currentSection--;
        };
        console.log(currentSection);
        moveElem.css({
            'transform': 'translateY(' + (currentSection * -100) + 'vh)',
            '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
        });
        fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active').siblings().removeClass('menu-radio-fixed__link-active');
        scrollEnable = false;
        setTimeout(function() { scrollEnable = true }, 1500);
    });

    // Animated intro section
    $('.intro-top__menu-list--popup').removeClass('intro-top__menu-list--popup');
    $('.intro-top__menu-mobile--popup').removeClass('intro-top__menu-mobile--popup');
    $('.intro-top__menu-mobile').on('click', function(e) {
        e.preventDefault();
        $('.intro-top__menu-list').toggleClass('intro-top__menu-list--popup');
        $(e.currentTarget).toggleClass('intro-top__menu-mobile--popup');
        scrollEnable == true ? scrollEnable = false : scrollEnable = true;
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
    var docWidth = $('.menu-title-wrapper').width();
    var menuAllHeaderWidth = $('.menu-acco').width();
    var menuDescWidth = docWidth - menuAllHeaderWidth < 540 ? docWidth - menuAllHeaderWidth : 540;
    var allElemShow = $('.menu').find('.menu-acco__desc-wrapper');
    allElemShow.removeClass('menu-acco__desc-wrapper--show');

    $('.menu-acco__desc').css("width", menuDescWidth);

    $('.menu-title').on('click', function(e) {
        allElemShow.css("width", 0)
    });

    $('.menu-title-wrapper').on('click', function(e) {
        allElemShow.css("width", 0);
    });

    $('.menu .menu-acco .menu-acco__link').on('click', function(e) {
        e.preventDefault();
        var elemShow = $(e.currentTarget).find('.menu-acco__desc-wrapper').hasClass('menu-acco__desc-wrapper--show');

        if (elemShow === true) {
            allElemShow.css("width", "0").removeClass('menu-acco__desc-wrapper--show');
        } else {
            var lastElemShow = $(e.currentTarget).closest('.menu-acco').find('.menu-acco__desc-wrapper--show');
            var nowElemShow = $(e.currentTarget).find('.menu-acco__desc-wrapper');
            lastElemShow.css("width", "0").removeClass('menu-acco__desc-wrapper--show');
            nowElemShow.css("width", menuDescWidth).addClass('menu-acco__desc-wrapper--show');
        }
    });

});