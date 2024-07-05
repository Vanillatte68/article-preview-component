const share = document.querySelector(".share");
const shareMobile = document.querySelector(".share-mobile");
const options = document.querySelector(".share-options");
share.addEventListener("click", () => {
  options.classList.toggle("active");
});
shareMobile.addEventListener("click", () => {
  options.classList.toggle("active");
});
