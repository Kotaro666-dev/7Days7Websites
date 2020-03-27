let clickedSubmit = document.getElementById("button");

clickedSubmit.addEventListener("click", function() {
  //   let firstNameFormat = /^$/;
  //   let lastNameFormat = /^$/;
  let mailFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let passwordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  let firstNameInputText = document.getElementById("firstName").value;
  let lastNameInputText = document.getElementById("lastName").value;
  let emailInputText = document.getElementById("email").value;
  let passwordInputText = document.getElementById("password").value;

  if (firstNameInputText.length != 0) {
    document.getElementById("firstName").classList.remove("error-icon");
    document.getElementById("errorMsgFirst").style.visibility = "hidden";

    // return true;
  } else {
    document.getElementById("firstName").classList.add("error-icon");
    document.getElementById("errorMsgFirst").style.visibility = "visible";
    // return false;
  }

  if (lastNameInputText.length != 0) {
    document.getElementById("lastName").classList.remove("error-icon");
    document.getElementById("errorMsgLast").style.visibility = "hidden";
    // return true;
  } else {
    document.getElementById("lastName").classList.add("error-icon");
    document.getElementById("errorMsgLast").style.visibility = "visible";
    // return false;
  }

  if (emailInputText.match(mailFormat)) {
    document.getElementById("email").classList.remove("error-icon");
    document.getElementById("errorMsgEmail").style.visibility = "hidden";

    // return true;
  } else {
    document.getElementById("email").classList.add("error-icon");
    document.getElementById("errorMsgEmail").style.visibility = "visible";
    // return false;
  }

  if (passwordInputText.match(passwordFormat)) {
    document.getElementById("password").classList.remove("error-icon");
    document.getElementById("errorMsgPwd").style.visibility = "hidden";
  } else {
    document.getElementById("password").classList.add("error-icon");
    document.getElementById("errorMsgPwd").style.visibility = "visible";
  }

  return 0;
});
