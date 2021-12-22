
function dadosJogador() {


    const sessaojogador = document.createElement("aside")
    const idImg = document.createElement("img")
    const nickH3 = document.createElement("h3")
    const ValorP = document.createElement("p")



    sessaojogador.appendChild(idImg)
    sessaojogador.appendChild(nickH3)
    sessaojogador.appendChild(ValorP)

    idImg.textContent = dado.img
    nickH3.textContent = dado.nick
    ValorP.textContent = dado.valor

    const section = document.querySelector("#lista")

    section.appendChild(sessaojogador)


}
window.onload = dadosJogador


var dado = [{
    img: "roxo",
    nick: "diogo",
    valor: 400

},
{
    img: "roxo",
    nick: "diogo",
    valor: 400

},
{
    img: "roxo",
    nick: "Diogo",
    valor: 300,

},
{
    img: "roxo",
    nick: "Diogo",
    valor: 300,

}
]

dado.forEach(function (jogador) {
    dadosJogador(jogador)

});