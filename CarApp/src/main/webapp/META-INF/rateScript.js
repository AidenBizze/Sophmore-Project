document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(this);
    var shopName = formData.get("shopName");
    var rating = formData.get("rating");
    var comments = formData.get("comments");

    // Display submitted data
    var feedbackMsg = "Thank you for your feedback!\n\nShop Name: " + shopName + "\nRating: " + rating + " hearts\nComments: " + comments;
    alert(feedbackMsg);

    // Append thank you message after the form
    var thankYouMessage = document.createElement('div');
    thankYouMessage.classList.add('thank-you-message');
    thankYouMessage.textContent = "Thank you for your feedback!";
    document.body.appendChild(thankYouMessage);

    // Reset the form
    this.reset();
});




document.querySelectorAll('.heart').forEach(item => {
    item.addEventListener('click', event => {
        var clickedValue = parseInt(item.getAttribute('value'));

        // Set all hearts to gray
        document.querySelectorAll('.heart').forEach(heart => {
            heart.style.color = '#ccc';
        });

        // Set hearts up to the clicked one to pink
        document.querySelectorAll('.heart').forEach((heart, index) => {
            var heartValue = parseInt(heart.getAttribute('value'));
            if (heartValue <= clickedValue) {
                heart.style.color = 'pink';
            }
        });

        // Set the rating value
        document.querySelector('input[name="rating"]').value = clickedValue;
    });
});
