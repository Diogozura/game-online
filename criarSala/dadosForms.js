import { dadosSala } from "../js/dadosSala.js"
import { linkSala } from "../js/linkSala.js"
import { validaCampos } from "../js/validaCampos.js"
// import { copia } from "../js/copy.js"

// dados sala para dar um set no localStorage 


linkSala.sala()
  .then(sala => {
    const tokenSala = sala.keyRoom
    localStorage.setItem("token", tokenSala)
    const link = document.querySelector('[token]')
    link.value = tokenSala
    link.placeholder = tokenSala

    console.log(localStorage.getItem("token"))

    return link
  })


const formulario = document.querySelector('[form-dados]')
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault()


  const keyRoom = localStorage.getItem("token")
  console.log(keyRoom)
  const valorInicial = validaCampos.validaValor()
  const identificador = validaCampos.validaIdentificador()
  const namePlayer = validaCampos.validaNome()

  dadosSala.criarSala(keyRoom, valorInicial, identificador, namePlayer)
   
      .then(id => {
       console.log(id.idPlayer) 
        console.log(keyRoom, valorInicial, identificador, namePlayer)
        if (!valorInicial, !identificador, !namePlayer == false) {
          localStorage.setItem("idPlayer", id.idPlayer)
          localStorage.setItem("flag", 1)
          return window.location.href = '../jogo/game.html'

        } // 
      })
    
})

