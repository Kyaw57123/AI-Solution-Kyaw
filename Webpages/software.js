
//this is for hero specific
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

//this is for navigator specific
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let searchButton = document.getElementById("searchButton");
    let searchForm = document.getElementById("searchForm");

    if (searchButton && searchForm) {
        searchButton.addEventListener("click", function () {
            if (searchForm.style.display === "none" || searchForm.style.display === "") {
                searchForm.style.display = "flex";
            } else {
                searchForm.style.display = "none";
            }
        });
    }
});

// Function to show popup
function openPopup() {
    let popup = document.getElementById("contactPopup");
    if (popup) {
        popup.style.display = "flex";
    }
}

// Function to close popup
function closePopup() {
    let popup = document.getElementById("contactPopup");
    if (popup) {
        popup.style.display = "none";
    }
}

// Function to start AI chat (Placeholder)
function startAIChat() {
    alert("AI Chat feature coming soon!");
    closePopup();
}

// Close popup when clicking outside the popup content
document.addEventListener("click", function (event) {
    let popup = document.getElementById("contactPopup");
    let popupContent = document.querySelector(".popup-content");
    let contactButton = document.querySelector(".contact-us-btn");

    if (popup && popupContent) {
        // If popup is open and user clicks outside the content, close it
        if (popup.style.display === "flex" && !popupContent.contains(event.target) && event.target !== contactButton) {
            closePopup();
        }
    }
});

// Title fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".fade-in-title");

    if (title) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    title.classList.add("show");
                }
            });
        }, { threshold: 0.5 });

        observer.observe(title);
    }
});

//this is for Brand & Logo Section
document.addEventListener("DOMContentLoaded", function() {
    const brandSection = document.getElementById("brand-showcase");

    if (brandSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let brandLogos = brandSection.querySelector(".brand-logos");
                    if (brandLogos) {
                        brandLogos.style.animationPlayState = "running";
                    }
                }
            });
        }, { threshold: 0.2 });

        observer.observe(brandSection);
    }
});

