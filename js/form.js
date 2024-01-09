document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll("#subscribe"); // Use querySelectorAll to get a NodeList of elements

    forms.forEach(form => {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            var subscribe__email = form.querySelector(".email-input").value; // Use .email-input class for the querySelector

            var subscribe = `New subscriber Email:<b>${subscribe__email}</b>`; // The message the bot will send
    
            var token = "6908777816:AAG-R9ZgwFnby3J6WR1yzbeom_vox4PMSkQ";
            var chat_id = '-1002133782599';
            var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;

            try {
                const response = await fetch(url, {
                    method: 'GET',
                });

                if (response.ok) {
                    console.log("Subscribe successfully sent!");
                    form.reset();
                } else {
                    console.error("Error sending subscription.");
                    alert('Error sending subscription.');
                }
            } catch (error) {
                console.error("Error sending subscription:", error);
                alert('Error sending subscription.');
            }
        });
    });
});
