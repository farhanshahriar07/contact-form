async function sendEmail() {
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


    const subject = "Roza Exam";
    const text = document.getElementById('message').value;
    const senderEmail = document.getElementById('email').value;
    const senderName = document.getElementById('name').value;

    const data = { subject, text, senderEmail, senderName };
    console.log(data)

    try {
      const response = await fetch('https://express-mail-api.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message); // Display the result message
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  }