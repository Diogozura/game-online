import { linkSala } from "../js/linkSala.js"


// pega valor


function valorIncial() {

  const valor = document.querySelector('#valor-inicial');
  const valorDoJogo = valor.value

  return valorDoJogo
}

function nome() {
    
  const nick = document.querySelector('#nick-nome');
  const nickNome = nick.value

  return nickNome
}
// confere  valor

// coloca link da sala 
linkSala.sala()
    .then(sala => {
        sala.keyRoom
        let link = document.querySelector('#pwd_spn')
      link.textContent = sala.keyRoom
      return link
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

// confere identificador

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
  // const iniciarGame = document.querySelector("#iniciar")
  // iniciarGame.addEventListener("click", function() {
  //   const res = escolhido();
  //   if (res === '') {
  //     alert('nenhum item foi selecionado');
  //     return false;
  //   }
  //   return true;
 // })

document.querySelector("#iniciar").addEventListener("click", enviar);

function enviar(jogador) {
  const dados = []
  const id = escolhido();
  dados.push(id)
  const nick = nome();
  dados.push(nick)
  const valor = valorIncial();
  dados.push(valor)

  let erros = validaJogador() 
  if (erros.length > 0) {
    mensagemErro()
    return
  }

  iniciarGame()
  console.log(`valor inical ${valor}, nome do player ${nick}, e o identificador ${id}`)
  console.log(dados)
  }

function validaJogador(jogador) {
  let erros = []
  if (jogador.nome.length == 0) erros.push("O jogador precisa de um nome");
  if (jogador.nome.length == 0) erros.push("O jogador precisa de um nome");
  if (jogador.nome.length == 0) erros.push("O jogador precisa de um nome");
  
}

function exibeMensagemDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro")

  ul.innerHTML = ""


  erros.forEach(function (erro) {
      var li = document.createElement("li")
      li.textContent = erro
      ul.appendChild(li)
  })
}




function mensagemErro() {
  alert("você precisa completar todos os campos")
}
// post para sala 
// valor 
// nome
// identificador
// chave
//https://ffgames134.herokuapp.com/



//     const iniciarGame = document.querySelector("#iniciar")
//     iniciarGame.addEventListener("click", function() {
//       const id = escolhido();
//       // const nick = nick();
    
//     if (id === '') {
//       alert('nenhum item foi selecionado');
//       return false;
//     }
//     console.log('O item selecionado foi ' + id + nick);
//     return true;
// })
    
  
//  validar identificador 
