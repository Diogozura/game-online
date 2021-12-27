
// function dadosJogador() {
   

    
//     const idImg = document.createElement("img")
    
//     const nickH3 = document.createElement("h3")
//     const ValorP = document.createElement("p")

//     idImg.textContent = dados.img;
//     nickH3.textContent = dados.nick;
//     ValorP.textContent = `R$ ${dados.valor}`;

//     sessaojogador.appendChild(idImg);
//     sessaojogador.appendChild(nickH3);
//     sessaojogador.appendChild(ValorP);

    

//     const section = document.querySelector("#lista")

//     section.appendChild(sessaojogador)
 


// }



function addNaTela(jogador) {
    const dadosJogador = document.querySelector("#lista")
    const jogadorAside = montaCampo(jogador)
    dadosJogador.appendChild(jogadorAside)

   return dadosJogador
}

function montaCampo() {
    const asideJogador = document.createElement("aside")
    asideJogador.classList.add("jogador")

    asideJogador.appendChild(montaImg())
    asideJogador.appendChild(montaNome())
    asideJogador.appendChild(montaValor())
    

    return asideJogador
}
function montaImg() {
    const idImg = document.createElement("img")
    idImg.classList.add("img-jogador")
    idImg.textContent = dados.img

    return idImg
}
function montaNome() {
    const nickH3 = document.createElement("h3")
    nickH3.classList.add("nome-jogador")
    nickH3.textContent = dados.nick

    return nickH3
}
function montaValor() {
    const ValorP = document.createElement("p")
    ValorP.classList.add("valor-jogador")

    ValorP.textContent = 'R$' +  '10';

    return ValorP
}





var dados = [{
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

}]


dados.forEach(function () {
    addNaTela()
});

window.onload = addNaTela