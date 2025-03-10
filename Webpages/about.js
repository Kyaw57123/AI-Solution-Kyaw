


document.addEventListener("DOMContentLoaded", function () {
    // Get current page URL
    let currentPage = window.location.pathname.split("/").pop();

    // Select all nav links
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Loop through links and update the active class
    navLinks.forEach(link => {
        let linkHref = link.getAttribute("href");

        // If the link matches the current page, add active class
        if (linkHref === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});


//this function is for hero.
$(document).ready(function () {
    $('.hero-title').css({ opacity: 0, transform: 'translateY(-50px)' }).animate({ opacity: 1, transform: 'translateY(0)' }, 1500);
    $('.hero-subtitle').css({ opacity: 0 }).delay(500).animate({ opacity: 1 }, 1500);
    $('.hero-btn').css({ opacity: 0 }).delay(1000).animate({ opacity: 1 }, 1500);
});



//function for program image.
const track = document.getElementById("carousel");

let position = 0;
const itemWidth = 180; // Adjust based on the width of each item + margin

function scrollLeft() {
    if (position > 0) {
        position -= itemWidth;
    } else {
        position = track.scrollWidth - track.clientWidth; // Go to the last item
    }
    track.style.transform = `translateX(-${position}px)`;
}

function scrollRight() {
    if (position < track.scrollWidth - track.clientWidth) {
        position += itemWidth;
    } else {
        position = 0; // Reset back to first item
    }
    track.style.transform = `translateX(-${position}px)`;
}
// Auto-scroll function
function autoScroll() {
    scrollRight();
}
// Set auto-scrolling every 3 seconds
setInterval(autoScroll, 3000);



// this is out program image
function swapImage(imgElement, newSrc) {
    imgElement.src = newSrc;
}



//this is for parners
document.addEventListener("DOMContentLoaded", function() {
    const partners = document.querySelectorAll('.animate-on-scroll');
    let delay = 0; // Initial delay for sequential animations

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight - 100 && rect.bottom >= 0
        );
    }

    function animateLogos() {
        partners.forEach((partner, index) => {
            if (isElementInViewport(partner)) {
                setTimeout(() => {
                    partner.classList.add('slide-in');
                }, delay);
                delay += 300; // Adds delay for each image
            }
        });
    }

    window.addEventListener('scroll', animateLogos);
    animateLogos(); // Initial check in case section is already in view
});


