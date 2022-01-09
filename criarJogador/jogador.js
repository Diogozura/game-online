import { criePlayer } from '../js/criePlayer.js' 

const jogador = document.querySelector('[jogador-player]')

jogador.addEventListener("submit", (evento)=> {
  evento.preventDefault()

  const identificador = escolhido()
  const namePlayer = evento.target.querySelector('#nickNome').value
        
  criePlayer.criarJogador(namePlayer, identificador)
    .then(() => {
      console.log(namePlayer, identificador)
      window.location.href = '../jogo/game.html'
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