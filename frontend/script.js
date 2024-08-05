
// Contact form variables
const form = document.querySelector("[data-form]");
const formBtn = document.querySelector(".form-btn");

// Function to send form data as JSON
function sendFormData(formData) {
    fetch('https://api-id.execute-api.region.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.json();  // Assuming the server responds with JSON
    })
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully! Thank you for your message.');
    })
    .catch((error) => {
        console.error('Network error:', error);
        alert('Failed to send message. Please try again.');
    });
}

// Add event to form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        fullname: document.querySelector('[name="fullname"]').value,
        email: document.querySelector('[name="email"]').value,
        message: document.querySelector('[name="message"]').value
    };

    // Disable the submit button to prevent multiple submissions
    formBtn.disabled = true;

    // Use the sendFormData function to process the form submission
    sendFormData(formData);
});
