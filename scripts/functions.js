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

function generateProducts(arr) {
    let str = ``;
    arr.forEach(element => {
        str += getCard(element);
    });
    document.getElementsByClassName('card-holder')[0].innerHTML = str;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function agreeToCookie(value) {
    setCookie('agree', value, 30);
    document.getElementsByClassName('cookie-banner')[0].style.display = 'none';
}

function toggleFilters() {
    if (window.innerWidth < 976)
        document.getElementById('filters-part').style.display = (document.getElementById('filters-part').style.display == 'flex' ? 'none' : 'flex');
}