const navbarToggler = document.getElementById("navbarToggler");
const navbarTogglerBtn = document.getElementById("navbarTogglerBtn");
const mainNav = document.getElementById("mainNav");
const navLogoDark = document.getElementById("navLogoDark");
const activePage = window.location.href;
let navLinks = document.getElementsByClassName("nav-link");
let mobileLogo = document.getElementsByClassName("mobile-logo")[0];

navbarTogglerBtn.addEventListener("click", () => {
    if (navbarToggler.getAttribute("aria-expanded") == "true") {
        mainNav.classList.add("expanded");
        if (mobileLogo != null) {
            mobileLogo.classList.add("d-none");
        }
    } else {
        mainNav.classList.remove("expanded");
        if (mobileLogo != null) {
            mobileLogo.classList.remove("d-none");
        }
    }
});

for (let link of navLinks) {
    if (link == activePage && link.innerHTML !== "Home") {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
}
