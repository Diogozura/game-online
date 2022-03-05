import { dadosSala } from "./dadosSala.js"
import { validaCampos } from "./validaCampos.js"

// token valido 

// alert("esse jogo está em fase de teste, caso encontre um erro mande mensagem para os desenvolvedores, link sempre no rodapé da pagina")
// link para criar sala

const criarPlayer = document.querySelector("[iniciar-player]")

criarPlayer.addEventListener("click", function (event) {
    event.preventDefault()
    const token = document.querySelector("[codigo-sala]").value
    const erro = document.getElementById("erro")

    const idTem = localStorage.getItem("idPlayer")
    localStorage.setItem("token", token)

    const dados = () => {
        return fetch(`https://ffgames134.herokuapp.com/dadosSala/?keyRoom=${token}`)
            .then(resposta => {
                const status = resposta.status
                console.log(status)

                // validando dados direto que vem e aprovando , caso ele tenha as informçãoes de dadosSala, vai ser redirecionado para pagina do game

                if (resposta.status != 200) {
                    erro.style.display = "block"
                }
                else {
                    console.log("Passou")

                    // externo 
                    window.location.href = '../game-online/criarJogador/jogador.html'

                    // local 
                    // window.location.href = '../criarJogador/jogador.html'



                    // return true
                }
                // caso ele não tenha o id , vou ter certeza que ele ainda não registrou um criarPlayer
                if (resposta.status == 200 && idTem != null) {
                    console.log("você não passou")
                    // externo 
                    window.location.href = '../game-online/jogo/game.html'

                    // local
                    // window.location.href = '../jogo/game.html'

                }
                return resposta.json()

            })

    }



    console.log("clicou home")

    dados()



})





