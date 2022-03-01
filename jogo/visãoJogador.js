import { dadosSala } from "../js/dadosSala.js"

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

function montaBtn() {
  const botao = document.createElement("button")
  botao.type = "button"
  botao.className = "btn-inicia"
  // botao.setAttribute('data-toggle',modal)
  // botao.setAttribute('#data-toggle', #modalExemplo)
  botao.dataset.toggle = "modal"
  botao.dataset.target = "#modalExemplo"
  
  botao.innerText = "teste uau";

  return botao
}


dadosSala.visao()
  .then((id) => {
      
    jogador(id)
        
    })


