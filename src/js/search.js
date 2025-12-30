/* /js/search.js
   Lightweight reusable search + autocomplete.
   Place <script defer src="/js/search.js"></script> on pages with the search bar
   or let core.js auto-load it as page-specific script (page-blogs).
*/

(function () {
  "use strict";

  // Configuration
  const DATA_URL = "/data/search-routes.json"; // edit this file to add categories/dests
  const DEBOUNCE_MS = 180;

  // State
  let routes = []; // array of {keywords:[], suggestion:[], url}
  let suggestionsBox = null;
  let inputEl = null;
  let currentFocus = -1;
  let loaded = false;
  let allTextSuggestions = []; // flattened strings for quick filtering

  // Debounce helper
  function debounce(fn, delay) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Load JSON data (returns Promise)
  function loadData() {
    if (loaded) return Promise.resolve();
    return fetch(DATA_URL, { cache: "no-cache" })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load search data: " + r.status);
        return r.json();
      })
      .then((data) => {
        const cats = data && data.categories ? data.categories : {};
        routes = Object.keys(cats).map((key) => {
          const cat = cats[key];
          // build suggestion list: combine prefix + destination
          const suggestion = [];
          (cat.baseSuggestions || []).forEach((prefix) => {
            (cat.destinations || []).forEach((dest) =>
              suggestion.push(prefix + " " + dest)
            );
          });
          return {
            keywords: (cat.keywords || []).map((k) => k.toLowerCase()),
            suggestion,
            url: cat.url || "/",
          };
        });

        // flatten suggestions for faster substring matching (we'll still use keywords as guard)
        allTextSuggestions = [];
        routes.forEach((r) =>
          r.suggestion.forEach((s) =>
            allTextSuggestions.push({
              text: s,
              url: r.url,
              keywords: r.keywords,
            })
          )
        );
        loaded = true;
      });
  }

  // Build suggestion list (DOM)
  function renderSuggestions(list) {
    suggestionsBox.innerHTML = "";
    suggestionsBox.style.display = list.length ? "block" : "none";
    list.forEach((item) => {
      const li = document.createElement("li");
      li.className = "search-suggestion";
      li.tabIndex = -1;
      li.textContent = item.text;
      li.addEventListener("click", () => {
        inputEl.value = item.text;
        suggestionsBox.style.display = "none";
        performSearch(item.text);
      });
      suggestionsBox.appendChild(li);
    });
  }

  // Search matching logic: use keyword guard + substring matches
  function getMatches(value) {
    if (!value) return [];
    const v = value.toLowerCase();
    const hits = new Map(); // text -> {text,url}
    // check each route; if any of route.keywords appears in input we consider that route suggestions
    routes.forEach((r) => {
      const hasKeyword = r.keywords.some((k) => v.includes(k));
      if (hasKeyword) {
        r.suggestion.forEach((s) => hits.set(s, { text: s, url: r.url }));
      }
    });
    // fallback: if no keyword matched, do a light substring match across allTextSuggestions
    if (!hits.size) {
      const fallback = allTextSuggestions.filter((a) =>
        a.text.toLowerCase().includes(v)
      );
      fallback.forEach((a) => hits.set(a.text, { text: a.text, url: a.url }));
    }
    return Array.from(hits.values()).slice(0, 20); // limit results
  }

  // keyboard nav
  function highlight(index) {
    const items = suggestionsBox.querySelectorAll("li");
    if (!items.length) return;
    items.forEach((i) => i.classList.remove("active"));
    if (index >= 0 && index < items.length) {
      items[index].classList.add("active");
      items[index].scrollIntoView({ block: "nearest" });
    }
  }

  // on input handler (debounced)
  function onInput(e) {
    const val = e.target.value.trim();
    if (!val) {
      suggestionsBox.style.display = "none";
      return;
    }
    const matches = getMatches(val);
    renderSuggestions(matches);
    currentFocus = -1;
  }

  // perform search (redirect)
  // perform search (redirect) - improved: trim input and fallback to keyword-based routing
  function performSearch(text) {
    if (!text) {
      window.location.href = "/luxury-travel-deals.html";
      return;
    }

    const v = text.trim().toLowerCase(); // IMPORTANT: trim spaces
    let matched = false;

    // 1) Try to find an exact or substring match among suggestions (best UX)
    for (const r of routes) {
      if (
        r.suggestion.some((s) => {
          const sLower = s.toLowerCase();
          return sLower === v || sLower.includes(v) || v.includes(sLower);
        })
      ) {
        window.location.href = r.url;
        matched = true;
        break;
      }
    }
    if (matched) return;

    // 2) Fallback: match by keywords (e.g. "flight", "flights", "hotel")
    for (const r of routes) {
      // r.keywords already lowercased in init
      if (
        r.keywords.some(
          (k) => v.includes(k) || (k + "s" && v.includes(k + "s"))
        )
      ) {
        window.location.href = r.url;
        matched = true;
        break;
      }
    }
    if (matched) return;

    // 3) last-resort heuristic: substring match across flattened suggestions
    const fallback = allTextSuggestions.find(
      (a) =>
        a.text.toLowerCase().includes(v) || v.includes(a.text.toLowerCase())
    );
    if (fallback) {
      window.location.href = fallback.url;
      return;
    }

    // 4) final fallback
    window.location.href = "/luxury-travel-deals.html";
  }

  // keyboard handler for input
  function onKeyDown(e) {
    const items = suggestionsBox.querySelectorAll("li");
    if (e.key === "ArrowDown") {
      currentFocus = Math.min(currentFocus + 1, items.length - 1);
      highlight(currentFocus);
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      currentFocus = Math.max(currentFocus - 1, 0);
      highlight(currentFocus);
      e.preventDefault();
    } else if (e.key === "Enter") {
      if (currentFocus > -1 && items[currentFocus]) {
        items[currentFocus].click();
        e.preventDefault();
      } else {
        performSearch(inputEl.value);
      }
    } else if (e.key === "Escape") {
      suggestionsBox.style.display = "none";
    }
  }

  // init: find DOM elements, load data lazily
  function initSearch() {
    inputEl = document.getElementById("searchInput");
    suggestionsBox = document.getElementById("suggestions");
    if (!inputEl || !suggestionsBox) return;

    // Debounced input
    const debounced = debounce(onInput, DEBOUNCE_MS);
    inputEl.removeAttribute("onkeyup"); // remove inline handler if present (avoid double-calls)
    inputEl.addEventListener("input", (e) => {
      // ensure data loaded
      loadData()
        .then(() => debounced(e))
        .catch((err) => console.warn(err));
    });

    // keyboard navigation
    inputEl.addEventListener("keydown", onKeyDown);

    // click outside to close
    document.addEventListener("click", (ev) => {
      if (!suggestionsBox.contains(ev.target) && ev.target !== inputEl) {
        suggestionsBox.style.display = "none";
      }
    });

    // search button (if present)
    const btn = document.querySelector(".search-btn");
    if (btn) btn.addEventListener("click", () => performSearch(inputEl.value));
  }

  // Auto-initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    initSearch();
  });
})();
