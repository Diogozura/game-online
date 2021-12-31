import { linkSala } from "./linkSala.js"

const botaoIniciarSala = document.querySelector("#iniciar")

botaoIniciarSala.addEventListener("click", function (event) {

  event.preventDefault()

  const form = document.querySelector("form")

  const jogador = dadosDaSala(form)

  console.log(jogador)

  const erro = validaDados(jogador)

  console.log(erro)

  if (erro.length > 0) {
    alert("nada feito")
  } else {
    iniciaGame()
  }


})


function dadosDaSala(form) {

  const jogador = {
    nome: form.nome.value,
    valor: form.valor.value,
    id: form.identificador.value
  }
  return jogador;

}

function iniciaGame(jogador) {

  // fetch('https://ffgames134.herokuapp.com/dadosSala/?keyRoom=G0cjVXJ5bIq4yNELM98F', {
  //     method: 'POST',
  //     headers: {
  //         'Content-type': 'application/json'
  //     },
  //     body: json
  // })
  // .then(resp => {
  //     return resp.body
  // })



  alert(`olá`)
}

function validaDados(jogador) {
  const erro = []
  if (jogador.valor.length == " ") {
    erro.push("Adicione um nome para o Paciente!");
  }
  if (jogador.nome.length == " ") {
    erro.push("falta o nome")
  }
  escolhido()

  return erro
}





// pegar link
linkSala.sala()
  .then(sala => {
    sala.keyRoom
    let link = document.querySelector('#pwd_spn')
    link.textContent = sala.keyRoom
    return link
  })

// copiar 

document.getElementById("cp_btn").addEventListener("click", copy_password);

function copy_password() {
  var copyText = document.getElementById("pwd_spn");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}
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