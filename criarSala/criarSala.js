import { linkSala } from "../js/linkSala.js"
// import { dadosSala } from "../js/dadosSala.js"



const botaoIniciarSala = document.querySelector("#iniciar")

botaoIniciarSala.addEventListener("click", function (event) {

  event.preventDefault()

  const form = document.querySelector('[form-dados]')

  const jogador = dadosDaSala(form)

  const erro = validaDados(jogador)

  const valorDeSpan = document.querySelector("#pwd_spn").innerText;

  
  if (erro.length > 0) {
    alert("Falta preencher " + erro)
  } else {
    iniciaGame()
  }
})


function dadosDaSala(form) {
  const jogador = {
    nome: form.nome.value,
    valor: form.valor.value,
    id: form.identificador.value,
  }
  return jogador;

}


function iniciaGame(jogador) {


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