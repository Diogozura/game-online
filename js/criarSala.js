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

  let jogador = {
    nome: form.nome.value,
    valor: form.valor.value,
    id: form.identificador.value
  }
  return jogador;
  
}

function iniciaGame() {
  
  alert("parabens deu tudo certo")
}

function validaDados(jogador) {
  const erro = []
  if (jogador.valor.length == " ") {
    erro.push("Adicione um nome para o Paciente!");
  }
  if (jogador.nome.length == " ") {
    erro.push("falta o nome")
  }
  
  return erro
}



fetch()




console.error( "espertinho, tá querendo ver oq seu cabra safado... vai procurar oq fazer, olhar o código dos outros é feio 😒");