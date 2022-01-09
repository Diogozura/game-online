import { dadosSala } from "../js/dadosSala.js"
import { linkSala } from "../js/linkSala.js"
 
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

    const keyRoom = evento.target.querySelector('#pwd_spn').innerText
    const valorInicial= evento.target.querySelector('[data-valor]').value
    const identificador = escolhido()
    const namePlayer = evento.target.querySelector('#nome').value
    dadosSala.criarSala(keyRoom, valorInicial, identificador, namePlayer)
      .then(() => {
        console.log(keyRoom, valorInicial, identificador, namePlayer)
          window.location.href = '../jogo/game.html'
  
        // 
    })
}) 

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