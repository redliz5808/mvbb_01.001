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
                if (ticket.classList.contains("one") || ticket.classList.contains("two")) {
                    ticket.style.animation = "1s normal forwards resetTicketsLeft";
                    ticket.style.left = "14rem";
                }
                if (ticket.classList.contains("three")) {
                    ticket.style.animation = "1s normal forwards resetTicketsThree";
                    ticket.style.right = "14rem";
                }
                if (ticket.classList.contains("four")) {
                    ticket.style.animation = "1s normal forwards resetTicketsFour";
                    ticket.style.right = "16rem";
                }
            }
        }
    }, 500);

    setTimeout(() => {
        if (dancingTickets != null || dancingTickets != undefined) {
            for (let ticket of dancingTickets) {
                // duration timing-function direction name
                ticket.style.animation = "1.5s normal forwards wiggleTickets";
            }
        }
    }, 1500);
}
