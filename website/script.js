document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let isValid = true;
  
    // Username validation
    const username = document.getElementById('username').value.trim();
    const usernameError = document.getElementById('usernameError');
    if (username === "") {
      usernameError.textContent = "Username is required.";
      usernameError.style.display = "block";
      isValid = false;
    } else {
      usernameError.style.display = "none";
    }
  
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
  
    // Password validation
    const password = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');
    if (password === "") {
      passwordError.textContent = "Password is required.";
      passwordError.style.display = "block";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.style.display = "none";
    }
  
    // If form is valid, you can proceed to submit the form or further actions
    if (isValid) {
      alert("Form submitted successfully!");
      // You can submit the form or perform further actions here.
    }
  });
  
