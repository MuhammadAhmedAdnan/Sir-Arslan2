const switchSignUpButton = document.getElementById('signUp');  // Button to switch panel
const switchSignInButton = document.getElementById('signIn');  // Button to switch panel
const container = document.querySelector('.container');

// Switch between Sign Up and Sign In panels
switchSignUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

switchSignInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Sign In form submission event
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    // Check if the user exists in localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (!storedUser) {
        alert("User not found. Please sign up first.");
    } else if (storedUser.password === password) {
        alert("Signed In!");

        // After the alert, wait for 2 seconds and then redirect
        setTimeout(function() {
            window.location.href = "../home.html"; // Replace with your local HTML file name
        }, 500);
    } else {
        alert("Incorrect password.");
    }
});

// Sign Up form submission event
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
    } else {
        // Save user info to localStorage
        const user = { name, password };
        localStorage.setItem(email, JSON.stringify(user));
        alert("Sign Up Successful!");
        container.classList.remove('right-panel-active'); // Switch to Sign In panel
    }
});