// Automatically update copyright year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Smooth fade-in on page load
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
  });

  // Animate sections into view
  setTimeout(() => {
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }, index * 200); // Staggered delay for each section
    });
  }, 100);
});
