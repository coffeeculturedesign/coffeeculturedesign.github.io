function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function cookieAgreement(val) {
  setCookie("agreement", val, 30);
  this.document.getElementById("cookie").style.display = "none";
}

function toggleCountry() {
  setCookie("country", getCookie("country") == "Europe" ? "Usa" : "Europe", 30);
  this.document.getElementById("navbar-language-img").src =
    getCookie("country") == "Europe"
      ? "../img/ue-flag.webp"
      : "../img/us-flag.webp";
  this.document.getElementById("navbar-language-img-mobile").src =
    getCookie("country") == "Europe"
      ? "../img/ue-flag.webp"
      : "../img/us-flag.webp";

  this.document.getElementById("shop-items").innerHTML = "";
  loadShop('t-shirt');
}

function loadShop(shopType) {
  let itemsFlag = 0;
  this.document.getElementById("shop-items").innerHTML = "";
  Array.from(document.getElementById("shop-menu").children).forEach((el) =>
    el.classList.remove("shop-selected")
  );
  this.document.getElementById(shopType).classList.toggle("shop-selected");
  fetch("../product.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.type == shopType) {
          load("../components/card.html", "shop-items", element);
          ++itemsFlag;
        }
      });
      if (itemsFlag == 0) {
        this.document.getElementById("shop-items").innerHTML =
          "<h3>Sorry! We are working on it.</h5>";
      }
    })
    .catch((err) => console.error(err));
}

function lockScroll(target = document.body) {
  const y = window.scrollY || document.documentElement.scrollTop;
  target.dataset.scrollY = y;
  target.style.position = "fixed";
  target.style.top = `-${y}px`;
  target.style.left = "0";
  target.style.right = "0";
  target.style.width = "100%";
}

function unlockScroll(target = document.body) {
  const y = parseInt(target.dataset.scrollY || "0", 10);
  target.style.position = "";
  target.style.top = "";
  target.style.left = "";
  target.style.right = "";
  target.style.width = "";
  delete target.dataset.scrollY;
  window.scrollTo(0, y);
}

function openMenu() {
  document.getElementById("navbar-link-mobile").classList.add("is-open");
  lockScroll();
}
function closeMenu() {
  document.getElementById("navbar-link-mobile").classList.remove("is-open");
  unlockScroll();
}

function toggleFaq(index) {
  const items = document.getElementsByClassName("faq-item");
  const clicked = items[index];
  const wasOpen = clicked.classList.contains("open");

  // Chiudi tutti
  Array.from(items).forEach((item) => {
    item.classList.remove("open");
    item.classList.add("closed");
  });

  // Se quello cliccato era chiuso, aprilo (accordion)
  if (!wasOpen) {
    clicked.classList.remove("closed");
    clicked.classList.add("open");
  }
}
