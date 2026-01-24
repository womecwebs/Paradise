document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Not More Expensive.",
    "With Better Timing.",
    "With Real Strategy.",
    "Without Guesswork.",
  ];

  const el = document.querySelector(".pop-text");
  if (!el) return;

  let i = 0;

  setInterval(() => {
    el.classList.remove("pop-text");
    void el.offsetWidth; // restart animation
    el.textContent = phrases[(i = (i + 1) % phrases.length)];
    el.classList.add("pop-text");
  }, 4000);
});
