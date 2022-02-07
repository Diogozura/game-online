import { dadosSala } from "./dadosSala.js"
import { validaCampos } from "./validaCampos.js"

// token valido 


// link para criar sala

const criarPlayer = document.querySelector("[iniciar-player]")

criarPlayer.addEventListener("click",function (event)  {
    event.preventDefault()
    
    // dadosSala.dados()
    // .then(dados => {
    //     // console.log(dados)
    //     if (dados.erro != "Sala nao encontrada" && dados.erro != "chave invalida") {
    //        console.log("deu bom")
           
    //     }
    if (validaCampos.validaToken() == true) {
        const token = document.querySelector("[url-player]").value
        localStorage.setItem("token", token)
        // window.location.href = '../jogo/game.html'
    // externo
    // window.location.href = '../game-online/criarJogador/jogador.html'
    
    // interno
    window.location.href = '../criarJogador/jogador.html'
    // 

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




