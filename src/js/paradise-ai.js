const btn = document.getElementById("ask-ai-btn");
const input = document.getElementById("ai-question");

const loading = document.getElementById("ai-loading");
const result = document.getElementById("ai-result");
const videoBox = document.getElementById("ai-video");
const answerBox = document.getElementById("ai-answer");
const guidesBox = document.getElementById("ai-guides");

btn.addEventListener("click", askAI);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") askAI();
});

async function askAI() {
  const question = input.value.trim();
  if (!question) return;

  loading.hidden = false;
  result.hidden = true;

  try {
    const res = await fetch("/.netlify/functions/ask-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();

    // Render YouTube video
    videoBox.innerHTML = `
      <iframe
        loading="lazy"
        width="100%"
        height="360"
        src="https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
          data.video.youtube_query,
        )}"
        frameborder="0"
        allowfullscreen>
      </iframe>
    `;

    // Render AI answer
    answerBox.innerHTML = data.answer_html;

    // Render guide cards
    guidesBox.innerHTML = data.related_guides
      .map(
        (g) => `
        <a href="${g.url}" class="guide-card">
          <img src="${g.image}" alt="${g.title}" loading="lazy" />
          <h4>${g.title}</h4>
        </a>
      `,
      )
      .join("");

    loading.hidden = true;
    result.hidden = false;
  } catch (err) {
    loading.hidden = true;
    alert("Something went wrong. Please try again.");
    console.error(err);
  }
}
