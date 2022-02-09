import { dadosSala } from "../js/dadosSala.js"
import { linkSala } from "../js/linkSala.js"
import { validaCampos } from "../js/validaCampos.js"
// import { copia } from "../js/copy.js"

const formulario = document.querySelector('[form-dados]')

linkSala.sala()
  .then(sala => {
    const tokenSala = sala.keyRoom
    const link = document.querySelector('[token]')
    link.value = tokenSala
    link.placeholder = tokenSala
    localStorage.setItem("token", tokenSala)
    return link
  })

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()




  const keyRoom = document.querySelector('[token]').value
  const valorInicial = validaCampos.validaValor()
  const identificador = validaCampos.validaIdentificador()
  const namePlayer = validaCampos.validaNome()

  
    dadosSala.criarSala(keyRoom, valorInicial, identificador, namePlayer)
      .then(() => {

        console.log(keyRoom, valorInicial, identificador, namePlayer)
        if (!valorInicial, !identificador, !namePlayer == false) {
          return  window.location.href = '../jogo/game.html'

        }
        
        // 
      })
  }

)

// copia()
const tokenDoLocal = localStorage.getItem("token")


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