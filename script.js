//Kollar width på sidan och ändrar h1 vid valda breakpoints
const mediaQueryList = [
    window.matchMedia("(min-width: 1200px)"),
    window.matchMedia("(min-width: 992px) and (max-width: 1199.999px)"),
    window.matchMedia("(min-width: 768px) and (max-width: 991.999px)"),
    window.matchMedia("(min-width: 576px) and (max-width: 767.999px)"),
    window.matchMedia("(max-width: 575.999px)")
]

function responsiveHeader() {
    if (mediaQueryList[0].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "Desktop > 1200px";
    }
    if (mediaQueryList[1].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "Desktop 992-1200px";
    }
    if (mediaQueryList[2].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "Tablet 768-992px";
    }
    if (mediaQueryList[3].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "Mobile 576-768p";
    }
    if (mediaQueryList[4].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "Mobile < 576px";
    }
}
for (let i = 0; i < mediaQueryList.length; i++) {
    responsiveHeader(mediaQueryList[i])
    mediaQueryList[i].addListener(responsiveHeader) // Känner av när width ändras
}
