// nome do jogador
const nome = document.querySelector("#nickNome")

nome.addEventListener("input", function () {
    console.log(this.value)
})


// escolher cores
    const cores = ["vermelho",
        "amarelo",
        "verde",
        "roxo"
    ]
cores.vermelho = document.querySelector("#vermelho")
cores.amarelo = document.querySelector("#amarelo")
cores.verde = document.querySelector("#verde")
cores.roxo = document.querySelector("#roxo")

vermelho.addEventListener("click", function() {
    console.log("vermelho")
})
amarelo.addEventListener("click", function() {
    console.log("amarelo")
})
verde.addEventListener("click", function() {
    console.log("verde")
})
roxo.addEventListener("click", function() {
    console.log("roxo")
})

// iniciar gamer
const iniciarGame = document.querySelector("#iniciar")
iniciarGame.addEventListener("click", function() {
    console.log("iniciar game")
})