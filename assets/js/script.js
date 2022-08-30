let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let idade = document.querySelector('#idade')
let nomeOk = false
let emailOk = false
let idadeOk = false

function validaIdade(){
  let txtIdade = document.querySelector('#txtIdade')
  if (idade.value <18) {
    txtIdade.innerHTML = 'idade inválida'
    txtIdade.style.color = 'red'
  } else {
    txtIdade.innerHTML = 'idade válida'
    txtIdade.style.color = 'green'
    idadeOk = true
  }
}

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'nome inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
} 


function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'email inválido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = 'email válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}