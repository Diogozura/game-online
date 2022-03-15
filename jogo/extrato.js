import { dadosSala } from "../js/dadosSala.js";

const idPlayer = localStorage.getItem("idPlayer")

function botaExtra(dado) {
    const extrato = document.querySelector("[extrato]")
    const tr = criaTr(dado)
    // console.log(dado.descricao)
    extrato.appendChild(tr)
    
    return extrato
}
function criaTr(dado){
    const Tr = document.createElement("tr")

    Tr.appendChild(criaTdDescrcao(dado.descricao))

    if (dado.idPlayerDe == idPlayer) {
        Tr.style.backgroundColor = "rgb(255 195 195 / 75%)"
    }
    if (dado.idPlayerPara == idPlayer) {
        Tr.style.backgroundColor = "#c3ffc3bf"
    }
  
    return Tr
}
function criaTdDescrcao(dado){
    const criaTd = document.createElement("td")
    criaTd.textContent = dado
    

    return criaTd
}
// function criaTdValor() {
//     const criaTd = document.createElement("td")
//     criaTd.textContent = "R$" + 50

//     return criaTd
// }




dadosSala.extrato()
    .then(dados => {
        const dadoJogador = dados.extrato
        // console.log(dadoJogador)
        dadoJogador.forEach(function (dado) {
            botaExtra(dado)
            
        })
        
    })
