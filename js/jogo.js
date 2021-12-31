import { dadosSala } from "./dadosSala.js"

const dadosJogador = document.querySelector("#lista")
function addNaTela(jogador) {

    const jogadorAside = montaCampo(jogador)
    dadosJogador.appendChild(jogadorAside)

    return dadosJogador
}

function montaCampo() {
    const asideJogador = document.createElement("aside")
    asideJogador.classList.add("jogador")

    asideJogador.appendChild(montaImg())
    asideJogador.appendChild(montaNome())
    asideJogador.appendChild(montaValor())


    return asideJogador
}
function montaImg() {
    const idImg = document.createElement("img")
    idImg.classList.add("img-jogador")
    idImg.textContent = dados.img

    return idImg
}
function montaNome() {
    const nickH3 = document.createElement("h3")
    nickH3.classList.add("nome-jogador")
    nickH3.textContent = dados.nick

    return nickH3
}
function montaValor() {
    const ValorP = document.createElement("p")
    ValorP.classList.add("valor-jogador")

    ValorP.textContent = 'R$' + '10';

    return ValorP
}

dadosSala.dados()
    .then(dados => {
        var nome = dados.players 
        console.log(typeof nome)
        
    })