// export const copy = () => {
//     document.getElementById("cp_btn").addEventListener("click", copy_password);
// function copy_password(event) {
//   event.preventDefault()

//   var copyText = document.getElementById("myInput");

//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */

//    /* Copy the text inside the text field */
//   navigator.clipboard.writeText(copyText.value);
// }
// }
const copiar = document.querySelector("[copia]")
copiar.addEventListener("click", copia)

function copia() {
  console.log("clicou")
  /* Get the text field */
  var copyText = document.getElementById("token");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}
const pooper = document.querySelector("[pooper]")
pooper.addEventListener("click", outFunc)
function outFunc() {
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "copiado";
}

export { copia }
