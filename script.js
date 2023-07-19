document.getElementById('join-btn').addEventListener('click', function() {
    window.location.href = 'https://cosmofeed.com/vp/64b10504d9ed27002b656a30';
});

// The form submission can be handled using JavaScript frameworks or backend technologies to store the form data.
// In this example, the form will be submitted to a server using the Fetch API (replace "your-server-endpoint" with the actual server endpoint).
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    // Convert form data to JSON format
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Send the form data to the server
    fetch('your-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        // Handle the server response here if needed
        console.log('Form data submitted successfully');
    })
    .catch(error => {
        console.error('Error submitting form data:', error);
    });
});
