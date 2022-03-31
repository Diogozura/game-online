import { dadosSala } from "../js/dadosSala.js"


function jogador(id) {
  const asideJogador = document.querySelector("[jogador]")

  const nome = document.querySelector("[nome]")
  
  nome.textContent = id.namePlayer

  if (id.playerBank == 1) {
    const svg = document.createElement("IMG")
    svg.src = `../img/avatarBanco/B${id.identificador}.svg`
    svg.classList.add("icone")
    svg.id = "icone"

    const aside = document.querySelector("[img]")
    aside.appendChild(svg)
  
  } else {
    criaImg(id.identificador)
  }
  // const flag = id.playerBank

  const valor = document.querySelector("[valor]")
  valor.textContent = id.saldo

  localStorage.setItem("flag" , id.playerBank)
  return asideJogador

}

function criaImg(cor, flag) {
  const svg = document.createElement("IMG")
  svg.src = `../img/avatar/${cor}.svg`
  svg.classList.add("icone")
  svg.id = "icone"

  if (flag == 1) {
    const svg = document.createElement("IMG")
    svg.src = `../img/avatarBanco/B${cor}.svg`
    svg.classList.add("icone")
    svg.id = "icone"
  }
  
  const aside = document.querySelector("[img]")
  aside.appendChild(svg)
  
  return 
}


dadosSala.visao()
  .then((id) => {
    console.log(id)
    jogador(id)
  })