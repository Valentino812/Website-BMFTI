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
});

// Toggle mode button function
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("toggleThemeBtn").textContent = isDark ? "🌙" : "☀️";
});

// Hero with automaticly changing images every 3 seconds
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 3000);



