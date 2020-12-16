import $ from 'jquery';

function menu(isMobile) {
    const $menu = $('[data-block="menu"]');
    const $body = $('body');
    const $html = $('html');

    $menu.on('click', '[data-target="toggle"]', function(e) {
        $menu.toggleClass('menu_open');

        if (isMobile) {
            $html.toggleClass('overflow-hidden');
        } else {
            $body.toggleClass('overflow-hidden');
        }

        e.preventDefault();
    });

    $menu.on('click', '[data-target="child"]', function(e) {
        const $item = $(this).parent();

        if (isMobile || window.matchMedia('(max-width: 1019px)').matches) {
            $item.toggleClass('menu__item_open')
                .siblings()
                .removeClass('menu__item_open');
        }

        e.preventDefault();
    });

    function closeMenu() {
        $menu.removeClass('menu_open');
        $menu.find('.menu__item_open').removeClass('menu__item_open');
    }

    if (isMobile) {
        window.addEventListener('orientationchange', closeMenu, false);
    } else {
        $(window).resize(closeMenu);
    }
}

export default menu;
