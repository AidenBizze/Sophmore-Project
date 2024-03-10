document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "login.html"; // Redirect to login page
    document.getElementById("backBtn").style.display = "inline-block"; // Show back button
});

document.getElementById("signupBtn").addEventListener("click", function() {
    window.location.href = "signup.html"; // Redirect to sign up page
    document.getElementById("backBtn").style.display = "inline-block"; // Show back button
});