var AppController = function () {
    var headerHeight;
    var $window = $(window);
    var navbar = $('#theNavBar');

    var init = function () {

        applyFullHeightHeader();
        $window.on('scroll', applyFixedStickyNav);
        $window.on('resize', applyWhenResize);
        navbar.on('activate.bs.scrollspy', applyOnScrollSpy);
        applyClickEvent();
        applyNavigationFixForPhone();
        checkHash();
      
       

    };

    var applyClickEvent = function () {
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            if ($($.attr(this, 'href')).length > 0) {
                $('html, body').animate(
                    {
                        scrollTop: $($.attr(this, 'href')).offset().top
                    }, 600);
            }
            return false;
        });
    };

    var applyOnScrollSpy = function () {
        window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
    };

    var applyFixedStickyNav = function () {
        toggleStickyNav();
    };

    var applyNavigationFixForPhone = function () {
        $('.navbar li a').on('click',function (e) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
            $('.navbar-toggle').addClass('collapsed');
        });
    };

    var toggleStickyNav = function () {
        if ($window.scrollTop() >= headerHeight) {
            navbar.addClass('js-sticky');
        } else {
            navbar.removeClass('js-sticky');
        }
    };

    var applyWhenResize = function () {
        applyFullHeightHeader();
        toggleStickyNav();
    };

    var applyFullHeightHeader = function () {
        headerHeight = $(window).height();
        $('.jumbotron').css({ height: headerHeight + 'px' });
    };

    function checkHash() {
        if (window.location.hash.length>0) {
            var anchorLink = window.location.hash.replace('#/', '#');
            var anchorTriggerLink = $('a[href="' + anchorLink + '"]');
            if (anchorTriggerLink) {
                anchorTriggerLink.trigger('click');
            }
        }
          }

    return {
        init: init
    };

}();



