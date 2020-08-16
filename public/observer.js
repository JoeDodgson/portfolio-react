$(document).ready(function () {
    const about = document.querySelector("#about");
    const contact = document.querySelector("#contact");
    const navAbout = document.querySelector("#nav-about");
    const navPortfolio = document.querySelector("#nav-portfolio");
    const navContact = document.querySelector("#nav-contact");

    const aboutOptions = {
        rootMargin: "0px 0px 0px 0px"
    };

    const aboutObserver = new IntersectionObserver
        (function (
            entries,
            aboutObserver
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    navAbout.classList.add("nav-not-current");
                    navAbout.classList.remove("nav-current");
                    if (navContact.classList.contains("nav-not-current")) {
                        navPortfolio.classList.add("nav-current");
                        navPortfolio.classList.remove("nav-not-current");
                    }
                } else {
                    navAbout.classList.add("nav-current");
                    navAbout.classList.remove("nav-not-current");
                    navPortfolio.classList.add("nav-not-current");
                    navPortfolio.classList.remove("nav-current");
                }
            })
        }, aboutOptions);

    aboutObserver.observe(about);
    
    const contactOptions = {};
    const contactObserver = new IntersectionObserver
    (function (
        entries,
        contactObserver
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    navContact.classList.add("nav-not-current");
                    navContact.classList.remove("nav-current");
                    if (navAbout.classList.contains("nav-not-current")) {
                        navPortfolio.classList.add("nav-current");
                        navPortfolio.classList.remove("nav-not-current");
                    }
                } else {
                    navContact.classList.add("nav-current");
                    navContact.classList.remove("nav-not-current");
                    navPortfolio.classList.add("nav-not-current");
                    navPortfolio.classList.remove("nav-current");
                }
            })
        }, contactOptions);

    contactObserver.observe(contact);
});