const contactForm = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const PasswordError = document.querySelector("#password-error");
const repeatPasswordError = document.querySelector("#repeat-password-error");

contactForm.addEventListener("submit", validateContactForm);

function validateContactForm(){
    event.preventDefault();

    if (checkLenght(name.value, 3)== true){
        nameError.style.display = "none";
    } else{
        nameError.style.display="block";
    }

    if (validateEmail(email.value) == true){
        emailError.style.display="none";
    } else{
        emailError.style.display="block";
    }

    if (checkLenght(subject.value, 5)== true){
        repeatPasswordError.style.display = "none";
    } else{
        repeatPasswordError.style.display="block";
    }
    if (checkLenght(message.value, 5)== true){
        repeatPasswordError.style.display = "none";
    } else{
        repeatPasswordError.style.display="block";
    }

    function validateEmail(email){
        const regEx = /\S+@\S+\.\S+/;
        const patternMatches = regEx.test(email);
        return patternMatches;
    }

 console.log("hello")
}

function checkLenght(value, len){
    if (value.trim().length > len){
        return true;
    } else {
        return false;
    }
}
