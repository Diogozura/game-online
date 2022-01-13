const transeferir = document.querySelector('[trasferir]')
transeferir.addEventListener("submit", (event) => {
    const praQuem = event.target.querySelector("[quem]").value
    const valor = event.target.querySelector("[valor]").value


    alert("ainnnn me clicou seu safado" + valor + praQuem)
})

const btnTransfe = document.querySelector("[btn-transfere]")
btnTransfe.addEventListener("click", (event) => {
    event.preventDefault()
    pop()
    console.log("sai de mim desgraça")
})

function pop() {
    const onde = document.querySelector("[aqui]")
    const card = document.createElement("aside")
    onde.appendChild(card)
    card.classList.add("trafere")
    card.textContent = "boa mlk"

    return onde
}