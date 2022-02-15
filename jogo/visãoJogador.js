import { dadosSala } from "../js/dadosSala.js"
import {montaBtn} from "../jogo/jogo.js"
import {montaImg} from "../jogo/jogo.js"
import {montaNome} from "../jogo/jogo.js"
import {montaValor} from "../jogo/jogo.js"

function jogador(id) {
  const asideJogador = document.querySelector("[jogador]")
  asideJogador.appendChild(montaImg(id.identificadorHexadecimal))
  asideJogador.appendChild(montaNome(id.namePlayer))
  asideJogador.appendChild(montaValor(id.saldo))
  asideJogador.appendChild(montaBtn())


}

dadosSala.visao()
  .then((id) => {
      
    jogador(id)
        
    })


