import { dadosSala } from "../js/dadosSala.js"
import { validaCampos } from "../js/validaCampos.js"
import { input, label, nome, quem, } from "./trasnferencia.js"




export const flag = localStorage.getItem("flag")
export function playerBank() {
  console.log(flag)

  if (flag == 1) {
    const banco = document.querySelector(".bank")
    banco.style.display = "block"


    const ativa = document.querySelector("[ativa]")
    ativa.addEventListener("click", () => {
      const icon = document.querySelector("[banco-icone]")
      const iconePlayer = document.querySelector("#icone")
      const nomePlayer = document.querySelector("[nome]")
      const nomeBanco = document.querySelector(".nome-banco")
      const bancoTrans = document.querySelector("#bancoTras")
      const jogador = document.querySelector(".transfere-jogador")



      console.log("fui ativado")
      if (ativa.checked) {

        icon.style.display = "none"
        iconePlayer.style.display = "block"

        nomeBanco.style.display = "none"
        nomePlayer.style.display = "block"


        bancoTrans.style.display = "block"
        jogador.style.display = "none"
        localStorage.setItem("banco", 0)
        return true

      } else {

        nomePlayer.style.display = "none"
        nomeBanco.style.display = "block"

        iconePlayer.style.display = "none"
        icon.style.display = "block"

        bancoTrans.style.display = "none"
        jogador.style.display = "block"
        localStorage.setItem("banco", 1)

        return false
      }
    })
  }
  // if()
}


// banco 0


const btnSair = document.querySelector("[sair-player-banco]")
btnSair.addEventListener("submit", event => {

  event.preventDefault()

  console.log("clicou no pai")
  const trocar = troca()
  console.log(trocar)
})


function sairBanco(dado) {
  const escolha = document.querySelector("[sair-banco]")
  const aside = document.createElement("aside")
  aside.className = "transfere-jogador"


  aside.appendChild(label(dado.identificador))
  aside.appendChild(nome(dado.namePlayer))
  aside.appendChild(input(dado.idPlayer, dado.identificador))

  escolha.appendChild(aside)

  return escolha
}







function troca() {

  const idPlayerDe = parseInt(quem())
  const idPlayerPara = parseInt(validaCampos.escolhido())

  dadosSala.trocaBanco(idPlayerDe, idPlayerPara)
    .then(() => {
      console.log(`de ${idPlayerDe} para o ${idPlayerPara}`)
    })
}



dadosSala.dados()
.then(dados => {
  const dadoJogador = dados.players

  dadoJogador.forEach(function (dado) {
    sairBanco(dado)
  })
})

