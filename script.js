const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value.trim();

    if (name === "" || email === "" || phone === "" || gender === "" || course === "") {
        message.style.color = "red";
        message.textContent = "Please fill all the fields.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration Successful!";

    console.log({
        Name: name,
        Email: email,
        Phone: phone,
        Gender: gender,
        Course: course
    });

    form.reset();
});