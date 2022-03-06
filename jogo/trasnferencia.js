import { dadosSala } from "../js/dadosSala.js"
import { validaCampos } from "../js/validaCampos.js"
import { playerBank } from "./banco.js"


const tranferir = document.querySelector("[trasferir]")
tranferir.addEventListener("submit", (event) => {
  event.preventDefault()
  validaCampos.escolhido()


  tranfere()
})



function criarPlayerTrasfere(player) {
  const jogadoresDis = document.querySelector("[jogadores-disponiveis]")
  const botaaside = document.createElement("aside")
  botaaside.id = player.idPlayer
  botaaside.className = "transfere-jogador"
  jogadoresDis.appendChild(botaaside)
  botaaside.appendChild(label(player.identificador))
  botaaside.appendChild(nome(player.namePlayer))
  botaaside.appendChild(input(player.idPlayer))
  
  // console.log(botaaside.id)
  // console.log(localStorage.getItem("idPlayer"))

  if (localStorage.getItem("idPlayer") == botaaside.id) {
    botaaside.style.display = "none"
  }
}



function input(dado) {

  const criarInput = document.createElement("input")
  criarInput.name = "cores"
  criarInput.type = "radio"
  criarInput.value = dado
  criarInput.id = dado

  return criarInput
}

function nome(player) {
  const nome = document.createElement("p")
  nome.className = "p-trasfere"

  nome.textContent = player

  return nome
}

function label(cor) {

  const svg = document.createElement("IMG")
  svg.src = `../img/avatar/${cor}.svg`
  svg.classList.add("icone")

  const criaLabel = document.createElement("label")
  criaLabel.appendChild(svg)
// criaLabel.textContent = cor
  return criaLabel

}

function dinheiro() {
  const pegaValor = document.querySelector("[valor-transfere]").value
  const errorValor = document.querySelector("[erro-valor]")

  if (pegaValor <= 1) {
    errorValor.className = "hide"
  } else {
    errorValor.style.display = "none"
  }

  return pegaValor
}


dadosSala.dados()
  .then(dados => {
    const dadoJogador = dados.players

    dadoJogador.forEach(function (dado) {
      criarPlayerTrasfere(dado)
    })
  })

function quem() {
  let quem = " "
  const normal = parseInt(localStorage.getItem("idPlayer"))
  const banco = localStorage.getItem("banco")
  if (banco == 1) {
      quem = "0"
  } else {
    quem = normal
    }
  return quem

}


function tranfere() {

  // TRASNFORMAR EM INTEIRO 
  const idPlayerDe =  parseInt(quem())
  const idPlayerPara = parseInt(validaCampos.escolhido())
  const valor = parseInt(dinheiro())


  dadosSala.trafereDinheiroParaOsAmigos(idPlayerDe, idPlayerPara, valor)
    .then(() => {
      location.reload()
      console.log(`Quem enviou ${idPlayerDe}, para ${idPlayerPara} o valor ${valor} `)
    })
}

