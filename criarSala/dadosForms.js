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

  console.log("clicou")
  const keyRoom = localStorage.getItem("token")
  // console.log(keyRoom)

  const valorInicial = document.querySelector("#valor").value
  const identificador = validaCampos.validaIdentificador()
  const namePlayer = document.querySelector("#nickNome").value

  dadosSala.criarSala(keyRoom, valorInicial, identificador, namePlayer)
   
    .then(id => {
      // console.log(id)

      console.log(valorInicial, identificador, namePlayer)
    
      if (identificador != false) {
          
          localStorage.setItem("idPlayer", id.idPlayer)
          localStorage.setItem("flag", 1)
          
        return window.location.href = '../game.html'
      } 
   
      })
    
})

