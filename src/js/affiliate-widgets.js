/* ============================================================
   DYNAMIC AFFILIATE WIDGET LOADER
   ------------------------------------------------------------
   Loads all banners/widgets from affiliate-widgets.json
   - Fully asynchronous
   - Lightweight and easy to update
   ============================================================ */

(function () {
  "use strict";

  const JSON_PATH = "/data/affiliate-widgets.json"; // Path to your JSON file

  // ✅ Helper: load external script asynchronously
  function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = callback || function () {};
    document.body.appendChild(script);
  }

  // ✅ Helper: insert HTML into placeholder div
  function insertWidget(containerId, html) {
    const container = document.getElementById(containerId);
    if (container) container.innerHTML = html;
  }

  // ✅ Fetch and load widgets dynamically
  fetch(JSON_PATH)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load widgets JSON");
      return response.json();
    })
    .then((widgets) => {
      widgets.forEach((widget) => {
        insertWidget(widget.id, widget.html);
        if (widget.script) loadScript(widget.script);
      });
    })
    .catch((err) => console.error("Widget loading error:", err));
})();
