const topicPage = document.getElementById("topicPage");
const subtopicPage = document.getElementById("subtopicPage");

const subtopicTitle = document.getElementById("subtopicTitle");
const subtopicHint = document.getElementById("subtopicHint");

const backBtn = document.getElementById("backBtn");
const homeBtn = document.getElementById("homeBtn");

const topicButtons = document.querySelectorAll("[data-topic]");
const subtopicGroups = document.querySelectorAll("[data-topic-group]");

function setActiveScreen(screenToShow) {
  topicPage.classList.remove("screen-active");
  subtopicPage.classList.remove("screen-active");
  screenToShow.classList.add("screen-active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function hideAllGroups() {
  subtopicGroups.forEach(g => (g.hidden = true));
}

function niceTopicName(topicKey) {
  if (topicKey === "maths") return "Maths";
  if (topicKey === "physics") return "Physics";
  if (topicKey === "cs") return "Computer Science";
  return "Subtopics";
}

function showSubtopics(topicKey) {
  hideAllGroups();

  const group = document.querySelector(`[data-topic-group="${topicKey}"]`);
  if (group) group.hidden = false;

  const name = niceTopicName(topicKey);
  subtopicTitle.textContent = `${name} — Subtopics`;
  subtopicHint.textContent = `Pick a subtopic below to open full notes for ${name}.`;

  setActiveScreen(subtopicPage);
}

topicButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const topicKey = btn.getAttribute("data-topic");
    showSubtopics(topicKey);
  });
});

backBtn.addEventListener("click", () => setActiveScreen(topicPage));
homeBtn.addEventListener("click", () => setActiveScreen(topicPage));
