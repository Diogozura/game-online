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
  botaaside.appendChild(input(player.idPlayer))
  botaaside.appendChild(label(player.identificadorHexadecimal))
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

function label(dado) {

  const svg = ` <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
    class="bi bi-person" viewBox="0 0 16 16">
    <path
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
        fill="${dado}" /></svg>`
  const idImg = document.createElement("svg")
  idImg.classList.add("img-jogador")
  idImg.innerHTML = svg

  const criaLabel = document.createElement("label")
  criaLabel.appendChild(idImg)

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

