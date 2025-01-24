const picture = document.getElementById("background-image-container");
const textSectionContainer = document.getElementById("text-section-container");
const successMessageSection = document.getElementById(
  "success-message-section"
);
const formButton = document.getElementById("form-button");
const dismissButton = document.getElementById("dismiss-button");

formButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Form submission prevented!");
  picture.style.display = "none";
  textSectionContainer.style.display = "none";
  successMessageSection.style.display = "flex";
});

dismissButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Form submission prevented!");
  picture.style.display = "block";
  textSectionContainer.style.display = "flex";
  successMessageSection.style.display = "none";
});
