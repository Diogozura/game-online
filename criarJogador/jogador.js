import { dadosSala } from "../js/dadosSala.js";

const btnCria = document.querySelector("[jogador-player]")

btnCria.addEventListener("submit", (event) => {
  event.preventDefault()

  const namePlayer = event.target.querySelector("#nickNome").value
  const identificador = escolhido()
  dadosSala.criarJogadorPlayer(identificador, namePlayer)
    .then(() => {
      console.log(identificador, namePlayer)
      window.location.href = '../jogo/game.html'
      console.log("tudo certo")
  })

})


// escolher 
function escolhido() {
  var res = '';
  const items = document.getElementsByName('cores');
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      res = items[i].value
      break;
    }
  }
  return res;
}


// iniciar gamer
// const iniciarGame = document.querySelector("#iniciar")
// iniciarGame.addEventListener("click", function() {
//     const res = escolhido();
//     if (res === '') {
//       alert('nenhum item foi selecionado');
//       return false;
//     }
//     console.log('O item selecionado foi ' + res);
//     return true;
// })