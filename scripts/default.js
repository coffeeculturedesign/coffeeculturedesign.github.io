country = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[0];

window.addEventListener("load", async function () {
  await load("../components/navbar.html", "navbar");
  await load("../components/footer.html", "footer");

  if (getCookie("agreement") == "") {
    await load("../components/cookie-banner.html", "cookie");
  }

  if (getCookie("country") == "") setCookie("country", country, 30);
  
  this.document.getElementById("navbar-language-img").src =
    getCookie("country") == "Europe"
      ? "../img/ue-flag.webp"
      : "../img/us-flag.webp";
});
