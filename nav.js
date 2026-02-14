const Nav = document.querySelector(".nav-links");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = Nav.getAttribute("data-visible");
  navToggle.classList.toggle("toggle");
  if (visibility === "false") {
    Nav.setAttribute("data-visible", true);
  } else {
    Nav.setAttribute("data-visible", false);
  }
});
