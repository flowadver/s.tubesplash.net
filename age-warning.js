document.addEventListener("DOMContentLoaded", function() {
  // Membuat elemen peringatan
  var warningOverlay = document.createElement("div");
  warningOverlay.style.position = "fixed";
  warningOverlay.style.top = "0";
  warningOverlay.style.left = "0";
  warningOverlay.style.width = "100%";
  warningOverlay.style.height = "100%";
  warningOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  warningOverlay.style.color = "white";
  warningOverlay.style.display = "flex";
  warningOverlay.style.justifyContent = "center";
  warningOverlay.style.alignItems = "center";
  warningOverlay.style.zIndex = "9999";
  warningOverlay.style.fontSize = "24px";
  warningOverlay.style.textAlign = "center";
  warningOverlay.style.padding = "20px";
  warningOverlay.innerHTML = `
    <div>
      <h2>Warning: Content Over 18 Years and Over</h2>
      <p>Click OK if you are 18 or older.</p>
      <button id="age-confirm" style="padding: 10px 20px; font-size: 18px; margin-top: 20px;">OK</button>
      <button id="age-decline" style="padding: 10px 20px; font-size: 18px; margin-top: 20px;">Cancel</button>
    </div>
  `;

  document.body.appendChild(warningOverlay);

  // Fungsi untuk menutup overlay jika pengguna mengkonfirmasi usia
  document.getElementById("age-confirm").onclick = function() {
    document.body.removeChild(warningOverlay);
  };

  // Fungsi untuk mengalihkan pengguna jika menolak
  document.getElementById("age-decline").onclick = function() {
    window.location.href = "https://google.com"; // Ganti dengan URL yang sesuai jika user menolak
  };
});
