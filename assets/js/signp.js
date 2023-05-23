function validate() {
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById('password').value;
    const confirmpasswordInput = document.getElementById('confirmpassword').value;

    if (!nameInput || !emailInput || !passwordInput || !confirmpasswordInput) {
        document.getElementById("nameError").innerHTML = "Name cannot be empty";
        document.getElementById("emailError").innerHTML = "Email-ID cannot be empty";
        document.getElementById("passwordError").innerHTML = "Password cannot be empty";
        document.getElementById("confirmpasswordError").innerHTML = "Confirm Password cannot be empty";
    } else {
        Signup();
    }
}

// Name Validation
function validate_name() {
    const nameInput = document.getElementById("name").value;
    const nameregex = /^[a-zA-Z\- ]{3,50}$/;

    if (!nameInput) {
        document.getElementById("nameError").innerHTML = "Name cannot be empty";
    } else if (!nameregex.test(nameInput)) {
        document.getElementById("nameError").innerHTML = "Name should be at least 3 characters long";
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
}

// Email Validation
function validate_email() {
    const emailInput = document.getElementById("email").value;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput) {
        document.getElementById("emailError").innerHTML = "Email-ID cannot be empty";
    } else if (!emailregex.test(emailInput)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email-ID";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
}

// Password Validation
function validate_password() {
    const passwordInput = document.getElementById('password').value;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?])[A-Za-z\d!@#$%^&*()_\-+=<>?]{8,}$/;

    if (!passwordInput) {
        document.getElementById("passwordError").innerHTML = "Password cannot be empty";
    } else if (!passwordregex.test(passwordInput)) {
        document.getElementById('passwordError').innerHTML = "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special symbol";
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }
}

// Confirm Password Validation
function validate_confirmpassword() {
    const confirmpasswordInput = document.getElementById('confirmpassword').value;
    const passwordInput = document.getElementById('password').value;

    if (!confirmpasswordInput) {
        document.getElementById("confirmpasswordError").innerHTML = "Confirm Password cannot be empty";
    } else if (confirmpasswordInput !== passwordInput) {
        document.getElementById('confirmpasswordError').innerHTML = "Passwords do not match";
    } else {
        document.getElementById("confirmpasswordError").innerHTML = "";
    }
}

function Signup() {
    const user_name = document.getElementById('name').value;
    const user_email = document.getElementById('email').value;
    const user_password = document.getElementById('password').value;
    const user_confirmpassword = document.getElementById('confirmpassword').value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/Signup");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
        JSON.stringify({
            name: user_name,
            email: user_email,
            password: user_password,
            confirm_password: user_confirmpassword,
        })
    );
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            // Display SweetAlert success message
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Sign up successful!',
                confirmButtonText: 'OK'
            });

        }
    };
}