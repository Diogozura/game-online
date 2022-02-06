import { dadosSala } from "../js/dadosSala.js"


function addNaTela(jogador) {
    const dadosJogador = document.querySelector("[lista-jogadores]")
    const jogadorAside = montaCampo(jogador)
    dadosJogador.appendChild(jogadorAside)

    return dadosJogador
}

function montaCampo(jogador) {
    const asideJogador = document.createElement("aside")
    asideJogador.classList.add("jogador")
    asideJogador.id = jogador.idPlayer

    asideJogador.appendChild(montaImg(jogador.identificadorHexadecimal))
    asideJogador.appendChild(montaNome(jogador.namePlayer))
    asideJogador.appendChild(montaValor(jogador.saldo))
    const playerBank = jogador.playerBank
    localStorage.setItem("playBank", playerBank)
    const idPlayer = jogador.idPlayer
    localStorage.setItem("idPlayer", idPlayer)

    return asideJogador
}
function montaImg(dado) {
    const svg = ` <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
    class="bi bi-person" viewBox="0 0 16 16">
    <path
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
        fill="${dado}" /></svg>`
    const idImg = document.createElement("svg")
    idImg.classList.add("img-jogador")
    idImg.innerHTML = svg

    return idImg
}
function montaNome(dado) {
    const nickH3 = document.createElement("h3")
    nickH3.classList.add("nome-jogador")
    nickH3.textContent = dado

    return nickH3
}
function montaValor(dado) {
    const ValorP = document.createElement("p")
    ValorP.classList.add("valor-jogador")
    ValorP.textContent = 'R$' + dado;

    return ValorP
}



dadosSala.dados()
    .then(dados => {
        const dadoJogador = dados.players
        console.log(dadoJogador)
        dadoJogador.forEach(function (dado) {
            addNaTela(dado)
            
        })
        
    })

    
//  codigo token

const tokenDoLocal = localStorage.getItem("token")
console.log(tokenDoLocal)

const ondeMostrar = document.querySelector("#url-sala")

ondeMostrar.textContent = tokenDoLocal

export{montaNome, montaImg}