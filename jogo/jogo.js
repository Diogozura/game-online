import { dadosSala } from "../js/dadosSala.js"


function addNaTela(jogador) {
    const dadosJogador = document.querySelector("#lista")
    const jogadorAside = montaCampo(jogador)
    dadosJogador.appendChild(jogadorAside)

    return dadosJogador
}

function montaCampo(jogador) {
    const asideJogador = document.createElement("aside")
    asideJogador.classList.add("jogador")

    asideJogador.appendChild(montaImg())
    asideJogador.appendChild(montaNome(jogador.namePlayer))
    asideJogador.appendChild(montaValor(jogador.saldo))


    return asideJogador
}
function montaImg(dado) {
    const idImg = document.createElement("img")
    idImg.classList.add("img-jogador")
    idImg.textContent = dado

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

const tokenDoLocal = window.localStorage.getItem('token')
console.log(tokenDoLocal)

const ondeMostrar = document.querySelector("#url-sala")

ondeMostrar.textContent = tokenDoLocal