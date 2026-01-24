document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".comments-toggle");
  const body = document.getElementById("comments-body");

  if (!toggle || !body) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.textContent = isOpen ? "Show comments" : "Hide comments";

    if (isOpen) {
      body.setAttribute("hidden", "");
    } else {
      body.removeAttribute("hidden");
    }
  });
});
