
function dadosJogador() {

    var dados = {
        img: "roxo",
        nick: "Diogo",
        valor: 300,
        
    }



  


    const sessaojogador = document.createElement("aside")
    const idImg = document.createElement("img")
    const nickH3 = document.createElement("h3")
    const ValorP = document.createElement("p")
    
    idImg.textContent = dados.img
    nickH3.textContent = dados.nick
    ValorP.textContent = dados.valor


    sessaojogador.appendChild(idImg)
    sessaojogador.appendChild(nickH3)
    sessaojogador.appendChild(ValorP)


    const section = document.querySelector("#lista")
    
    section.appendChild(sessaojogador)


}
window.onload = dadosJogador