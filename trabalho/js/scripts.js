

// Progress bar
const progressBar = document.querySelector('.progress-bar');
const sections = document.querySelectorAll("section");
const halfCircles = document.querySelectorAll('.half-circle');
const topCircle = document.querySelector('.half-circle-top');
const progressBarCircle = document.querySelector('.progress-bar-circle');


const progressBarFn = () => {
    let pageViewportHeight = window.innerHeight;
    let pageHeight = document.documentElement.scrollHeight;
    let scrolledPortion = window.pageYOffset;
    let scrolledPortionDegree = (scrolledPortion / (pageHeight - pageViewportHeight)) * 360;
    let isBottom = scrolledPortion + pageViewportHeight === pageHeight;


    halfCircles.forEach(el => {
        el.style.transform = `rotate(${scrolledPortionDegree}deg)`;
        if (scrolledPortionDegree >= 180) {
            halfCircles[0].style.transform = `rotate(180deg)`;
            topCircle.style.opacity = "0";
        }

        if (scrolledPortionDegree < 180) {
            topCircle.style.opacity = "1";
        }
    });


    // Progress bar arrow
    isBottom ? progressBarCircle.style.transform = "rotate(180deg)" : progressBarCircle.style.transform = "rotate(0deg)";
    // End of Progress bar arrow
}

progressBarFn();
// End of Progress Bar

// Navigation
const nav = document.querySelector('.navbar');
const navLink = document.querySelector('.navbar-link');
const menuIcon = document.querySelector('.menu-icon')

document.addEventListener("scroll", () => {
    menuIcon.classList.add('show-menu-icon');
    nav.classList.add('hide-navbar');
    if (window.scrollY === 0) {
        menuIcon.classList.remove('show-menu-icon');
        nav.classList.remove('hide-navbar');
    }
    progressBarFn();
});

menuIcon.addEventListener('click', () => {
    menuIcon.classList.remove('show-menu-icon');
    nav.classList.remove('hide-navbar');
});

// End of Navigation
