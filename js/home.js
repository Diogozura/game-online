import { validaCampos } from "./validaCampos.js"
// link para criar sala

const criarPlayer = document.querySelector("[iniciar-player]")

criarPlayer.addEventListener("click", (event) => {
    event.preventDefault()

    if (!validaCampos.validaToken() == false) {
        console.log("aprovado")
        // externo
        window.location.href = '../game-online/criarJogador/jogador.html' 
       
        // interno
        // window.location.href = '../criarJogador/jogador.html'
         
    }
    
})

// const criarSala = document.querySelector("#criar-sala")

// criarSala.addEventListener("click", function () {
//     console.log("nhaa")

//     window.location.href = '../criarSala/criarSala.html'
// })

// // monitorar o que tem dentro do campo 
const link = document.querySelector("#link")
link.addEventListener("input", function () {
    
})




