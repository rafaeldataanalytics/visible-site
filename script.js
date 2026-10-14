(() => {
  "use strict";

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("active");
      hamburger.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      document.body.classList.toggle("menu-open", isOpen);
    });
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Abrir menu");
        document.body.classList.remove("menu-open");
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Abrir menu");
        document.body.classList.remove("menu-open");
      }
    });
  }

  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    let savedTheme = null;
    try { savedTheme = localStorage.getItem("visible-theme"); } catch (_) { /* armazenamento indisponível */ }
    const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemDark ? "dark" : "light");
    root.setAttribute("data-theme", initialTheme);

    const updateThemeButton = (theme) => {
      const dark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(dark));
      toggle.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
      toggle.setAttribute("title", dark ? "Ativar modo claro" : "Ativar modo escuro");
    };
    updateThemeButton(initialTheme);
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("visible-theme", next); } catch (_) { /* armazenamento indisponível */ }
      updateThemeButton(next);
    });
  }
})();
