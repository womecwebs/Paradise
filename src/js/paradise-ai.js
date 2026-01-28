/* ===== Guides Data (Eleventy) ===== */
let ALL_GUIDES = [];

fetch("/_data/guides.json")
  .then((res) => res.json())
  .then((data) => {
    ALL_GUIDES = Array.isArray(data) ? data : [];
  })
  .catch(() => {
    ALL_GUIDES = [];
  });

/* ===== Sidebar ===== */
const sidebarToggleBtn = document.getElementById("sidebarToggle");

if (sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener("click", toggleSidebar);
}

const sidebar = document.getElementById("ai-sidebar");
function toggleSidebar() {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("open");
  } else {
    sidebar.classList.toggle("collapsed");
  }
}

/* ===== Typing Effect ===== */
const typingEl = document.getElementById("typing");
const phrases = [
  "Which destination should I visit next?",
  "Where can I escape winter in luxury?",
  "Best honeymoon destinations this year?",
  "Visa-free luxury travel options?",
];

let phraseIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (!typingEl) return;
  if (charIndex < phrases[phraseIndex].length) {
    typingEl.textContent += phrases[phraseIndex].charAt(charIndex++);
    setTimeout(typeEffect, 60);
  } else {
    setTimeout(() => {
      typingEl.textContent = "";
      charIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeEffect();
    }, 2000);
  }
}
typeEffect();

/* ===== AI Chat ===== */
const input = document.getElementById("ai-input");
const chat = document.getElementById("chat");
const emptyState = document.getElementById("ai-emptyState");

/* ===== Render Related Guides ===== */
function renderRelatedGuides(aiGuides) {
  const container = document.getElementById("related-guides");
  if (!container) return;

  container.innerHTML = "";

  if (!Array.isArray(aiGuides) || !aiGuides.length) return;
  if (!ALL_GUIDES.length) return;

  const matched = ALL_GUIDES.filter((g) =>
    aiGuides.some((ai) => ai.title === g.title),
  );

  if (!matched.length) return;

  container.innerHTML = `
    <h3 class="guides-title">Related Luxury Guides</h3>
    <div class="guides-row">
      ${matched
        .map(
          (guide) => `
        <a href="${guide.url}" class="guide-card">
          <img src="${guide.image}" alt="${guide.title}" loading="lazy">
          <h4>${guide.title}</h4>
        </a>
      `,
        )
        .join("")}
    </div>
  `;
}

async function send() {
  const question = input.value.trim();

  // Guardrail: empty
  if (!question) return;

  // Guardrail: too short
  if (question.length < 6) {
    chat.innerHTML += `
      <div class="message ai error">
        Please ask a more detailed travel question.
      </div>
    `;
    return;
  }

  // Move from empty state to chat mode
  emptyState.style.display = "none";
  chat.style.display = "block";

  // User message
  chat.innerHTML += `<div class="message user"><p class="color-secondary mt-70 bg-ai-accent p-20 rounded-lg">${question}</p></div>`;

  // Skeleton loading
  const loader = document.createElement("div");
  loader.className = "skeleton";
  chat.appendChild(loader);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;

  try {
    const res = await fetch("/.netlify/functions/ask-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    loader.remove();

    // Guardrail: backend error
    if (data.error) {
      chat.innerHTML += `
    <div class="message ai error">
      The AI service is temporarily unavailable. Please try again.
    </div>
  `;
      return;
    }

    // Guardrail: missing answer
    if (!data.answer_html) {
      chat.innerHTML += `
    <div class="message ai error">
      I couldn’t generate a reliable answer. Please rephrase your question.
    </div>
  `;
      return;
    }

    if (data.error) {
      chat.innerHTML += `<div class="message ai error">AI failed. Please try again.</div>`;
      return;
    }

    /* ===== YouTube Embed (Paradise Channel Only) ===== */
    if (data.video?.videoId) {
      chat.innerHTML += `
    <div class="message ai video">
      <div class="video-wrapper">
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/${data.video.videoId}"
          title="${data.video.title || "Paradise Travel Video"}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;
    }

    /* ===== AI Answer ===== */
    chat.innerHTML += `
      <div class="message ai">
        ${data.answer_html}
      </div>
    `;
    /* ===== Related Guides ===== */
    renderRelatedGuides(data.related_guides);

    /* ===== Related Guides ===== */
  } catch (err) {
    loader.remove();
    chat.innerHTML += `
      <div class="message ai error">
        Something went wrong. Please try again.
      </div>
    `;
    console.error(err);
  }

  chat.scrollTop = chat.scrollHeight;
}

/* ===== Enter to Send ===== */
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    send();
  }
});
