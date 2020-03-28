const clickedSubmit = document.getElementById("button");

clickedSubmit.addEventListener("click", function() {
  //   let firstNameFormat = /^$/;
  //   let lastNameFormat = /^$/;
  const mailFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const passwordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  let firstNameInputText = document.getElementById("firstName").value;
  let lastNameInputText = document.getElementById("lastName").value;
  let emailInputText = document.getElementById("email").value;
  let passwordInputText = document.getElementById("password").value;

  if (firstNameInputText.length != 0) {
    document.getElementById("firstName").classList.remove("error-icon");
    document.getElementById("errorMsgFirst").style.visibility = "hidden";
  } else {
    document.getElementById("firstName").classList.add("error-icon");
    document.getElementById("errorMsgFirst").style.visibility = "visible";
  }

  if (lastNameInputText.length != 0) {
    document.getElementById("lastName").classList.remove("error-icon");
    document.getElementById("errorMsgLast").style.visibility = "hidden";
  } else {
    document.getElementById("lastName").classList.add("error-icon");
    document.getElementById("errorMsgLast").style.visibility = "visible";
  }

  if (emailInputText.match(mailFormat)) {
    document.getElementById("email").classList.remove("error-icon");
    document.getElementById("errorMsgEmail").style.visibility = "hidden";
  } else {
    document.getElementById("email").classList.add("error-icon");
    document.getElementById("errorMsgEmail").style.visibility = "visible";
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

// function successHandling(iconId, msgId) {
//   document.getElementById(iconId).classList.remove("error-icon");
//   document.getElementById(msgId).style.visibility = "hidden";
// }

// function errorHandling(iconId, msgId) {
//   document.getElementById(iconId).classList.add("error-icon");
//   document.getElementById(msgId).style.visibility = "visible";
// }
