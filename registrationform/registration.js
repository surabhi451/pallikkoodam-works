

function handleSubmit(e){
    e.preventDefault();

const fname = document.forms.login.fname;
const lname = document.forms.login.lname;
const email = document.forms.login.email;
const dob = document.forms.login.dob;
const password = document.forms.login.password;
const cpassword = document.forms.login.cpassword;
const pnumber = document.forms.login.pnumber;

const fnameValue = fname.value;
const lnameValue = lname.value;
const emailValue = email.value;
const dobValue = dob.value;
const passwordValue = password.value;
const cpasswordValue = cpassword.value;
const pnumberValue = pnumber.value;

if(fnameValue == ``){
  fname.style.border = `1px solid red`;
  fname.nextElementSibling.classList.remove(`d-none`);
  }
 
  if(lnameValue == ``){
    lname.style.border = `1px solid red`;
    lname.nextElementSibling.classList.remove(`d-none`);
    }

if(emailValue == ``){
email.style.border = `1px solid red`;
email.nextElementSibling.classList.remove(`d-none`);
}
const dobErrorDisplay = dob.nextElementSibling;
if(dobValue == (``)){
dob.style.border = `1px solid red`;
dob.nextElementSibling.classList.remove(`d-none`);
dobErrorDisplay.innerHTML += `<li>invalid password.</li>`;
}
const pnumberErrorDisplay = pnumber.nextElementSibling;
  if(pnumberValue.length < 10)
{
   pnumber.style.border = `1px solid red`;
  pnumber.nextElementSibling.classList.remove(`d-none`);
 pnumberErrorDisplay.innerHTML += `<li> Phone number must be least 10 digit.</li>`;
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

const cpasswordErrorDisplay = cpassword.nextElementSibling;
if(cpasswordValue == (``)){
cpassword.style.border = `1px solid red`;
cpassword.nextElementSibling.classList.remove(`d-none`);
cpasswordErrorDisplay.innerHTML += `<li>invalid password.</li>`;
}
if(cpasswordValue != passwordValue){
  cpassword.style.border = `1px solid red`;
  cpassword.nextElementSibling.classList.remove(`d-none`);
  cpasswordErrorDisplay.innerHTML += `<li>incorrect password.</li>`;
  }
  

console.log(fnameValue,lnameValue,emailValue,dobValue,pnumberValue,passwordValue,cpasswordValue);
}

