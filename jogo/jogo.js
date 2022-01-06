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
const id = document.querySelector("#cor")
const nome = document.querySelector("#nome")
const saldo = document.querySelector("#saldo")

dadosSala.dados()
    .then(dados => {
        const dadoJogador = dados.players
        console.log(dadoJogador)
       
        dadoJogador.forEach(function (dado) {
            addNaTela(dado)
        })
        
        
        
        
    })
// dadosSala.dados()
//     .then(dados => {
//         const dadoJogador = dados.players
//         dadoJogador.forEach(element => {
//             console.log(element.identificador, element.namePlayer, element.saldo)

//             id.textContent = element.identificador;
//             nome.textContent = element.namePlayer;
//             saldo.textContent = "R$" + " " + element.saldo
//         });
        
//         const str = JSON.stringify(dados.players)
//         console.log(str)
        
//     })