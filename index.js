const picture = document.getElementById("background-image-container");
const textSectionContainer = document.getElementById("text-section-container");
const successMessageSection = document.getElementById(
  "success-message-section"
);
const formButton = document.getElementById("form-button");
const dismissButton = document.getElementById("dismiss-button");
const emailForm = document.getElementById("sign-up-form");
const emailInput = document.getElementById("email");
const messageDiv = document.getElementById("invalid-form-label");
const main = document.getElementById("main");

// Submit action logic

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting

  const emailValue = emailInput.value.trim(); // Get and trim email value

  // Validate email
  if (emailRegex.test(emailValue)) {
    // If email is valid switch to the thanks message
    picture.style.display = "none";
    textSectionContainer.style.display = "none";
    successMessageSection.style.display = "flex";
    main.style.width = "35vw";
    main.style.height = "520px";
    main.style.padding = "48px 64px 64px 64px";
  } else {
    // If not throw an error
    messageDiv.style.display = "unset";
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor = "hsla(4, 100%, 66%, 0.15)";
    emailInput.style.opacity = "unset";
  }
});

// Dismiss message button action

dismissButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Logic that will be executed after message will be dismissed
  picture.style.display = "block";
  textSectionContainer.style.display = "flex";
  successMessageSection.style.display = "none";
  main.style.width = "928px";
  main.style.height = "641px";
  main.style.padding = "24px 24px 24px 64px";
});
