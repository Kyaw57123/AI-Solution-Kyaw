
// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert("Your form has been submitted successfully!");
});

// Reset form function
function resetForm() {
    document.getElementById("contactForm").reset();
}

function resetForm() {
    // Show confirmation popup
    let confirmCancel = confirm("Are you sure that you want to cancel it?");
    
    // If user confirms, redirect to home page
    if (confirmCancel) {
        window.location.href = "home.html"; // Change to your actual home page URL
    }
}