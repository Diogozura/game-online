

























const transeferir = document.querySelector('[trasferir]')
transeferir.addEventListener("submit", (event) => {
  event.preventDefault()
  const valor = event.target.querySelector("[valor]").value


  alert("ainnnn me clicou seu safado" + valor)

  document.getElementById("myForm").style.display = "none";

})

const btnTransfe = document.querySelectorAll("[btn-transfere]")

//   .addEventListener("click", (event) => {
//     event.preventDefault()
//     openForm()
//     console.log("sai de mim desgraça")
// })

for (i = 0; i < btnTransfe.length; i++) {
  btnTransfe[i].addEventListener("click", () => {
    openForm()
   tela()
  })
}




function tela() {
  console.log(btnTransfe)
  var btn = document.querySelector("[btn-transfere]");
  var h3 = btn.parentElement;
  console.log(h3)
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
  
}

const fechaForm = document.querySelector("[close]")
fechaForm.addEventListener("click", (event) => {
  event.preventDefault()
  document.getElementById("myForm").style.display = "none";
})

