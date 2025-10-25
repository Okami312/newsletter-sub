const submitButton = document.querySelector(".submit-button");
const inputPage = document.querySelector(".page-card-section");
const inputField = document.querySelector(".email-input");
const errorMessage = document.querySelector(".email-error-message");

const handleSubmitForm = (e) => {
  const emailPattern = "^[^s@]+@[^s@]+.[^s@]+$";

  e.preventDefault();
  if (inputField.value === "" && inputField === emailPattern) {
    inputPage.style.display = "block";
  } else {
    inputPage.style.display = "none";
  }
};

submitButton.addEventListener("click", handleSubmitForm);
