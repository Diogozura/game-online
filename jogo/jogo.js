import { dadosSala } from "../js/dadosSala.js"
import { flag, playerBank } from "./banco.js"
import { sair } from "./sair.js"

playerBank()

sair()

function addNaTela(jogador) {
    const dadosJogador = document.querySelector("[lista-jogadores]")
    const sair = document.querySelector(".btn-sair")
    const jogadorAside = montaCampo(jogador)

    dadosJogador.appendChild(jogadorAside)

   sair.appendChild(montaBtnSair()) 


    return dadosJogador
}


function montaCampo(jogador) {
    const article = document.createElement("article")

    const asideNomeIcone = document.createElement("aside")
    asideNomeIcone.className = "nome-icone"
    const icon = montaImg(jogador.identificador, jogador.playerBank)
    
    asideNomeIcone.appendChild(icon)
    asideNomeIcone.appendChild(montaNome(jogador.namePlayer))
    localStorage.setItem("flag" , jogador.playerBank)
    const asideJogador = document.createElement("aside")
    asideJogador.className = "players"
    asideJogador.appendChild(montaValor(jogador.saldo))

    article.appendChild(asideNomeIcone)
    article.appendChild(asideJogador)
    


    // asideJogador.appendChild(montaBtn())
    const id = asideJogador.id = jogador.idPlayer

    if (localStorage.getItem("idPlayer") == id) {
        article.style.display = "none"
    }
    return article

}

 function montaImg(dado, flag) {
    // const svg = ` <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
    // class="bi bi-person" viewBox="0 0 16 16">
    // <path
    //     d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
    //     fill="${dado}" /></svg>`
    // const idImg = document.createElement("svg")
    // idImg.src =  `../img/avatar/${dado}.svg`
    // // idImg.classList.add("img-jogador")
    // idImg


    const svg = document.createElement("IMG")
    svg.src = `../img/avatar/${dado}.svg`
     svg.classList.add("icone")

     if (flag == 1) {
        const svg = document.createElement("IMG")
        svg.src = `../img/avatarBanco/B${dado}.svg`
         svg.classList.add("icone")
     }
     

    return svg
}
function montaNome(dado) {
    const nickH3 = document.createElement("h3")
    nickH3.classList.add("jogador-nome")
    nickH3.textContent = dado

    return nickH3
}


function montaValor(dado) {
    const ValorP = document.createElement("p")
    ValorP.classList.add("valor-jogador")
    ValorP.textContent =  dado;

    return ValorP
}
function montaBtnSair() {
    const botao = document.querySelector("[btn-sair]")
    botao.type = "button"
    // botao.className = "btn-inicia"

    if (flag == 1) {
        botao.setAttribute('data-bs-toggle', 'modal')
    botao.setAttribute('data-bs-target', '#sair')
    }
    
    // botao.setAttribute('#data-target', '#modalExemplo')
    // botao.dataset.toggle = "modal"
    // botao.dataset.target = "#sair"
    
    // botao.getAttribute('data-bs-target')

    

    // botao.innerText = "botão sair";

    return botao
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
// console.log(tokenDoLocal)

const ondeMostrar = document.querySelector("[token]")


ondeMostrar.value = tokenDoLocal

// flag bank 
// const ativa = document.querySelector("[ativa]")
// ativa.addEventListener("click",() => {
//     // console.log("fui ativado")
//     if(ativa.checked) {
//         const main = document.querySelector("main")
//         main.classList = "banco"
//     } else {
//         const main = document.querySelector("main")
//         main.classList = "off"
//     }
// })



export { montaNome, montaImg, montaValor }