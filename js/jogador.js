// nome do jogador
const nome = document.querySelector("#nickNome")

nome.addEventListener("input", function () {
    console.log(this.value)
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
  
  function verificar() {
    
  }

// iniciar gamer
const iniciarGame = document.querySelector("#iniciar")
iniciarGame.addEventListener("click", function() {
    const res = escolhido();
    if (res === '') {
      alert('nenhum item foi selecionado');
      return false;
    }
    console.log('O item selecionado foi ' + res);
    return true;
})