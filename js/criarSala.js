import { linkSala } from "../js/linkSala.js"

// pega valor
function valor() {
    const valorInserido = document.querySelector("#valor-inicial").value
   
    console.log(valorInserido)
    return valor()
}
// confere  valor

// coloca link da sala 
linkSala.sala()
    .then(sala => {
        console.log(sala.keyRoom)
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