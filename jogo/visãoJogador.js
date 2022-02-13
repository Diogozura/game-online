import { dadosSala } from "../js/dadosSala.js"

function jogador(id) {
    const icon = document.querySelector("[icon]")
    console.log(id.namePlayer)
    const name = document.querySelector("#nome")
    name.textContent = id.namePlayer
    const valor = document.querySelector("[valor]")
    valor.textContent = id.saldo
}


const idPlayer = localStorage.getItem("idPlayer")
console.log(idPlayer)

dadosSala.dados(idPlayer)
    .then((id) => {
        const joga = id.players
        joga
        jogador(id)
        
    })
const id = localStorage.getItem("idPlayer")


