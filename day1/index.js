let clickedSubmit = document.getElementById("submit-btn");

clickedSubmit.addEventListener("click", function() {
  //   console.log("cliecked");
  let mailformat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let inputText = document.getElementById("email-field").value;
  //   console.log(inputText);

  if (inputText.match(mailformat)) {
    document.getElementById("error-icon").style.visibility = "hidden";
    document.getElementById("errorMsg").style.visibility = "hidden";

    return true;
  } else {
    document.getElementById("error-icon").style.visibility = "visible";
    document.getElementById("errorMsg").style.visibility = "visible";
    return false;
  }
});
