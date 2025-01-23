const picture = document.getElementById("background-image-container");
const textSectionContainer = document.getElementById("text-section-container");
const successMessageSection = document.getElementById(
  "success-message-section"
);
const formButton = document.getElementById("form-button");

formButton.addEventListener("click", function () {
  picture.style.display = "none";
  textSectionContainer.style.display = "none";
  successMessageSection.style.display = "block";
});
