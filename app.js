var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

/*validacion nombre*/
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
    nameError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
    }

/*validacion email */
function validateEmail(){
    var email = document.getElementById("contact-email").value;
    
    if(email.length == 0){
        emailError.innerHTML = "Por favor escribir email";
    return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Por favor escribir un email válido";
    return false;
    }
    emailError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
    }

/*validacion phone */
function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    
    if(phone.length == 0){
    phoneError.innerHTML = "Por favor escribir teléfono";
    return false;
    }
    if(phone.length !== 10){
    phoneError.innerHTML = "El telefono debe contar con al menos de 10 números";
    return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = "Por favor escribir solo números";
    return false;
    }
    phoneError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
    }

/*validacion message */
function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 50;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = "Por favor escribir más de 50 caracteres";
    return false;
    }
    
    messageError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
    }

    function validateForm(){
        if(!validateName()|| !validatePhone() || !validateEmail() || !validateMessage() ){
            submitError.style.display = 'block';
            submitError.innerHTML = "Por favor corregir los errores indicados";
            setTimeout(function(){submitError.style.display = 'none';}, 3000);
            return false;
        }
    }
