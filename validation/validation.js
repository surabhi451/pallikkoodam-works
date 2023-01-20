
// eslint-disable-next-line no-unused-vars
function handleSubmit(e){
    e.preventDefault();

const email = document.forms.login.email;
const password = document.forms.login.password;
const age = document.forms.login.age;

const emailValue = email.value;
const passwordValue = password.value;
const ageValue = age.value;


if(emailValue == ``){
email.style.border = `1px solid red`;
email.nextElementSibling.classList.remove(`d-none`);
}


const passwordErrorDisplay = password.nextElementSibling;
if(passwordValue.length < 6){
password.style.border = `1px solid red`;
password.nextElementSibling.classList.remove(`d-none`);
passwordErrorDisplay.innerHTML += `<li>Password must be at least 6 charecters.</li>`;
}


if(passwordValue.includes(` `)){
 password.style.border = `1px solid red`;
password.nextElementSibling.classList.remove(`d-none`);
passwordErrorDisplay.innerHTML += `<li>Password must not contain spaces.</li>`;
}

const ageErrorDisplay = age.nextElementSibling;
if(ageValue == ``)
{
   age.style.border = `1px solid red`;
  age.nextElementSibling.classList.remove(`d-none`);
 ageErrorDisplay.innerHTML += `<li> invalid age.</li>`;
  }
console.log(emailValue,passwordValue,ageValue);
}

