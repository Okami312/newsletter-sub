const submitButton = document.querySelector(".submit-button");
const inputPage = document.querySelector(".page-card-section");
const inputField = document.querySelector(".email-input");
const errorMessage = document.querySelector(".email-error-message");
const confirmationPage = document.querySelector(".confirmation-page");
const confirmationText = confirmationPage.querySelector("p");
const dismissButton = confirmationPage.querySelector("button");

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.trim());
};

const handleSubmitForm = (e) => {
  e.preventDefault();
  const email = inputField.value.trim();

  if (!isValidEmail(email)) {
    errorMessage.classList.remove("hide");
    inputField.classList.add("invalid");
    inputField.setAttribute("aria-invalid", "true");
  } else {
    errorMessage.classList.add("hide");
    inputField.classList.remove("invalid");
    inputField.setAttribute("aria-invalid", "false");

    inputPage.style.display = "none";
    confirmationText.textContent = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
    confirmationPage.classList.remove("hide");
  }
};

dismissButton.addEventListener("click", () => {
  confirmationPage.classList.add("hide");
  inputPage.style.display = "block";
  inputField.value = "";
});

submitButton.addEventListener("click", handleSubmitForm);
