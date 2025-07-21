var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  autoplay: true,
});

splide.mount();

let formElement = document.getElementById("form-element");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = {};

  let userName = document.getElementById("usernamefield").value;
  if (userName === "") {
    errors.username = "სახელის გრაფა არ შეიძლება იყოს ცარიელი";
  }
  let password = document.getElementById("passwordfield").value;
  if (password === "") {
    errors.password = "პაროლის გრაფა არ შეიძლება იყოს ცარიელი";
  }
  let password2 = document.getElementById("passwordfield2").value;
  if (password2 === "") {
    errors.password2 = "პაროლის გრაფა არ შეიძლება იყოს ცარიელი";
  }
  if (password2 !== password) {
    errors.password2 = "თქვენს მიერ შეყვანილი პაროლი არ ემთხვევა ერთმანეთს";
  }
  let emailValue = document.getElementById("emailfield").value.trim();
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (emailValue === "") {
  errors.email = "იმეილის გrafა არ შეიძლება იყოს ცარიელი";
} else if (!emailPattern.test(emailValue)) {
  errors.email = "იმეილის ფორმატი არასწორია";
}

  let gender = false;
  let radios = this.querySelectorAll(".genderfield");
  radios.forEach((element) => {
    if (element.checked) 
    gender = true;
  });
  if (!gender){
    errors.gender = 'გთხოვთ მონიშნო სქესი'
  }
  let agree =document.getElementById('check').checked;
  if (!agree){
    errors.agree = 'გთხოვთ დაეთანხმოთ წესებს და პირობებს'
  }
  this.querySelectorAll('.error-text').forEach((element)=>{
    element.innerHTML=''
  })

  for (let key in errors){
    
    let errorText = document.getElementById('error-' +key)
    console.log(errorText);
    if(errorText){
        errorText.innerText = errors[key]
    }
  }
  if (Object.keys(errors).length === 0){
    this.submit()
  }
});
let passwordfield =document.getElementById('passwordfield');
let passwordfiel2 =document.getElementById('passwordfield2');
let toggleIcon =document.getElementById('toggleIcon')
let toggleIcon2 =document.getElementById('toggleIcon2')
toggleIcon.addEventListener('click', function(){
    if(passwordfield.type ==='password'){
        passwordfield.setAttribute('type', 'text');
        toggleIcon .classList.remove('fa-eye')
        toggleIcon.classList.add('fa-eye-slash')
    }else{
        passwordfield.setAttribute('type', 'password');
        toggleIcon .classList.add('fa-eye')
        toggleIcon.classList.remove('fa-eye-slash')
    }
 
})
toggleIcon2.addEventListener('click', function(){
    if(passwordfield2.type ==='password'){
        passwordfield2.setAttribute('type', 'text');
        toggleIcon2 .classList.remove('fa-eye')
        toggleIcon2.classList.add('fa-eye-slash')
    }else{
        passwordfield2.setAttribute('type', 'password');
        toggleIcon2 .classList.add('fa-eye')
        toggleIcon2.classList.remove('fa-eye-slash')
    }
 
})
let emailField = document.getElementById("emailfield");
let errorTextEmail = document.getElementById("error-email");

emailField.addEventListener("input", function () {
  let emailValue = emailField.value.trim();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    errorTextEmail.innerText = "გრაფა უნდა შეივსოს";
    errorTextEmail.style.color = "red";
  } else if (emailPattern.test(emailValue)) {
    errorTextEmail.innerText = "იმეილი ვალიდურია";
    errorTextEmail.style.color = "green";
  } else {
    errorTextEmail.innerText = "იმეილი არ არის ვალიდური";
    errorTextEmail.style.color = "red";
  }
});
