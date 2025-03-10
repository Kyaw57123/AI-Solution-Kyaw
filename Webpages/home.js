

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

document.getElementById("searchButton").addEventListener("click", function () {
    let searchForm = document.getElementById("searchForm");
    if (searchForm.style.display === "none" || searchForm.style.display === "") {
        searchForm.style.display = "flex";
    } else {
        searchForm.style.display = "none";
    }
});

// Function to show popup
function openPopup() {
    document.getElementById("contactPopup").style.display = "flex";
}

// Function to close popup
function closePopup() {
    document.getElementById("contactPopup").style.display = "none";
}

// Function to start AI chat (Placeholder)
function startAIChat() {
    alert("AI Chat feature coming soon!");
    closePopup();
}

// Close popup when clicking outside the popup content
document.addEventListener("click", function(event) {
    let popup = document.getElementById("contactPopup");
    let popupContent = document.querySelector(".popup-content");

    // If popup is open and user clicks outside the content, close it
    if (popup.style.display === "flex" && !popupContent.contains(event.target) && event.target !== document.querySelector(".contact-us-btn")) {
        closePopup();
    }
});




