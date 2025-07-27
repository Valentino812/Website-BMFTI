// Fade in transition
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  // Light/dark mode changes
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("toggleThemeBtn").textContent = "🌙";
  }

  // Menu burger toggle for small screens
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    const isActive = navMenu.classList.contains("show");
    
    // Icon changes when active
    menuToggle.innerHTML = isActive ? "&#10005;" : "&#9776;"; 
  });

  // Modal logic
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".modal .close");

  closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = '';
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// Toggle mode button function
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("toggleThemeBtn").textContent = isDark ? "🌙" : "☀️";
});

// Function for register form validation
function validateRegisterForm(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const nim = document.getElementById('nim').value.trim();
  const major = document.getElementById('major').value;
  const semester = document.getElementById('semester').value;
  const question = document.getElementById('question').value.trim();

  if (!nim.startsWith('535')) {
    showModal("Pendaftaran Gagal", "Mohon maaf, pendaftar wajib berkuliah di FTI.", "❌");
    return false;
  }

  if (!email.endsWith('@stu.untar.ac.id')) {
    showModal("Email Salah", "Gunakan email mahasiswa UNTAR.", "❌");
    return false;
  }
  
  if (!firstName || !lastName || !question || !major || !semester) {
    showModal("Lengkapi Form", "Silakan isi semua bagian form yang dibutuhkan.", "❌");
    return false;
  }

  showModal("Pendaftaran Berhasil", "Data Anda telah dikirim.", "✔️");
  return true;
}

// Function to show modal
function showModal(title, message, icon = "") {
  const modal = document.getElementById("modal");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").textContent = message;

  // Adding icon
  const iconElement = document.getElementById("modal-icon");
  iconElement.textContent = icon;

  modal.style.display = "block";
  document.body.style.overflow = 'hidden';
}






