function checkEmailValidation() {
  const mailFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const emailInputText = document.getElementById("email").value;

  if (emailInputText.match(mailFormat)) {
    document.getElementById("errorMsg").style.visibility = "hidden";
    document.getElementById("email").classList.remove("error-msg");
  } else {
    document.getElementById("errorMsg").style.visibility = "visible";
    document.getElementById("email").classList.add("error-msg");
  }
}
