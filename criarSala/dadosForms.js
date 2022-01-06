import { dadosSala } from "../js/dadosSala.js"
import { linkSala } from "../js/linkSala.js"
 
const formulario = document.querySelector('[form-dados]')
linkSala.sala()
  .then(sala => {
    const tokenSala = sala.keyRoom
    const link = document.querySelector('#pwd_spn')
    link.textContent = tokenSala
    localStorage.setItem("token", JSON.stringify(tokenSala))
    return link
  })

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const token = evento.target.querySelector('#pwd_spn').innerText
    const valor= evento.target.querySelector('[data-valor]').value
    const id = evento.target.querySelector('[data-identificador]').value
    const nome = evento.target.querySelector('[data-nome]').value

    dadosSala.criarSala(token, valor, id, nome)
        .then(() => {
        window.location.href = '../jogo/game.html'
    })
}) 

