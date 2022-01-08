
// gerar token


// copiar token
document.getElementById("cp_btn").addEventListener("click", copy_password);
function copy_password(event) {
  event.preventDefault()

  var copyText = document.getElementById("pwd_spn");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}


// validar identificador 

function escolhido() {
  var res = '';
  const items = document.querySelector('.cores');
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      res = items[i].value
      break;
    }
  }
  return res;
}

console.error("espertinho, tá querendo ver oq seu cabra safado... vai procurar oq fazer, olhar o código dos outros é feio 😒");

const tokenDoLocal = localStorage.getItem("token")
console.log(tokenDoLocal)