import { linkSala } from "../js/linkSala.js"

const botaoIniciarSala = document.querySelector("#iniciar")

botaoIniciarSala.addEventListener("click", function (event) {

  event.preventDefault()

  const form = document.querySelector("form")

  const jogador = dadosDaSala(form)

  
  console.log(jogador)

  const erro = validaDados(jogador)
  
    console.log(erro)
  
  
  
  iniciaGame()
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
  if (jogador.valor.length == 0) erro.push("Adicione um nome para o Paciente!");

}








console.error( "espertinho, tá querendo ver oq seu cabra safado... vai procurar oq fazer, olhar o código dos outros é feio 😒");