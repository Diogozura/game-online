import { dadosSala } from "./dadosSala.js"


function addNaTela(jogador) {
    const dadosJogador = document.querySelector("#lista")
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
    idImg.textContent = "bonito "

    return idImg
}
function montaNome() {
    const nickH3 = document.createElement("h3")
    nickH3.classList.add("nome-jogador")
    nickH3.textContent = "cu"

    return nickH3
}
function montaValor() {
    const ValorP = document.createElement("p")
    ValorP.classList.add("valor-jogador")

    ValorP.textContent = 'R$' + '10';

    return ValorP
}
const id = document.querySelector("#cor")
const nome = document.querySelector("#nome")
const saldo = document.querySelector("#saldo")

dadosSala.dados()
    .then(dados => {
        const dadoJogador = dados.players
        dadoJogador.forEach(element => {
            console.log(element.identificador, element.namePlayer, element.saldo)
            id.textContent = element.identificador;
            nome.textContent = element.namePlayer;
            saldo.textContent = "R$" + " " + element.saldo
        });
        
        const str = JSON.stringify(dados.players)
        console.log(str)
        
    })