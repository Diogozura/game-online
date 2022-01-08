// nome do jogador
const nome = document.querySelector("#nickNome")
const botão = document.querySelector('[criar-jogador]')
const tokenUser = document.querySelector('[url-player]')

botão.addEventListener("click", function (event) {
  event.preventDefault()
  console.log(tokenUser.value)
  console.log(nome.value)
  console.log(escolhido())
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