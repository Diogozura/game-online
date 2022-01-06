import { dadosSala } from "../js/dadosSala.js"
 
const formulario = document.querySelector('[form-dados]')


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const token = evento.target.querySelector('#pwd_spn').value
    const valor= evento.target.querySelector('[data-valor]').value
    const id = evento.target.querySelector('[data-identificador]').value
    const nome = evento.target.querySelector('[data-nome]').value

    dadosSala.criarSala(token, valor, id, nome)
        .then(() => {
        console.log(token, valor, id, nome)
    })
}) 

import { linkSala } from "../js/linkSala.js"



const botaoIniciarSala = document.querySelector("#iniciar")

botaoIniciarSala.addEventListener("click", function (event) {

  event.preventDefault()

  const form = document.querySelector("form")

  const jogador = dadosDaSala(form)

  const erro = validaDados(jogador)

  


  // if (erro.length > 0) {
  //   alert("Falta preencher " + erro)
  // } else {
  //   iniciaGame()
  // }

 

})


function dadosDaSala(form) {

  const jogador = {
    nome: form.nome.value,
    valor: form.valor.value,
    id: form.identificador.value
  }
  return jogador;

}


const url = "https://ffgames134.herokuapp.com/"
const criarSala = url + "dopahfoanfoa"


function iniciaGame(jogador) {

  // fetch(criarSala, {
  //     method: 'POST',
  //     headers: {
  //         'Content-type': 'application/json'
  //     },
  //     body: json
  // })
  // .then(resp => {
  //     return resp.body
  // })



  alert(`acesso permitido`)
}

function validaDados(jogador) {
  const erro = []
  if (jogador.valor.length == " ") {
    erro.push("valor inicial  ");
  }
  if (jogador.nome.length == " ") {
    erro.push(" nome do jogador ")
  }
  escolhido()

  return erro
}


// gerar token



 
    linkSala.sala()
    .then(sala => {
      const tokenSala = sala.keyRoom
      const link = document.querySelector('#pwd_spn')
      link.textContent = tokenSala
      localStorage.setItem("token", JSON.stringify(tokenSala))
          return link
    })
 


  


// copiar token 
// document.getElementById("cp_btn").addEventListener("click", copy_password);
// function copy_password(event) {
//   event.preventDefault()

//   var copyText = document.getElementById("pwd_spn");
//   var textArea = document.createElement("textarea");
//   textArea.value = copyText.textContent;
//   document.body.appendChild(textArea);
//   textArea.select();
//   document.execCommand("Copy");
//   textArea.remove();
// }
// validar identificador 
function escolhido() {
  var res = '';
  const items = document.querySelector('.cores');
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      res = items[i].value
      break;
    }
  }
  return res;
}

console.error("espertinho, tá querendo ver oq seu cabra safado... vai procurar oq fazer, olhar o código dos outros é feio 😒");