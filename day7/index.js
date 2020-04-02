const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navigation = document.getElementById("navigationPageMobile");

hamburger.style.visibility = "visible";
navigation.style.visibility = "hidden";

function changeNavIcon() {
  if (hamburger.style.visibility == "visible") {
    hamburger.style.visibility = "hidden";
    close.style.visibility = "visible";
    navigation.style.visibility = "visible";

    navigation.style.visibility = "visible";
  } else {
    hamburger.style.visibility = "visible";
    close.style.visibility = "hidden";
    navigation.style.visibility = "hidden";
  }
}

hamburger.addEventListener("click", changeNavIcon);
close.addEventListener("click", changeNavIcon);
