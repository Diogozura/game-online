const transeferir = document.querySelector('[trasferir]')
transeferir.addEventListener("submit", (event) => {
    const praQuem = event.target.querySelector("[quem]").value
    const valor = event.target.querySelector("[valor]").value


    alert("ainnnn me clicou seu safado" + valor + praQuem)
})

const btnTransfe = document.querySelector("[btn-transfere]")
btnTransfe.addEventListener("click", (event) => {
    event.preventDefault()
    openForm()
    
    console.log("sai de mim desgraça")
})


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }