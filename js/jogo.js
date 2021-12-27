
function dadosJogador() {
   

    const sessaojogador = document.createElement("aside")
    const idImg = document.createElement("img")
    
    const nickH3 = document.createElement("h3")
    const ValorP = document.createElement("p")

    idImg.textContent = dados.img;
    nickH3.textContent = dados.nick;
    ValorP.textContent = `R$ ${dados.valor}`;

    sessaojogador.appendChild(idImg);
    sessaojogador.appendChild(nickH3);
    sessaojogador.appendChild(ValorP);

    

    const section = document.querySelector("#lista")

    section.appendChild(sessaojogador)
 


}
window.onload = dadosJogador


var dados = {
    img: "roxo",
    nick: "diogo",
    valor: 400,
    

}
// {
//     img: "roxo",
//     nick: "diogo",
//     valor: 400

// },
// {
//     img: "roxo",
//     nick: "Diogo",
//     valor: 300,

// },
// {
//     img: "roxo",
//     nick: "Diogo",
//     valor: 300,

// }


// dados.forEach(function () {
//     dadosJogador()
// });