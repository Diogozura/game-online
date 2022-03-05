import { dadosSala } from "./dadosSala.js"

const validaToken = () => {
    // const tokenUSer = document.querySelector("#link").value
    dadosSala.dados()
        .then(dados => {
            console.log()

            if (dados.erro === "chave invalida") {
                const erroValor = document.querySelector("[erro-token]")
                erroValor.className = "hide"
                console.log("valor inválido")
                return false
            } else {
                const erroValor = document.querySelector("[erro-token]")
                erroValor.style.display = "none"
                // console.log("aiaiai")
                return true
            }
    })
    // .then(dados => {
    //     // console.log(dados)
    //     if (dados.erro != "Sala nao encontrada" && dados.erro != "chave invalida") {
    //        console.log("deu bom"


  

}


// const validaValor = () => {
//     const valor = document.querySelector("#valor").value
    
//     if (!valor >= 1) {
//         const erroValor = document.querySelector("[erro-valor]")
//         erroValor.className = "hide"
//         console.log("valor inválido")
//         return false
//     } else {
//         return valor
//     }

// }
// const validaNome = () => {
//     const nome = document.querySelector("#nickNome").value
//     if (nome <= 0) {
//         const erroValor = document.querySelector("[erro-nome]")
//         erroValor.className = "hide"
//         console.log("nome inválido")
//         return false
//     } else {
//         return nome
//     }
   
// }
const escolhido = () => {
    let res = '';
    const items = document.getElementsByName('cores');
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            res = items[i].value
            break;
        }
    }
    console.log(res)
    return res;
}
const validaIdentificador = () => {
    const res = escolhido();
    if (res === '') {
        const erroValor = document.querySelector("[erro-identificador]")
        erroValor.style.display = "block"
        // alert("escolha um icone")
        return false
    } else {
        console.log('O item selecionado foi ' + res);
        return res;
    }
   
}



export const validaCampos = {
    validaToken, validaIdentificador, escolhido
}