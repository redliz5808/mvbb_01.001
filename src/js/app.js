const windowWidth = window.innerWidth;
const navLinks = document.querySelectorAll(".nav-link");
const dancingTickets = document.getElementsByClassName("dancing-ticket");
const pageUrl = window.location.pathname;

navLinks.forEach((link) => {
    linkPath = `${link.getAttribute("href")}/`;
    if (pageUrl == linkPath) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

if (windowWidth > 992) {
    setTimeout(() => {
        if (dancingTickets != null || dancingTickets != undefined) {
            for (let ticket of dancingTickets) {
                // duration timing-function direction name
                ticket.style.animation = "1.5s normal forwards wiggleTickets";
            }
        }
    }, 500);
}

const toggles = document.getElementsByClassName("text-toggle");

for (let toggleItem of toggles) {
    toggleItem.addEventListener("click", () => {
        let container = toggleItem.parentElement;
        let allChildren = container.children;

        for (let child of allChildren) {
            if (child.classList.contains("bio")) {
                child.classList.toggle("show");
            }
            if (child.classList.contains("collapse")) {
                child.classList.toggle("show");
            }
            if (child.classList.contains("expand")) {
                child.classList.toggle("hide");
            }
        }
    });
}
