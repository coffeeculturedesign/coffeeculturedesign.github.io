let ps, cm;
let product;

fetch('../product.json')
    .then(res => res.json())
    .then((data) => {
        product = data;
    })
    .catch(err => console.error(err));

function shopload() {
    getNavBar('top-nav');
    getFooter('footer');
    if (getCookie('agree') == '') {
        getCookieBanner('cookie-banner');
    }

    ps = document.getElementById('page-selector');
    cm = document.getElementById('close-menu');

    document.querySelector('.menu').addEventListener('click', toggleMobileMenu);

    document.querySelector('.close-menu').addEventListener('click', hideMenu);


    if (window.innerWidth > 976)
        document.getElementById('filters').style.height = document.getElementById('shop-section').offsetHeight + 'px';

    updateCountryInfo(country);
}