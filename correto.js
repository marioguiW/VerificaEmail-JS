const botao = document.getElementById("button");
const emailSucess = document.getElementById("emailSucess");

emailSucess.innerHTML = localStorage.getItem('email');

botao.addEventListener("click", (evento) => {
    localStorage.removeItem('email');
})