import { dadosSala } from "../js/dadosSala.js";
import { validaCampos } from "../js/validaCampos.js";







dadosSala.temCor()
  .then(temCor => {
    const dadoJogador = temCor.coresRestante
    console.log(dadoJogador)
    dadoJogador.forEach(function (dado) {
        console.log(dado)
    })
    
  })





const btnCria = document.querySelector("[jogador-player]")

btnCria.addEventListener("submit", (event) => {
  event.preventDefault()

  const namePlayer = validaCampos.validaNome()
  const identificador = validaCampos.validaIdentificador()
  dadosSala.criarJogadorPlayer(identificador, namePlayer)
     
    .then(() => {
      console.log(identificador, namePlayer)
      if ( !identificador, !namePlayer == false) {
        return window.location.href = '../jogo/game.html'
        
      }

  })

})




