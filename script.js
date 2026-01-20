alert("JS is linked!");
// Grab all the subject buttons and all the content panels
const subjectButtons = document.querySelectorAll(".subject-card");
const panels = document.querySelectorAll(".panel");
const homeBtn = document.getElementById("homeBtn");

// Helper: show one panel by id, hide the rest
function showPanel(panelId) {
  panels.forEach(panel => {
    panel.classList.toggle("active", panel.id === panelId);
  });
}

// When a subject is clicked, show the matching panel
subjectButtons.forEach(button => {
  button.addEventListener("click", () => {
    const subject = button.dataset.subject; // e.g. "maths"
    showPanel(subject);
  });
});

// Back to home
homeBtn.addEventListener("click", () => {
  showPanel("home");
});

// Optional: prevent placeholder links from jumping to top
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[data-action="placeholder"]');
  if (link) {
    e.preventDefault();
    alert("Placeholder link — you can replace this with real pages/links later.");
  }
});
