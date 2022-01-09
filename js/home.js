// link para criar sala

const criarPlayer = document.querySelector("[iniciar-player]")

criarPlayer.addEventListener("click", (event) => {
    event.preventDefault()

    const tokenUSer = document.querySelector("#link").value
    localStorage.setItem("token", tokenUSer)
    window.location.href = '../game-online/criarJogador/jogador.html'
})

// const criarSala = document.querySelector("#criar-sala")

// criarSala.addEventListener("click", function () {
//     console.log("nhaa")

//     window.location.href = '../criarSala/criarSala.html'
// })

// // link para criar player

// const player = document.querySelector("#entrar-sala")

// player.addEventListener("click", function () {
//     location.assign ("https://diogozura.github.io/game-online/jogador.html")
//     })

// // monitorar o que tem dentro do campo 
// const link = document.querySelector("#link")

// link.addEventListener("input", function () {
//     console.log(this.value)
// })




