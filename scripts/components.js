function getNavBar(where) {
    let component = /* html */
        `<div class="brand-name">
        <p class="title" style="cursor: pointer;"><a href="../">Coffee Culture</a></p>
    </div>
    <div class="close-menu" id="close-menu">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00098 5L19 18.9991" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M5.00009 18.9991L18.9991 5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
    <div class="menu">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
                fill="#292D32" />
            <path
                d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
                fill="#292D32" />
            <path
                d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
                fill="#292D32" />
        </svg>
    </div>
    <div class="page-selector" id="page-selector">
        <div>
            <p class="title underline-on-hoover"><a href="../">Home</a></p>
            <p class="title underline-on-hoover"><a href="../shop">Shop</a></p>
        </div>
        <p>|</p>
        <img src="../images/eu.jpg" height="28px" id="flag" onclick="toggleCountry()">
    </div>`;

    document.getElementsByClassName(where)[0].innerHTML = component;
}

function getFooter(where) {
    let component = /* html */
        `
    <div class="sitemap">
        <div class="logo">
            <img src="../images/logo.png" height="70px" width="70px">
        </div>
        <div class="links">
            <p style="margin: 5px 0; color: rgba(255, 255, 255, 0.9);">Our company</p>
            <div>
                <p class="underline-on-hoover" onclick="location.replace('./')">Home</p>
            </div>
            <div>
                <p class="underline-on-hoover"
                    onclick="document.getElementsByClassName('about')[0].scrollIntoView();">About</p>
            </div>
            <div>
                <p class="underline-on-hoover"
                    onclick="document.getElementsByClassName('social')[0].scrollIntoView();">Social</p>
            </div>
        </div>
        <div class="links">
            <p style="margin: 5px 0; color: rgba(255, 255, 255, 0.9);">Contact us</p>
            <div>
                <p class="underline-on-hoover" onclick="window.open('mailto:crolalibe@gmail.com');">Mail</p>
            </div>
            <div>
                <p class="underline-on-hoover"
                    onclick="window.open('https\://www.instagram.com/coffeeculturedesign/', '_blank').focus();">
                    Direct</p>
            </div>
        </div>
        <div class="links">
            <p style="margin: 5px 0; color: rgba(255, 255, 255, 0.9);">Social</p>
            <div>
                <p class="underline-on-hoover"
                    onclick="window.open('https\://www.instagram.com/coffeeculturedesign/', '_blank').focus();">
                    Instagram</p>
            </div>
            <div>
                <p class="underline-on-hoover"
                    onclick="window.open('https\://www.threads.net/@coffeeculturedesign', '_blank').focus();">
                    Threads</p>
            </div>
        </div>
    </div>
    <div class="copyright">© 2024 Coffee Culture. All rights reserved. | Privacy Policy | Terms of Service</div>
    `

    document.getElementsByClassName(where)[0].innerHTML = component;
}

function getCard(p) {
    function radioColors(arr) {
        let str = ``;

        arr.forEach(element => {
            str += `<input type="radio" style="background: ${element};">`;
        });

        return str;
    }

    let component = /* html */
        `
    <div class="card" onclick="window.open('${p.link}', '_blank').focus();">
        <div class="center max-content">
            <img src="${p.photos[0]}" width="200px">
        </div>
        <h3>${p.type}</h3>
        <h1>${p.name}</h1>
        <div class="color-and-price max-content">
            <div id="radio-holder">
                ${radioColors(p.colors)}
            </div>
            <h2>${p.price}</h2>
        </div>
    </div>
    `;

    return component;
}

function getCookieBanner(where) {
    let component = /* html */
        `
        <div class="center">
            <svg width="32px" height="32px" stroke-width="0.7" version="1.1" viewBox="0 0 32 32">
                <path
                    d="m12.34,14.1c1.74,0 3.15,-1.41 3.15,-3.14c0,-0.75 -0.27,-1.44 -0.71,-1.98c-0.58,-0.7 -1.46,-1.16 -2.44,-1.16c-1.74,0 -3.15,1.41 -3.15,3.14c0,0.77 0.28,1.48 0.75,2.03c0.58,0.68 1.44,1.11 2.4,1.11zm0,-4.78c0.91,0 1.65,0.74 1.65,1.64c0,0.91 -0.74,1.64 -1.65,1.64c-0.91,0 -1.65,-0.74 -1.65,-1.64c0,-0.91 0.74,-1.64 1.65,-1.64z" />
                <path
                    d="m10.26,25.41c1.74,0 3.15,-1.41 3.15,-3.14c0,-0.75 -0.27,-1.44 -0.71,-1.99c-0.58,-0.7 -1.46,-1.15 -2.44,-1.15c-1.74,0 -3.15,1.41 -3.15,3.14c0,0.77 0.28,1.48 0.75,2.03c0.58,0.68 1.44,1.11 2.4,1.11zm0,-4.78c0.91,0 1.65,0.74 1.65,1.64c0,0.91 -0.74,1.64 -1.65,1.64c-0.91,0 -1.65,-0.74 -1.65,-1.64c0,-0.91 0.74,-1.64 1.65,-1.64z" />
                <path
                    d="m31.64,15.86l0,-0.06c-0.01,-0.39 -0.32,-0.72 -0.71,-0.74c-1.12,-0.06 -2.1,-0.72 -2.57,-1.73c-0.09,-0.2 -0.27,-0.35 -0.49,-0.41c-0.21,-0.06 -0.44,-0.02 -0.63,0.11c-0.5,0.35 -1.12,0.55 -1.74,0.55c-0.52,0 -1.04,-0.14 -1.5,-0.4c-1.01,-0.58 -1.59,-1.7 -1.49,-2.86c0.02,-0.22 -0.06,-0.44 -0.22,-0.6c-0.16,-0.16 -0.38,-0.24 -0.6,-0.22c-0.09,0.01 -0.18,0.01 -0.27,0.01c-1.07,0 -2.07,-0.57 -2.6,-1.49c-0.58,-1.01 -0.53,-2.27 0.15,-3.22c0.13,-0.18 0.17,-0.41 0.11,-0.62c-0.06,-0.21 -0.21,-0.39 -0.41,-0.49c-1.02,-0.47 -1.68,-1.45 -1.74,-2.56c-0.02,-0.39 -0.34,-0.7 -0.74,-0.71l-0.06,0c-0.05,0 -0.1,0 -0.14,0c-8.63,0 -15.64,6.99 -15.64,15.59s7.02,15.59 15.64,15.59s15.64,-6.99 15.64,-15.59c0,-0.05 0,-0.09 0,-0.14zm-1.95,3.69c-0.51,2 -1.58,3.99 -2.87,5.52c-1.29,1.53 -1.5,1.57 -2.37,2.22c-0.06,0.05 -0.12,0.09 -0.18,0.14c-2.33,1.68 -5.18,2.67 -8.27,2.67c-7.8,0 -14.14,-6.32 -14.14,-14.09c0,-1.22 0.16,-2.4 0.45,-3.52c0.11,-0.42 0.24,-0.84 0.39,-1.25c0,0 0,0 0,-0.01c0,0 -0.71,2.41 0,0c0.71,-2.4 1.62,-3.82 3.35,-5.23c1.73,-1.41 5.8,-3.96 9.49,-4.08c0.24,1.1 0.88,2.07 1.81,2.72c-0.61,1.31 -0.55,2.85 0.19,4.13c0.73,1.27 2.05,2.09 3.49,2.22c0.13,1.43 0.96,2.75 2.23,3.48c0.68,0.39 1.46,0.6 2.25,0.6c0.66,0 1.31,-0.14 1.9,-0.41c0.65,0.92 1.63,1.57 2.73,1.8c-0.03,1.06 0.07,1.09 -0.45,3.09z" />
                <path
                    d="m18.85,23.91c2.23,0 4.05,-1.81 4.05,-4.04c0,-0.97 -0.35,-1.86 -0.92,-2.56c-0.74,-0.9 -1.87,-1.48 -3.13,-1.48c-2.23,0 -4.05,1.81 -4.05,4.04c0,0.99 0.36,1.9 0.95,2.6c0.74,0.88 1.86,1.44 3.1,1.44zm0,-6.58c1.41,0 2.55,1.14 2.55,2.54c0,1.4 -1.15,2.54 -2.55,2.54c-1.41,0 -2.55,-1.14 -2.55,-2.54c0,-1.4 1.14,-2.54 2.55,-2.54z" />
            </svg>
        </div>
        <div>
            <p>We use thrid-party <span>cookies</span> in order to personalize your site expirience.</p>
        </div>
        <div class="cookie-btn-holder">
            <div class="cookie-btn center" onclick="agreeToCookie(true)">
                <p>Allow all</p>
            </div>
            <div class="cookie-btn center" onclick="agreeToCookie(false)">
                <p>Decline</p>
            </div>
        </div>
    `;

    document.getElementsByClassName(where)[0].style.display = 'flex';
    document.getElementsByClassName(where)[0].innerHTML = component;
}