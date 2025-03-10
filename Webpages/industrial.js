


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

//this is for footer
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("newsletter-email").value;
    var message = document.getElementById("newsletter-message");

    if (email.trim() === "") {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
    } else {
        message.style.color = "green";
        message.textContent = "Thank you for subscribing!";
        document.getElementById("newsletter-email").value = ""; // Clear input field
    }
});


