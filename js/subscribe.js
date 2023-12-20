// subscribe.js

function subscribe() {
    // Get the user's email
    var userEmail = document.getElementById("your-email").value;

    // Initialize Email.js with your email service credentials
    emailjs.init("user_your_emailjs_user_id");

    // Prepare the email parameters
    var params = {
        to_email: userEmail,
        subject: "Thanks for subscribing!",
        message: "Welcome to Jadoo! You have successfully subscribed to our newsletter."
    };

    // Send the email
    emailjs.send("your_emailjs_service_id", "your_emailjs_template_id", params)
        .then(function(response) {
            console.log("Email sent:", response);
        }, function(error) {
            console.log("Email failed to send:", error);
        });
}
