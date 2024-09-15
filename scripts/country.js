let country = 'Europe';

if (getCookie('country') != '') {
    country = getCookie('country');
} else {
    country = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[0];
    getCookie('agree') == 'true' ? setCookie('country', country, 30) : undefined;
}

function updateCountryInfo(c) {
    country = c;
    getCookie('agree') == 'true' ? setCookie('country', country, 30) : undefined;
    let page = window.location.href.split('/')[3];
    switch (page) {
        case 'shop':
            updateShop();
            break;
        case 'cookie':
            break;
        default:
            updateHome();
    }
}

function updateShop() {
    if (country == 'Europe') {
        generateProducts(product.eu);
        try {
            document.getElementById('flag').src = '../images/eu.jpg';
        } catch (error) { console.log(error) }
    } else {
        generateProducts(product.us);
        try {
            document.getElementById('flag').src = '../images/us.jpg';
        } catch (error) { console.log(error) }
    }
}

function updateHome() {
    if (country == 'Europe') {
        document.getElementById('flag').src = '../images/eu.jpg';
        document.querySelector(':root').style.setProperty('--cappuccino-link', "url('../images/basic-tee-cappucino-back-eu.png')");
        document.querySelector(':root').style.setProperty('--macchiato-link', "url('../images/basic-tee-macchiato-back-eu.png')");
        document.getElementById('cappuccino-price').innerHTML = '€16.99';
        document.getElementById('macchiato-price').innerHTML = '€16.99';
    } else {
        document.getElementById('flag').src = '../images/us.jpg';
        document.querySelector(':root').style.setProperty('--cappuccino-link', "url('../images/basic-tee-cappucino-back-us.png')");
        document.querySelector(':root').style.setProperty('--macchiato-link', "url('../images/basic-tee-macchiato-back-us.png')");
        document.getElementById('cappuccino-price').innerText = '$23.99';
        document.getElementById('macchiato-price').innerText = '$23.99';
    }
}