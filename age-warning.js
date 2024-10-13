document.addEventListener("DOMContentLoaded", function() {
  var ageVerification = confirm("Warning: Content Over 18 Years and Over. Click OK if you are 18 or older.");
  if (!ageVerification) {
    window.location.href = "https://google.com"; // Ganti dengan URL yang sesuai jika user menolak
  }
});
