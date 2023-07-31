const botao = document.getElementById("button");
// const errorMensagem = document.getElementByClassName("error-mensage");
const email = document.getElementById("email");
const errorMensagem = document.getElementById("error-mensage");

let confirma;


botao.addEventListener("click", (evento) => {
        if(email.value.indexOf('@' && '.com') !== -1){
            confirma = 1;
        }else{
            confirma = 0;  
        }

    console.log(confirma);
    console.log(errorMensagem);

    if(confirma === 1){
        console.log("funfo");
        email.style.cssText =
            'background-color: white;' +
            'border-color: gray';
        errorMensagem.innerHTML = "";
        window.location.replace("http://127.0.0.1:5500/newsletter-sign-up-with-success-message-main/correto.html");
        const emailSucess = document.getElementById("emailSucess");
        console.log(emailSucess);

    }else{
        console.log("nao funfo");
        email.style.cssText =
            'background-color: #eaa7a7;' +
            'border-color: red';
        errorMensagem.innerHTML = "Valid email required";
    }

});