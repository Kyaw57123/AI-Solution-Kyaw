//this is for feedback form
document.addEventListener("DOMContentLoaded", function() {
    const hearts = document.querySelectorAll(".rating i");
    const ratingInput = document.getElementById("rating");

    hearts.forEach(heart => {
        heart.addEventListener("click", function() {
            let ratingValue = this.getAttribute("data-value");
            ratingInput.value = ratingValue;

            hearts.forEach(h => h.classList.remove("active"));
            for (let i = 0; i < ratingValue; i++) {
                hearts[i].classList.add("active");
            }
        });
    });

    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let feedback = document.getElementById("feedback").value;
        let rating = document.getElementById("rating").value;

        if (name && email && feedback && rating) {
            alert(`Thank you for your feedback, ${name}!\nRating: ${rating} hearts`);
            document.getElementById("feedbackForm").reset();
            hearts.forEach(h => h.classList.remove("active"));
        } else {
            alert("Please fill in all the fields including the rating.");
        }
    });
});

function resetForm() {
    // Show confirmation popup
    let confirmCancel = confirm("Are you sure that you want to cancel it?");
    
    // If user confirms, redirect to home page
    if (confirmCancel) {
        window.location.href = "home.html"; // Change to your actual home page URL
    }
}