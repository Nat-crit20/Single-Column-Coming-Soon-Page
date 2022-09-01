const form = document.querySelector("form");
const error = document.querySelector(".error-msg");
const email = document.getElementById("email");
const errorMsg = document.querySelector(".error-msg");

function toggleVisible(border, visibility, msg = "") {
  email.style.border = border;
  errorMsg.innerHTML = msg;
  return (error.style.visibility = visibility);
}

function checkEmail() {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    email.focus;
    return false;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const emailData = data.get("email");
  if (!emailData) {
    toggleVisible(
      `1px solid hsl(354, 100%, 66%)`,
      "visible",
      "Whoops! It looks like you forgot to add your email"
    );
  } else if (checkEmail() === false) {
    toggleVisible(
      `1px solid hsl(354, 100%, 66%)`,
      "visible",
      "Please provide a valid email address"
    );
  } else {
    toggleVisible("1px solid hsl(223, 100%, 88%)", "hidden");
  }
});
