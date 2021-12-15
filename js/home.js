// link para criar sala 
const criarSala = document.querySelector("#criar-sala")

criarSala.addEventListener("click", function () {
    console.log("nhaa")

    location.href= "../donoDaSala.html"
})

// link para criar player

const player = document.querySelector("#entrar-sala")

player.addEventListener("click", function () {
    location.href= "game-online/jogador.html"
})

// monitorar o que tem dentro do campo 
const link = document.querySelector("#link")

link.addEventListener("input", function () {
    console.log(this.value)
})