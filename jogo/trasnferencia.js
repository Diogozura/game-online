import { dadosSala } from "../js/dadosSala.js"
import { montaNome, montaImg } from "./jogo.js"




function jogadoresDisponiveis(dadu) {
  const jogadoresDis = document.querySelector("[jogadores-disponiveis]")
  const jogadores = criarInputJogadorPlayerDisponivel()
  const label = criarLabel()
  jogadoresDis.appendChild(jogadores)
  jogadoresDis.appendChild(label)

  return jogadoresDis
}

function criarInputJogadorPlayerDisponivel() {
  const input = document.createElement("input")
  input.type = "radio"
  input.id = "user1"
  input.value = "user"
  input.name = "players"
  

  return input
}

function criarLabel() {
  const label = document.createElement("label")
  label.textContent = "userPlayer cu"
  return label
}

dadosSala.dados()
    .then(dados => {
        const dadoJogador = dados.players
        console.log(dadoJogador)
        dadoJogador.forEach(function (dado) {
          criarLabel(dado)
        })
        
    })




const tranferir = document.querySelector("[trasferir]")

tranferir.addEventListener("submit", (event) => {
  event.preventDefault()

  valor()
})
jogadoresDisponiveis()


function valor() {
  const pegaValor = document.querySelector("[valor]").value
  const errorValor = document.querySelector("[erro-valor]")
  if (pegaValor <= 1) {
    errorValor.className = "hide"
    console.log("erro")
  } else {
    errorValor.style.display = "none"
    console.log("acerto")
  }
}


