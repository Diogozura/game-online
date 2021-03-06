import { dadosSala } from "../js/dadosSala.js";
import { validaCampos } from "../js/validaCampos.js";


dadosSala.temCor()
  .then(temCor => {
    const dadoJogador = temCor.coresRestante
    console.log(dadoJogador)
    dadoJogador.forEach(function (cor) {
      criaAside(cor.identificador)
      // criarLabelCor(cor.identificador)
    });
  })



function criaAside(cor) {
  const aside = document.createElement("aside")
  aside.className = "icon"

  const input = criaInputCor(cor)
  const label = criarLabelCor(cor)


  aside.appendChild(label)
  aside.appendChild(input)

  const bloco = document.querySelector("[jogador-player]")

  bloco.appendChild(aside)

  return aside
}



function criaInputCor(cor) {
  const input = document.createElement("input")
  input.type = "radio"
  input.value = cor
  input.name = "cores"
  input.id = cor

  return input
}



function criarLabelCor(cor) {
  const svg = document.createElement("IMG")
  svg.src = `../img/avatar/${cor}.svg`
  svg.classList.add("icone")

  // ` <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
  // class="bi bi-person" viewBox="0 0 16 16">
  // <path
  //     d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
  //     fill="${cor}" /></svg>`

  const idImg = document.createElement("label")
  idImg.htmlFor = cor
  idImg.classList.add("img-jogador")
  
  idImg.appendChild(svg)


  return idImg
}




const btnCria = document.querySelector("[jogador]")

btnCria.addEventListener("submit", (event) => {
  event.preventDefault()

  const namePlayer = document.querySelector("#nickNome").value
  const identificador = validaCampos.validaIdentificador()

  dadosSala.criarJogadorPlayer(identificador, namePlayer)
    .then(id => {
      console.log(id)
      localStorage.setItem("idPlayer", id.idPlayer)
      if (identificador != false) {

        if (localStorage.getItem("flag") == null) {
          localStorage.setItem("flag", 0)
        }
        const MensagemErro = document.querySelector("[qual-erro]")
        MensagemErro.textContent = id.erro
        MensagemErro.style.display = "block"
        console.log(id.erro)
        return
        window.location.href = '../jogo/game.html'


      }

    })

})




