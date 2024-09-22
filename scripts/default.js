let ps, cm;
let product;

function defaultload() {
    getNavBar('top-nav');
    getFooter('footer');

    if (getCookie('agree') == '') {
        getCookieBanner('cookie-banner');
    }

    ps = document.getElementById('page-selector');
    cm = document.getElementById('close-menu');

    document.querySelector('.menu').addEventListener('click', toggleMobileMenu);

    document.querySelector('.close-menu').addEventListener('click', hideMenu);

    updateCountryInfo(country);
}