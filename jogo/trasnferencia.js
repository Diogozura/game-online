const transeferir = document.querySelector('[trasferir]')
transeferir.addEventListener("submit", (event) => {
    const praQuem = event.target.querySelector("[quem]").value
    const valor = event.target.querySelector("[valor]").value


    alert("ainnnn me clicou seu safado" + valor + praQuem)
})