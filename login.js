function handleLogin(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const username = event.target.username.value;
  const password = event.target.password.value;

  // Example: simple check (replace with real authentication logic)
  if (username === "Admin" && password === "05072007P") {
    // ✅ Redirect to another site or page
    window.location.href = "http://127.0.0.1:5500/dashboard.html"; // Change this to your target URL
  } else {
    alert("Invalid username or password");
  }
}
