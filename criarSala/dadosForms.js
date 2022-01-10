import { dadosSala } from "../js/dadosSala.js"
import { linkSala } from "../js/linkSala.js"
import { validaCampos } from "../js/validaCampos.js"
import { copy } from "../js/copy.js"
 
const formulario = document.querySelector('[form-dados]')

linkSala.sala()
  .then(sala => {
    const tokenSala = sala.keyRoom
    const link = document.querySelector('#pwd_spn')
    link.textContent = tokenSala
    localStorage.setItem("token", tokenSala)
    return link
  })

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

  
  validaCampos.validaNome()
  validaCampos.validaValor()
  validaCampos.validaIdentificador()
    const keyRoom = evento.target.querySelector('#pwd_spn').innerText
    const valorInicial= evento.target.querySelector('[data-valor]').value
    const identificador = validaCampos.escolhido()
    const namePlayer = evento.target.querySelector('#nickNome').value
    dadosSala.criarSala(keyRoom, valorInicial, identificador, namePlayer)
      .then(() => {
        console.log(keyRoom, valorInicial, identificador, namePlayer)
          // window.location.href = '../jogo/game.html'
  
        // 
    })
}) 

copy()
const tokenDoLocal = localStorage.getItem("token")
console.log(tokenDoLocal)

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