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
  console.log(user, email);

});
