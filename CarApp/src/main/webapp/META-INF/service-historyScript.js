// Define function to fetch service history data from VinAudit API
function fetchServiceHistory() {
    // Make API call to fetch service history data
    // Replace 'YOUR_API_KEY' with your actual VinAudit API key
    fetch('https://api.vinaudit.com/service-history.php?key=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            // Display service entries on the page
            displayServiceEntries(data);
        })
        .catch(error => {
            console.error('Error fetching service history:', error);
        });
}

// Define function to display service entries on the page
function displayServiceEntries(serviceData) {
    const serviceEntriesContainer = document.getElementById('serviceEntries');

    // Clear previous entries
    serviceEntriesContainer.innerHTML = '';

    // Loop through service entries and create HTML elements to display them
    serviceData.forEach(entry => {
        const serviceEntryDiv = document.createElement('div');
        serviceEntryDiv.classList.add('service-entry');

        const serviceDate = document.createElement('div');
        serviceDate.classList.add('service-date');
        serviceDate.textContent = `Date: ${entry.date}`;
        serviceEntryDiv.appendChild(serviceDate);

        const serviceDetails = document.createElement('div');
        serviceDetails.classList.add('service-details');
        serviceDetails.textContent = `Performed: ${entry.details}`;
        serviceEntryDiv.appendChild(serviceDetails);

        const serviceCost = document.createElement('div');
        serviceCost.classList.add('service-cost');
        serviceCost.textContent = `Total Cost: ${entry.cost}`;
        serviceEntryDiv.appendChild(serviceCost);

        serviceEntriesContainer.appendChild(serviceEntryDiv);
    });
}

// Add event listener to the back button
document.getElementById("backBtn").addEventListener("click", function() {
    // Redirect to the previous page
    window.history.back();
});

// Fetch service history data when the page loads
window.onload = fetchServiceHistory;
