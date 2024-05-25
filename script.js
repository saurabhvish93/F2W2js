const email_box = document.getElementById('email');
const password_box = document.getElementById('password');
const output = document.querySelector('.output');
const message = document.querySelector('.message')

//submit_button.addEventListener("click", valudateForm)
const form = document.querySelector('form');
form.addEventListener("change", validateForm)
function validateForm(eventDetails) {
    eventDetails.preventDefault();
    let email = email_box.value;
    let password = password_box.value;

if(email.contains !="@" || email.contains != "." || email.length <= 3) {
  email.innerHTML = "Make sure email is more than 3 characters and has @ and a ."
  email.className = "error"
  return
}
if(password.length <= 8) {
  password.innerHTML = "Make sure password is more than 8 characters."
  passwordassword.className = "error"
  return
}



//email and password conditions are matching than
 password.innerHTML = "All good to go."
 password.className = "success"
}