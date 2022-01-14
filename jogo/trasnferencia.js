const transeferir = document.querySelector('[trasferir]')
transeferir.addEventListener("submit", (event) => {
    event.preventDefault()
    const valor = event.target.querySelector("[valor]").value
    openForm()

    alert("ainnnn me clicou seu safado" + valor )
})

const btnTransfe = document.querySelector("[btn-transfere]")
btnTransfe.addEventListener("click", (event) => {
    
    openForm()
    
    console.log("sai de mim desgraça")
})


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
const fechaForm = document.querySelector("[close]")  
fechaForm.addEventListener("click", (event) => {
  event.preventDefault()
  document.getElementById("myForm").style.display = "none";
})
