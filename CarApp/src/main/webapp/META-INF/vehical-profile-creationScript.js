document.getElementById('carProfileForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const vin = document.getElementById('vinInput').value.trim();

    const url = `https://vin-decoder19.p.rapidapi.com/vin_decoder_basic?vin=${vin}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '03e8e8bdc9mshb23d430e22fbe1dp104ca8jsne75e219c39ad',
            'X-RapidAPI-Host': 'vin-decoder19.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Display the retrieved data in the car profile div
        document.getElementById('carProfile').innerHTML = `
            <h2>Car Profile</h2>
            <p><strong>VIN:</strong> ${vin}</p>
            <p><strong>Make:</strong> ${data.Make.value}</p>
            <p><strong>Model:</strong> ${data.Model.value}</p>
            <!-- Add more fields as needed -->
        `;
    } catch (error) {
        console.error(error);
    }
});
