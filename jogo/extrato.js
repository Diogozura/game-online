import { dadosSala } from "../js/dadosSala.js";

function botaExtra(dado) {
    const extrato = document.querySelector("[extrato]")
    const tr = criaTr(dado)
    // console.log(dado.descricao)
    extrato.appendChild(tr)
    
    return extrato
}
function criaTr(dado){
    const criarTr = document.createElement("tr")

    criarTr.appendChild(criaTdNome(dado.descricao))
   

    return criarTr
}
function criaTdNome(dado){
    const criaTd = document.createElement("td")
    criaTd.textContent = dado

    return criaTd
}
function criaTdValor() {
    const criaTd = document.createElement("td")
    criaTd.textContent = "R$" + 50

    return criaTd
}




dadosSala.extrato()
    .then(dados => {
        const dadoJogador = dados.extrato
        // console.log(dadoJogador)
        dadoJogador.forEach(function (dado) {
            botaExtra(dado)
            
        })
        
    })
