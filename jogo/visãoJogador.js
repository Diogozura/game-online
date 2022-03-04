import { dadosSala } from "../js/dadosSala.js"


function jogador(id) {
  const asideJogador = document.querySelector("[jogador]")

  const nome = document.querySelector("[nome]")
  
  nome.textContent = id.namePlayer

  criaImg(id.identificador)

  const valor = document.querySelector("[valor]")
  valor.textContent = "R$" + id.saldo

  return asideJogador

}

function criaImg(cor) {
  const svg = document.createElement("IMG")
  svg.src = `../img/avatar/${cor}.svg`
  svg.classList.add("icone")
  
  const aside = document.querySelector("[img]")
  aside.appendChild(svg)
  
  return 
}


dadosSala.visao()
  .then((id) => {
    jogador(id)
  })


