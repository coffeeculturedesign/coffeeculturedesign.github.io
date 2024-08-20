// variables
let country = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[0];

let ps, cm; // page-selector, close-menu

// functions
function shopload() {
    getNavBar('top-nav');
    getFooter('footer');

    ps = document.getElementById('page-selector');
    cm = document.getElementById('close-menu');

    document.querySelector('.menu').addEventListener('click', toggleMobileMenu);

    document.querySelector('.close-menu').addEventListener('click', hideMenu);

    document.getElementById('filters').style.height = document.getElementById('shop-section').offsetHeight + 'px';
}

function indexload() {
    getNavBar('top-nav');
    getFooter('footer');


    ps = document.getElementById('page-selector');
    cm = document.getElementById('close-menu');

    document.querySelector('.menu').addEventListener('click', toggleMobileMenu);

    document.querySelector('.close-menu').addEventListener('click', hideMenu);

    // set by country
    if (country == 'Europe') {
        document.querySelector(':root').style.setProperty('--cappuccino-link', "url('./images/cappucino-back-eu.png')");
        document.querySelector(':root').style.setProperty('--macchiato-link', "url('./images/macchiato-back-eu.png')");
        document.getElementById('cappuccino-price').innerText = '€16.99';
        document.getElementById('macchiato-price').innerText = '€16.99';
    }
}

function toggleMobileMenu() {
    if (ps.classList.contains('show')) {
        hideMenu();
    } else {
        showMenu();
    }
}

function showMenu() {
    ps.classList.remove('hide');
    ps.style.display = "flex";

    void ps.offsetWidth;

    ps.classList.add('show');
    cm.style.display = "block";
    document.body.style.overflowY = "hidden";
    document.body.style.height = "100vh";
}

function hideMenu() {
    ps.classList.remove('show');
    cm.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.height = "unset";
    ps.classList.add('hide');

    ps.addEventListener('animationend', function hideOnAnimationEnd() {
        ps.style.display = "none";
        ps.removeEventListener('animationend', hideOnAnimationEnd);
    }, { once: true });
}

function gotoClass(classElement) {
    if (window.innerWidth <= 800) hideMenu();
    document.getElementsByClassName(classElement)[0].scrollIntoView();
}

function toggleCountry() {
    country == 'Europe' ? updateCountryInfo('America') : updateCountryInfo('Europe');
}

function updateCountryInfo(c) {
    country = c;
    if (c == 'Europe') {
        document.getElementById('flag').src = '../images/eu.jpg';
        document.querySelector(':root').style.setProperty('--cappuccino-link', "url('./images/cappucino-back-eu.png')");
        document.querySelector(':root').style.setProperty('--macchiato-link', "url('./images/macchiato-back-eu.png')");
        document.getElementById('cappuccino-price').innerText = '€16.99';
        document.getElementById('macchiato-price').innerText = '€16.99';
    } else {
        document.getElementById('flag').src = '../images/us.jpg';
        document.querySelector(':root').style.setProperty('--cappuccino-link', "url('./images/cappucino-back-us.png')");
        document.querySelector(':root').style.setProperty('--macchiato-link', "url('./images/macchiato-back-us.png')");
        document.getElementById('cappuccino-price').innerText = '$23.99';
        document.getElementById('macchiato-price').innerText = '$23.99';
    }
}