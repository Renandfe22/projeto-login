//validação do formulario

const form = document.querySelector("#register")
const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#register-email")
const passwordInput = document.querySelector("#register-password")
const confirmPassword = document.querySelector("#register-password-confirm")
const emailValidator = require('email-validator'); //Uma biblioteca para validação de sintaxe de email.
const userEmail = 'usuario@exemplo.com';


//função para validar o form, preventDefault evita que o form seja enviado antes da verificação
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    if(nameInput.value === ""){
        alert("O nome não pode estar vazio")
    return; //o return serve para a função não continuar
    }
    //verifica se o email esta preenchido e se o email é valido
    if(emailInput.value === "") {
        alert("O email não pode estar vazio")
        return;
    }
    if (emailValidator.validate(userEmail)) {
        alert('O email é válido');
      } else {
        alert('O email é inválido');
      }
        // Validação de confirmação de senha
  if (passwordInput.value !== confirmPassword.value) {
    alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
    event.preventDefault()
    return; // Impede o envio do formulário se as senhas não coincidem
  }
    // se todos os campos estiverem preenchidos, o formulario sera enviado
form.submit()


})

