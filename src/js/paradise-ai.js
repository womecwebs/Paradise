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

/* ===== STATE + STORAGE ===== */
const STORAGE_KEY = "paradise_ai_chats";

const AI_STATE = {
  chats: [],
  activeChatId: null,
};

/* ===== DOM REFERENCES (MUST COME EARLY) ===== */
const input = document.getElementById("ai-input");
const chat = document.getElementById("chat");
const emptyState = document.getElementById("ai-emptyState");

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(AI_STATE));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    AI_STATE.chats = parsed.chats || [];
    AI_STATE.activeChatId = parsed.activeChatId || null;
  } catch {}
}

/* ===== CHAT CREATION LOGIC ===== */
function createNewChat(firstMessage) {
  const chat = {
    id: Date.now().toString(),
    title: generateChatTitle(firstMessage),
    createdAt: Date.now(),
    messages: [],
  };

  AI_STATE.chats.unshift(chat);
  AI_STATE.activeChatId = chat.id;
  saveState();
  return chat;
}

/* ===== Title generator (UX-critical) ===== */
function generateChatTitle(text) {
  return text.replace(/[?.!]/g, "").slice(0, 40).trim();
}

/* ===== MESSAGE APPENDING (SAFE & CLEAN) ===== */
function getActiveChat() {
  return AI_STATE.chats.find((c) => c.id === AI_STATE.activeChatId);
}

function addMessage(role, content) {
  const chat = getActiveChat();
  if (!chat) return;

  chat.messages.push({
    role,
    content,
    timestamp: Date.now(),
  });

  saveState();
}

/* ===== RENDER CHAT HISTORY SIDEBAR ===== */
function renderChatHistory() {
  const list = document.getElementById("chatHistoryList");
  if (!list) return;

  list.innerHTML = "";

  AI_STATE.chats.forEach((chat) => {
    const li = document.createElement("li");
    li.className =
      "chat-history-item" +
      (chat.id === AI_STATE.activeChatId ? " active" : "");
    li.textContent = chat.title;

    li.onclick = () => {
      AI_STATE.activeChatId = chat.id;
      saveState();
      renderMessages();
      renderChatHistory();
    };

    list.appendChild(li);
  });
}

/* ===== RENDER CHAT MESSAGES ===== */
function renderMessages() {
  chat.innerHTML = "";
  const chatData = getActiveChat();
  if (!chatData) return;

  chatData.messages.forEach((msg) => {
    chat.innerHTML += `
      <div class="message ${msg.role}">
        <div class="${msg.role === "ai" ? "ai" : ""}">
          ${msg.content}
        </div>
      </div>
    `;
  });

  chat.style.display = "block";
  emptyState.style.display = "none";
}

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

  // Create chat only AFTER validation
  if (!AI_STATE.activeChatId) {
    createNewChat(question);
    renderChatHistory();
  }

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

  addMessage("user", question);

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
    //   if (data.error) {
    //     chat.innerHTML += `
    //   <div class="message ai error">
    //     The AI service is temporarily unavailable. Please try again.
    //   </div>
    // `;
    //     addMessage("ai", data.answer_html);
    //     renderChatHistory();

    //     return;
    //   }

    if (data.error) {
      const errorMsg = "The AI service is temporarily unavailable.";
      chat.innerHTML += `
    <div class="message ai error">${errorMsg}</div>
  `;
      addMessage("ai", errorMsg);
      renderChatHistory();
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

    addMessage("ai", data.answer_html);
    renderChatHistory();

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

loadState();
renderChatHistory();

// DO NOT auto-open any chat
AI_STATE.activeChatId = null;
saveState();

// Show empty state explicitly
chat.style.display = "none";
emptyState.style.display = "flex";
