let form = document.querySelector(".form");
let nameValue = document.querySelector(".name");
let userName = document.querySelector(".username");
let emailValue = document.querySelector(".email");
let passwordValue = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirm-password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = userName.value;
  const name = nameValue.value;
  const email = emailValue.value;
  const passwordVal = passwordValue.value;
  const confirm = confirmPassword.value;
  let error = document.querySelector(".form p");
  const errMessage = "Password must be atleast 8 characters.";
  const err = "Your passwords does not match";
  let valid = true;
  switch (valid) {
    case passwordVal.length < 8:
      error.innerText = errMessage;
      break;

    case passwordVal !== confirm:
      error.innerText = err;
      break;
    default:
      error.innerText = "";
  }
});
