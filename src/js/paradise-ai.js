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
  chat.innerHTML += `<div class="message user">${question}</div>`;

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

    /* ===== YouTube Embed ===== */
    if (data.video?.youtube_query) {
      chat.innerHTML += `
        <div class="message ai">
          <iframe
            loading="lazy"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
              data.video.youtube_query,
            )}"
            frameborder="0"
            allowfullscreen>
          </iframe>
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
    if (Array.isArray(data.related_guides)) {
      const guidesHTML = data.related_guides
        .map(
          (g) => `
        <a href="${g.url}" class="guide-card">
          <img src="${g.image}" alt="${g.title}" loading="lazy">
          <h4>${g.title}</h4>
        </a>
      `,
        )
        .join("");

      chat.innerHTML += `
        <div class="guides">
          ${guidesHTML}
        </div>
      `;
    }
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
