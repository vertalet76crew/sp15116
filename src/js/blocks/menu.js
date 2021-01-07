import $ from 'jquery';

// import "jquery-ui-bundle";
// import "jquery-ui-bundle/jquery-ui.css";
function menu() {
    const $dropdown = $('[data-target="dropdown"]');
    const $products = $('[data-target="products-panel"]');
    const $solutions = $('[data-target="solutions-panel"]');
    const $resources = $('[data-target="resources-panel"]');
    const $tabProducts = $('[data-target="products"]');
    const $tabSolutions = $('[data-target="solutions"]');
    const $tabResources = $('[data-target="resources"]');
    let isProducts = false;
    let isSolution = false;
    let isResouces = false;

    $('body').on('click', function(e) {
        if (!$(e.target).closest('[data-target="dropdown"]').length) {
            if ($(e.target).closest('[data-target="products"]').length) {
                $tabProducts.toggleClass('active');
                $tabSolutions.removeClass('active');
                $tabResources.removeClass('active');
                $tabProducts.find('[data-target="dropdown"]').toggleClass('show');
                $tabSolutions.find('[data-target="dropdown"]').removeClass('show');
                $tabResources.find('[data-target="dropdown"]').removeClass('show');
            } else if ($(e.target).closest('[data-target="solutions"]').length) {
                $tabSolutions.toggleClass('active');
                $tabProducts.removeClass('active');
                $tabResources.removeClass('active');
                $tabSolutions.find('[data-target="dropdown"]').toggleClass('show');
                $tabProducts.find('[data-target="dropdown"]').removeClass('show');
                $tabResources.find('[data-target="dropdown"]').removeClass('show');
            } else if ($(e.target).closest('[data-target="resources"]').length) {
                $tabResources.toggleClass('active');
                $tabSolutions.removeClass('active');
                $tabProducts.removeClass('active');
                $tabResources.find('[data-target="dropdown"]').toggleClass('show');
                $tabProducts.find('[data-target="dropdown"]').removeClass('show');
                $tabSolutions.find('[data-target="dropdown"]').removeClass('show');
            } else {
                $tabResources.removeClass('active');
                $tabSolutions.removeClass('active');
                $tabProducts.removeClass('active');
                $tabResources.find('[data-target="dropdown"]').removeClass('show');
                $tabProducts.find('[data-target="dropdown"]').removeClass('show');
                $tabSolutions.find('[data-target="dropdown"]').removeClass('show');
            }
        }
    });
}

export default menu;
