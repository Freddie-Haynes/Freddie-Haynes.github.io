// Pages
const topicPage = document.getElementById("topicPage");
const subtopicPage = document.getElementById("subtopicPage");

// Title + controls
const subtopicTitle = document.getElementById("subtopicTitle");
const subtopicHint = document.getElementById("subtopicHint");
const backBtn = document.getElementById("backBtn");

// Topic buttons + subtopic groups
const topicButtons = document.querySelectorAll("[data-topic]");
const subtopicGroups = document.querySelectorAll("[data-topic-group]");

function showPage(pageToShow) {
  topicPage.classList.remove("page-active");
  subtopicPage.classList.remove("page-active");
  pageToShow.classList.add("page-active");
}

function showSubtopics(topicKey) {
  // Hide all groups
  subtopicGroups.forEach(group => {
    group.hidden = true;
  });

  // Show the matching group
  const group = document.querySelector(`[data-topic-group="${topicKey}"]`);
  if (group) group.hidden = false;

  // Update heading text
  const niceName =
    topicKey === "maths" ? "Maths" :
    topicKey === "physics" ? "Physics" :
    topicKey === "cs" ? "Computer Science" :
    "Subtopics";

  subtopicTitle.textContent = `${niceName} — Subtopics`;
  subtopicHint.textContent = `Here are some ${niceName} subtopics with short descriptions.`;

  showPage(subtopicPage);
}

// Click a topic
topicButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const topicKey = btn.getAttribute("data-topic");
    showSubtopics(topicKey);
  });
});

// Back
backBtn.addEventListener("click", () => {
  showPage(topicPage);
});
