const windowWidth = window.innerWidth;
const navLinks = document.getElementsByClassName("nav-link");
const dancingTickets = document.getElementsByClassName("dancing-ticket");
const pageUrl = window.location.pathname;

for (let link of navLinks) {
    let linkDestination = link.pathname;

    let urlArray = pageUrl.split("/");
    let destinationArray = linkDestination.split("/");
    let indexOfPage = destinationArray.indexOf("pages");
    let emptyIndex = destinationArray.indexOf("");

    if (indexOfPage > -1) {
        destinationArray.splice(indexOfPage, 1);
    } else if (emptyIndex > -1) {
        destinationArray.splice(indexOfPage, 1);
    }

    for (let pathname of destinationArray) {
        if (urlArray.includes(pathname) && pathname !== "") {
            link.classList.add("active");
        }
    }
}

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
            if(child.classList.contains("collapse")) {
                child.classList.toggle("show");
            }
            if(child.classList.contains("expand")) {
                child.classList.toggle("hide");
            }
        }

    })
}