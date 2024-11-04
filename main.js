
  function togglePassword() {
    const passwordInput = document.getElementById("password");
    const togglePasswordText = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordText.textContent = "Hide Password";
    } else {
      passwordInput.type = "password";
      togglePasswordText.textContent = "Show Password";
    }
  }

  function toggleShowPasswordText() {
    const passwordInput = document.getElementById("password");
    const togglePasswordText = document.getElementById("togglePassword");

    // Show the "Show Password" text only if there's input in the password field
    if (passwordInput.value.length > 0) {
      togglePasswordText.style.display = "inline-block";
    } else {
      togglePasswordText.style.display = "none";
    }
  }