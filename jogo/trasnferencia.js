import { dadosSala } from "../js/dadosSala.js"
import { montaNome, montaImg } from "./jogo.js"




function jogadoresDisponiveis(dadu) {
  const jogadoresDis = document.querySelector("[jogadores-disponiveis]")
  jogadoresDis.appendChild(montaNome(dadu.namePlayer))
  jogadoresDis.appendChild(montaImg(dadu.identificadorHexadecimal))
  console.log(dadu.idPlayer)
  montaImg()
  montaNome()

  return jogadoresDis 
}

dadosSala.dados()
    .then(dados => {
        const dadoJogador = dados.players
        console.log(dadoJogador)
        dadoJogador.forEach(function (dado) {
          jogadoresDisponiveis(dado)
        })
        
    })
















const tranferir = document.querySelector("[trasferir]")

tranferir.addEventListener("submit", (event) => {
  event.preventDefault()

  valor()
})



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


// function imgJogador() {
//   const imgJogador = document.createElement("img")
// }

