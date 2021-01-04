import $ from 'jquery';
import 'jquery-ui-bundle';
// import "jquery-ui-bundle/jquery-ui.css";
function menu() {
    const $dropdown = $('[data-target="dropdown"]');
    const $products = $('[data-target="products-panel"]');
    const $solutions = $('[data-target="solutions-panel"]');
    const $resources = $('[data-target="resources-panel"]');

    $('body').on('click', function(e) {
        if (!$(e.target).closest('[data-target="dropdown"]').length) {
            if ($(e.target).closest('[data-target="products"]').length) {
                $dropdown.addClass('show');
                $products.removeClass('hide');
                $solutions.addClass('hide');
                $resources.addClass('hide');
            } else if ($(e.target).closest('[data-target="solutions"]').length) {
                $dropdown.addClass('show');
                $solutions.removeClass('hide');
                $resources.addClass('hide');
                $products.addClass('hide');
            } else if ($(e.target).closest('[data-target="resources"]').length) {
                $dropdown.addClass('show');
                $resources.removeClass('hide');
                $solutions.addClass('hide');
                $products.addClass('hide');
            } else {
                $dropdown.removeClass('show');
                $resources.addClass('hide');
                $solutions.addClass('hide');
                $products.addClass('hide');
            }
        }
    });
}

export default menu;
