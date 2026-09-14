const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  /* =========================================================
   VISIBLE — Theme Switcher
   ========================================================= */

  (() => {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");

    if (!toggle) return;

    const savedTheme = localStorage.getItem("visible-theme");

    const systemDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (systemDark ? "dark" : "light");

    root.setAttribute("data-theme", initialTheme);

    const updateThemeButton = (theme) => {
      const dark = theme === "dark";

      toggle.setAttribute("aria-pressed", String(dark));

      toggle.setAttribute(
        "aria-label",
        dark ? "Ativar modo claro" : "Ativar modo escuro",
      );
    };

    updateThemeButton(initialTheme);

    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";

      root.setAttribute("data-theme", next);
      localStorage.setItem("visible-theme", next);

      updateThemeButton(next);
    });
  })();
}
