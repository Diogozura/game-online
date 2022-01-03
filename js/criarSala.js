import { linkSala } from "./linkSala.js"

const botaoIniciarSala = document.querySelector("#iniciar")

botaoIniciarSala.addEventListener("click", function (event) {

  event.preventDefault()

  const form = document.querySelector("form")

  const jogador = dadosDaSala(form)

  const erro = validaDados(jogador)



  if (erro.length > 0) {
    alert("Falta preencher " + erro)
  } else {
    iniciaGame()
  }

  console.log(token)

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

  const gerarNovoLink = document.querySelector("#gerar-novo-link")

  gerarNovoLink.addEventListener("click", function () {
    event.preventDefault()
    linkSala.sala()
    .then(sala => {
      sala.keyRoom
      const link = document.querySelector('#pwd_spn')
      link.textContent = sala.keyRoom
      console.log(link.value)
      localStorage.setItem("token", JSON.stringify(link))
      
      // localStorage.setItem("token",JSON.stringify(link))
      return link
    })
    
   });


// copiar token 
document.getElementById("cp_btn").addEventListener("click", copy_password);
function copy_password(event) {
  event.preventDefault()

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