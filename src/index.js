const openButton = document.getElementById("nav-menu-open");
const closeButton = document.getElementById("nav-menu-close");

const openButtonContainer = document.getElementById("open-button-wrapper");
const navMenu = document.getElementById("nav-menu");

openButton.addEventListener("click", () => {
  navMenu.style.display = "block";
  openButtonContainer.style.display = "none";
});

closeButton.addEventListener("click", () => {
  navMenu.style.display = "none";
  openButtonContainer.style.display = "block";
});
