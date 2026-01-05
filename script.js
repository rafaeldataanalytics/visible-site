const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuLinks = menu.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");

  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
});

// FECHAR MENU AO CLICAR EM UM LINK
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});
