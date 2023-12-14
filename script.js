function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var responseElement = document.getElementById("response");

    // Basic validation
    if (name === "" || email === "" || message === "") {
        responseElement.innerHTML = "Please fill in all fields.";
        return;
    }

    // Simulate form submission (you would typically send this data to a server)
    // Here, we just display a success message
    responseElement.innerHTML = `Thank you, ${name}! Your message has been received.`;
}
