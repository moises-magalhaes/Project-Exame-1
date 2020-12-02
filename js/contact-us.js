const contactForm = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const messageError = document.querySelector("#message-error");
const submit = document.querySelector(".submit");

contactForm.addEventListener("submit", validateContactForm);

function validateContactForm(event){
    event.preventDefault();

    if (checkLenght(name.value, 3)== false){
        nameError.style.display = "block";
    } 

    if (validateEmail(email.value) == false){
        emailError.style.display="block";
    } 
    if (checkLenght(subject.value, 5)== false){
        subjectError.style.display = "block";
    } 
    if (checkLenght(message.value, 5)== false){
        messageError.style.display = "block";
    } 


    else{
        console.log("hello")
        /*document.getElementsByClassName("submit").action="/successful.html";*/
        /*submit.location.href = "successful.html";*/
    }

    function validateEmail(email){
        const regEx = /\S+@\S+\.\S+/;
        const patternMatches = regEx.test(email);
        return patternMatches;
    }

 
  
}


function checkLenght(value, len){
    if (value.trim().length > len){
        return true;
    } else {
        return false;
    }
}
