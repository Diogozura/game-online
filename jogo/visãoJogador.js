import { dadosSala } from "../js/dadosSala.js"



function jogador(id) {
  const asideJogador = document.querySelector("[jogador]")
  asideJogador.appendChild(criaImg(id.identificador))

  const nome = document.querySelector("[nome]")
  nome.textContent = id.namePlayer

  const valor = document.querySelector("[valor]")
  valor.textContent = "R$" + id.saldo
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
    console.log(id)
  })


