/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* ================= NAVBAR SCROLL ================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section, " +
        ".project-card, " +
        ".skill-card, " +
        ".stat-card, " +
        ".timeline-item, " +
        ".education-card"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});



/* ================= SMOOTH NAVIGATION ================= */

const navLinks =
    document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );


navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();


        const targetId =
            link.getAttribute("href");


        const target =
            document.querySelector(targetId);


        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});