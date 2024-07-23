document.addEventListener("DOMContentLoaded", function() {
    const reviewText = document.getElementById("review-text");
    const stars = document.querySelectorAll(".star");
    const submitButton = document.getElementById("submit-review");
    const reviewList = document.getElementById("review-list");

    let selectedRating = 0;

    // Event listeners for stars
    stars.forEach(star => {
        star.addEventListener("click", function() {
            selectedRating = parseInt(star.getAttribute("data-rating"));
            stars.forEach(s => {
                s.classList.remove("selected");
            });
            star.classList.add("selected");
        });
    });

    // Event listener for the submit button
    submitButton.addEventListener("click", function() {
        const review = reviewText.value;

        if (review.trim() === "" || selectedRating === 0) {
            alert("Please enter a review and select a rating.");
            return;
        }

        // Create a new review element
        const newReview = document.createElement("li");
        newReview.innerHTML = `<strong>Rating: ${selectedRating}</strong><br>${review}`;

        // Add the review to the review list
        reviewList.appendChild(newReview);

        // Clear the review text and reset the rating
        reviewText.value = "";
        selectedRating = 0;
        stars.forEach(star => {
            star.classList.remove("selected");
        });
    });
});
//Visitor Count
document.addEventListener("DOMContentLoaded", function() {
    let count = 0; // Initialize the count

    // Check if a count is stored in local storage
    if (localStorage.getItem("visitorCount")) {
        count = parseInt(localStorage.getItem("visitorCount"));
    }

    // Update the count and display it
    count++;
    document.getElementById("count").textContent = count;

    // Store the updated count in local storage
    localStorage.setItem("visitorCount", count.toString());
});
//Ticker
document.addEventListener("DOMContentLoaded", function() {
    const tickerContent = document.getElementById("ticker-content");

    // Function to update the date and time
    function updateDateTime() {
        const currentDate = new Date();
        const dateTimeString = currentDate.toLocaleString();
        tickerContent.textContent = `Date & Time: ${dateTimeString}`;
    }

    // Update the date and time initially
    updateDateTime();

    // Use the Geolocation API to get the user's location
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            tickerContent.textContent += ` | Location: Lat ${latitude}, Long ${longitude}`;
        });
    }

    // Function to continuously update the date and time
    setInterval(updateDateTime, 1000);
});

