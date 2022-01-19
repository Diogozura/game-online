const tranferir = document.querySelector("[trasferir]")

tranferir.addEventListener("submit", (event) => {
  event.preventDefault()
  validaValor()
})


const validaValor = () => {
  const valor = document.querySelector("[valor]").value

  if (!valor >= 1) {
      const erroValor = document.querySelector("[erro-valor]")
      erroValor.className = "hide"
      console.log("valor inválido")
      return false
  } else {
      return valor
  }

}