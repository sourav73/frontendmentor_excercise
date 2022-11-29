const navLinksContainer = document.querySelector(".nav-links-container");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close button");

menu.addEventListener("click", () => navLinksContainer.classList.add("show"));
closeMenu.addEventListener("click", () =>
  navLinksContainer.classList.remove("show")
);
