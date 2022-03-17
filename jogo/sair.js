import { dadosSala } from "../js/dadosSala.js"
import { validaCampos } from "../js/validaCampos.js"
import { input, label, nome, quem, } from "./trasnferencia.js"

const flag = localStorage.getItem("flag")

export function sair() {
    const sair = document.querySelector("[sair]")

    sair.addEventListener("click", function () {

        if (flag == 1) {
            localStorage.clear()
            location.href = '../index.html'
        } else {
            console.log("sair")
            localStorage.clear()
            location.href = '../index.html'
        }
       

      
    })

  
}
const btnSair = document.querySelector("[sair-player-banco]")
btnSair.addEventListener("submit", event => {

  event.preventDefault()
  // localStorage.clear()
  // location.href = '../index.html'
  console.log("clicou no pai")
  const trocar = troca()
  console.log(trocar)
})


function sairBanco(dado) {
  const escolha = document.querySelector("[sair-banco]")
  const aside = document.createElement("aside")
  aside.className = "transfere-jogador"

  aside.id = dado.idPlayer
  aside.appendChild(label(dado.identificador))
  aside.appendChild(nome(dado.namePlayer))
  aside.appendChild(input(dado.idPlayer, dado.identificador))

  escolha.appendChild(aside)


  if (aside.id == localStorage.getItem("idPlayer")) {
    aside.style.display = "none"
  }

  return escolha
}


dadosSala.dados()
.then(dados => {
  const dadoJogador = dados.players

  dadoJogador.forEach(function (dado) {
    sairBanco(dado)
  })
})




function troca() {

  const idPlayerDe = parseInt(quem())
  const idPlayerPara = parseInt(validaCampos.escolhido())

  dadosSala.trocaBanco(idPlayerDe, idPlayerPara)
    .then(() => {
      console.log(`de ${idPlayerDe} para o ${idPlayerPara}`)
    
    })
}

