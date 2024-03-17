const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken: "2cb2f4a7-f2c3-4701-8e99-a580c3c957a9",
        To: 'ikiwcorleone@gmail.com',
        From: "ikiwcorleone@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Your message has been sent!",
                    icon: "success"
                }).then(() => {
                    form.reset();
                });
            }
        }
    );
}

function checkEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (fullName.value.trim() === "" || email.value.trim() === "" || subject.value.trim() === "" || message.value.trim() === "") {
        Swal.fire({
            title: "Error!",
            text: "Please fill in all fields",
            icon: "error"
        });
    } else {
        sendEmail();

    }
});