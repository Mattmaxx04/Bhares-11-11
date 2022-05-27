var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    
    if(name.length == 0){
    nameError.innerHTML = "Por favor escribir nombre";
    return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Por favor escribir nombre completo";
    return false;
    }
    nameError.innerHTML = "Valido";
    return true;
    }