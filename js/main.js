$(document).ready(function() {
    var scrollEnable = true;
    var currentSection = 0;
    var numberSection = ($('.section').length - 1);
    var moveElem = $('.wrapper');
    var fixedMenu = $('.menu-radio-fixed__link');
    fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active');
    var currentSliderBurgersPage = 0;
    var numberSliderBurgersPage = ($('.burgers').find('.slider-content').length - 1);
    var moveSliderBurgers = $('.burgers .slider__wrapper');
    var currentTouchPointY

    // Yandex map
    ymaps.ready(init);
    var myMap;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [59.936682, 30.311120],
            zoom: 11,
            controls: [],
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('multiTouch');

        var coords = [
                [59.973687, 30.311971],
                [59.888904, 30.313729],
                [59.915125, 30.491872],
                [59.946744, 30.382181]
            ],
            myCollection = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-26, -52]
            });

        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }

        myMap.geoObjects.add(myCollection);

    }

    // Clear order form
    $('.form-order__submit-text').on('click', function(e) {
        e.preventDefault();
        $('form[class=form-order]').trigger('reset');
    });

    // Send order form to server and handle answer
    $('.form-order__buttom-order').on('click', function(e) {
        e.preventDefault();
        var url = $(e.target).closest('.form-order').attr('action'),
            data = $(e.target).closest('.form-order').serialize();
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'JSON'
        }).done(function(msg) {
            $('.popup-order__name').text('Привет, ' +
                msg.nameAnswer + '! ' +
                msg.moneyAnswer + ' ' +
                msg.mesAnswer);
            $('.popup-order-wrapper').css({
                "display": "flex"
            });
            scrollEnable = false;
        }).fail(function(jqXHR, textStatus) {
            $('.popup-order__name').text('Ошибка отправки сообщения');
            $('.popup-order-wrapper').css({
                "display": "flex"
            });
            scrollEnable = false;
        });
    });

    $('.popup-order__buttom-order').on('click', function(e) {
        e.preventDefault();
        $('.popup-order-wrapper').css({
            "display": "none"
        });
        scrollEnable = true;
    });

    // Popup on click button in feeds section
    $('.feeds__item').on('click', function(e) {
        e.preventDefault();
        if (!($(e.currentTarget).find('.feeds__text').css("display") == 'none')) return;
        feedsHeader = $(e.currentTarget).find('.feeds__header').text();
        feedsText = $(e.currentTarget).find('.feeds__text').text();
        $('.feeds-popup__header').text(feedsHeader);
        $('.feeds-popup__text').text(feedsText);
        $('.feeds-popup').css({ "display": "flex" });
        scrollEnable = false;
    });
    $('.feeds__button').on('click', function(e) {
        e.preventDefault();
        feedsHeader = $(e.currentTarget).closest('.feeds__item').find('.feeds__header').text();
        feedsText = $(e.currentTarget).closest('.feeds__item').find('.feeds__text').text();
        $('.feeds-popup__header').text(feedsHeader);
        $('.feeds-popup__text').text(feedsText);
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
        moveElem.css({
            'transform': 'translateY(' + (currentSection * -100) + 'vh)',
            '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
        });
        fixedMenu.eq(currentSection).addClass('menu-radio-fixed__link-active').siblings().removeClass('menu-radio-fixed__link-active');
        scrollEnable = false;
        setTimeout(function() { scrollEnable = true }, 1500);
    });

    // Animated scroll page on keyDown
    $(document).on('keydown', function(e) {
        if (!scrollEnable) return;
        if (e.originalEvent.keyCode == 40) {
            if (currentSection < numberSection) currentSection++;
            moveElem.css({
                'transform': 'translateY(' + (currentSection * -100) + 'vh)',
                '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
            });
        }
        if (e.originalEvent.keyCode == 38) {
            if (currentSection > 0) currentSection--;
            moveElem.css({
                'transform': 'translateY(' + (currentSection * -100) + 'vh)',
                '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
            });
        }

    });

    // Animated scroll page on touch
    $(document).on('touchcancel', function(e) {

    });
    $(document).on('touchstart', function(e) {

        if (!scrollEnable) return;
        currentTouchPointY = e.originalEvent.changedTouches[0].screenY;
    });
    $(document).on('touchmove', function(e) {
        e.preventDefault();
    });
    $(document).on('touchend', function(e) {

        if (!scrollEnable) return;
        if ((currentTouchPointY - e.originalEvent.changedTouches[0].screenY) > 10) {
            if (currentSection < numberSection) currentSection++;
            moveElem.css({
                'transform': 'translateY(' + (currentSection * -100) + 'vh)',
                '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
            });
        }
        if ((currentTouchPointY - e.originalEvent.changedTouches[0].screenY) < -10) {
            if (currentSection > 0) currentSection--;
            moveElem.css({
                'transform': 'translateY(' + (currentSection * -100) + 'vh)',
                '-webkit-transform': 'translateY(' + (currentSection * -100) + 'vh)'
            });
        }
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

    // Animated burgers-slider section
    $('.conposition-menu').on('mouseenter', function(e) {
        e.preventDefault();
        $('.conposition-desc').css({
            'opacity': '1'
        })
    });
    $('.conposition-menu').on('mouseleave', function(e) {
        e.preventDefault();
        $('.conposition-desc').css({
            'opacity': '0'
        })
    });

    $('.burgers').find('.slider-content').eq(0).addClass('slider-content--relative');
    // for (var i = 1; i <= numberSliderBurgersPage; i++) {

    //         $('.burgers').find('.slider-content:nth-child(' + i + ')').css({
    //             'margin-left': (i * 100) + 'vw)',
    //         });

    //         console.log('margin-left' + (i * 100) + 'vw)');

    // }

    $('.arrow-scroll--rotate-minus90').on('click', function(e) {
        e.preventDefault();
        if (currentSliderBurgersPage >= numberSliderBurgersPage) return;
        currentSliderBurgersPage++;

        moveSliderBurgers.css({
            'transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)',
            '-webkit-transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)'
        }).find('.slider-content').eq(currentSliderBurgersPage).addClass('slider-content--active').siblings().removeClass('slider-content--active');

    });
    $('.arrow-scroll--rotate-plus90').on('click', function(e) {
        e.preventDefault();
        if (currentSliderBurgersPage <= 0) return;
        currentSliderBurgersPage--;

        moveSliderBurgers.css({
            'transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)',
            '-webkit-transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)'
        }).find('.slider-content').eq(currentSliderBurgersPage).addClass('slider-content--active').siblings().removeClass('slider-content--active');

    });

    $('.arrow-scroll--rotate-minus90').on('touchstart', function(e) {
        e.preventDefault();
        if (currentSliderBurgersPage >= numberSliderBurgersPage) return;
        currentSliderBurgersPage++;

        moveSliderBurgers.css({
            'transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)',
            '-webkit-transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)'
        }).find('.slider-content').eq(currentSliderBurgersPage).addClass('slider-content--active').siblings().removeClass('slider-content--active');

    });
    $('.arrow-scroll--rotate-plus90').on('touchstart', function(e) {
        e.preventDefault();
        if (currentSliderBurgersPage <= 0) return;
        currentSliderBurgersPage--;

        moveSliderBurgers.css({
            'transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)',
            '-webkit-transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)'
        }).find('.slider-content').eq(currentSliderBurgersPage).addClass('slider-content--active').siblings().removeClass('slider-content--active');

    });

    // Animated burgers-slider section from keydown
    $(document).on('keydown', function(e) {
        if (currentSection != 2) return
        if (e.originalEvent.keyCode == 37) {
            if (currentSliderBurgersPage >= numberSliderBurgersPage) return;
            currentSliderBurgersPage++;
            moveSliderBurgers.css({
                'transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)',
                '-webkit-transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)'
            }).find('.slider-content').eq(currentSliderBurgersPage).addClass('slider-content--active').siblings().removeClass('slider-content--active');
        }
        if (e.originalEvent.keyCode == 39) {
            if (currentSliderBurgersPage <= 0) return;
            currentSliderBurgersPage--;
            moveSliderBurgers.css({
                'transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)',
                '-webkit-transform': 'translateX(' + (currentSliderBurgersPage * -100) + 'vw)'
            }).find('.slider-content').eq(currentSliderBurgersPage).addClass('slider-content--active').siblings().removeClass('slider-content--active');
        }
    });

    // var currentSliderBurgersPage = 0;
    // var numberSliderBurgersPage = ($('.burgers').find('.slider-content').length - 1);
    // var moveSliderBurgers = $('.burgers .slider__wrapper');


});