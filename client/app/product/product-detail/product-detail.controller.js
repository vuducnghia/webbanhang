(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProductDetailController', ProductDetailController);

    ProductDetailController.$inject = ['$state', 'productData']
    function ProductDetailController($state, productData) {
        debugger;
        let data = productData;
        var responsiveNav = $('#responsive-nav'),
            catToggle = $('#responsive-nav .category-nav .category-header'),
            catList = $('#responsive-nav .category-nav .category-list'),
            menuToggle = $('#responsive-nav .menu-nav .menu-header'),
            menuList = $('#responsive-nav .menu-nav .menu-list');

        catToggle.on('click', function () {
            menuList.removeClass('open');
            catList.toggleClass('open');
        });

        menuToggle.on('click', function () {
            catList.removeClass('open');
            menuList.toggleClass('open');
        });

        $(document).click(function (event) {
            if (!$(event.target).closest(responsiveNav).length) {
                if (responsiveNav.hasClass('open')) {
                    responsiveNav.removeClass('open');
                    $('#navigation').removeClass('shadow');
                } else {
                    if ($(event.target).closest('.nav-toggle > button').length) {
                        if (!menuList.hasClass('open') && !catList.hasClass('open')) {
                            menuList.addClass('open');
                        }
                        $('#navigation').addClass('shadow');
                        responsiveNav.addClass('open');
                    }
                }
            }
        });

        // PRODUCT DETAILS SLICK
        $('#product-main-view').slick({
            infinite: true,
            speed: 300,
            dots: false,
            arrows: true,
            fade: true,
            asNavFor: '#product-view',
        });

        $('#product-view').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            asNavFor: '#product-main-view',
        });

        // PRODUCT ZOOM
        $('#product-main-view .product-view').zoom();
    }
})();