import { linkSala } from "../js/linkSala.js"

// pega valor

var input = document.querySelector('#valor-inicial');
input.addEventListener('input', function() {
  console.log( this.value);
})
var input = document.querySelector('#nick-nome');
input.addEventListener('input', function() {
  console.log( this.value);
})

// confere  valor

// coloca link da sala 
linkSala.sala()
    .then(sala => {
        sala.keyRoom
        let link = document.querySelector('#pwd_spn')
        link.textContent = sala.keyRoom
    })


// copy link para sala 
document.getElementById("cp_btn").addEventListener("click", copy_password);

function copy_password() {
    var copyText = document.getElementById("pwd_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

// pega nome

// valida nome

// confere identificador 