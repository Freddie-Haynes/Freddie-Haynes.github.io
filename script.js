// ---- Data: subjects and their topics (edit these whenever you want) ----
const SUBJECTS = [
  {
    id: "maths",
    title: "Maths",
    desc: "Pure, Stats, Mechanics",
    topics: [
      "Algebra",
      "Calculus",
      "Trigonometry",
      "Vectors",
      "Statistics",
      "Mechanics"
    ]
  },
  {
    id: "cs",
    title: "Computer Science",
    desc: "Programming + theory",
    topics: [
      "Programming (C#/Python)",
      "Algorithms",
      "Data Structures",
      "Databases (SQL)",
      "Networks",
      "NEA Project"
    ]
  },
  {
    id: "physics",
    title: "Physics",
    desc: "Salters / A-Level topics",
    topics: [
      "Mechanics",
      "Electricity",
      "Waves",
      "Particles",
      "Materials",
      "Astrophysics"
    ]
  },
  {
    id: "projects",
    title: "Personal Projects",
    desc: "Build stuff you like",
    topics: [
      "Website Improvements",
      "Unity Game Dev",
      "C# Console Games",
      "Python Tools",
      "AI Experiments",
      "Revision Tracker"
    ]
  }
];

// ---- Elements ----
const grid = document.getElementById("grid");
const subtitle = document.getElementById("subtitle");

const backBtn = document.getElementById("backBtn");
const homeBtn = document.getElementById("homeBtn");

const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panelTitle");
const panelText = document.getElementById("panelText");

// ---- Simple "router" state ----
let currentSubjectId = null; // null means "home"
let lastView = "home"; // "home" or "topics"

// ---- Render helpers ----
function clearPanel() {
  panel.hidden = true;
  panelTitle.textContent = "";
  panelText.textContent = "";
}

function showPanel(title, text) {
  panel.hidden = false;
  panelTitle.textContent = title;
  panelText.textContent = text;
}

function renderCards(cards) {
  grid.innerHTML = "";

  cards.forEach(card => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.type = "button";
    btn.innerHTML = `
      <h2>${card.title}</h2>
      <p>${card.desc}</p>
    `;
    btn.addEventListener("click", card.onClick);
    grid.appendChild(btn);
  });
}

function setControls({ showBack, showHome }) {
  backBtn.hidden = !showBack;
  homeBtn.hidden = !showHome;
}

function findSubject(subjectId) {
  return SUBJECTS.find(s => s.id === subjectId);
}

// ---- Views ----
function goHome() {
  currentSubjectId = null;
  lastView = "home";
  subtitle.textContent = "Choose a subject";
  clearPanel();

  setControls({ showBack: false, showHome: false });

  const subjectCards = SUBJECTS.map(s => ({
    title: s.title,
    desc: s.desc,
    onClick: () => goTopics(s.id)
  }));

  renderCards(subjectCards);
}

function goTopics(subjectId) {
  const subject = findSubject(subjectId);
  if (!subject) return;

  currentSubjectId = subjectId;
  lastView = "topics";
  subtitle.textContent = `${subject.title} — choose a topic`;
  clearPanel();

  setControls({ showBack: true, showHome: true });

  const topicCards = subject.topics.map(topicName => ({
    title: topicName,
    desc: "Click to open",
    onClick: () => openTopic(subject.title, topicName)
  }));

  renderCards(topicCards);
}

function openTopic(subjectTitle, topicName) {
  // For now, just show a panel. Later you can link to real pages or load content.
  showPanel(
    `${subjectTitle}: ${topicName}`,
    `hello "${topicName}"`
  );
}

// ---- Button actions ----
backBtn.addEventListener("click", () => {
  // Back from topics -> home
  // (You can expand this later if you add deeper navigation.)
  if (lastView === "topics") goHome();
});

homeBtn.addEventListener("click", goHome);

// ---- Start ----
goHome();
