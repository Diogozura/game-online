import { linkSala } from "../js/linkSala.js"


// pega valor

var valor = document.querySelector('#valor-inicial');
valor.addEventListener('input', function() {
  
  const valorDoJogo = this.value
  console.log(valorDoJogo); 
  if (valorDoJogo.length <=3) {
    valor.classList.add("color2")
  } else {
    valor.classList.remove("color2")
  }
})


// confere  valor

// coloca link da sala 
linkSala.sala()
    .then(sala => {
        sala.keyRoom
        let link = document.querySelector('#pwd_spn')
        link.textContent = sala.keyRoom
    })


// copy link para sala 
document.getElementById("cp_btn").addEventListener("click", copy_password);

function copy_password() {
    var copyText = document.getElementById("pwd_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

// pega nome
var nome = document.querySelector('#nick-nome');
nome.addEventListener('input', function () {
  const nick = this.value
  console.log(nick);
  if (nick.length <=2 ) {
    nome.classList.add("color2")
  } else {
    nome.classList.remove("color2")
  }
})
// valida nome

// confere identificador

const dadoSala = ['oi']
dadoSala.unshift ()


  console.log(dadoSala)

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