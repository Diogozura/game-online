const validaToken = () => {
    const tokenUSer = document.querySelector("#link").value
    if (tokenUSer.length == 10) {
        return true
    } else {
        console.log("não aprovado")
    }

}


const validaValor = () => {
    const valor = document.querySelector("#valor").value
    
    if (valor <= 0) {
        const erroValor = document.querySelector("[erro-valor]")
        erroValor.className = "hide"
        console.log("valor inválido")
    }

}
const validaNome = () => {
    const nome = document.querySelector("#nickNome").value
    if (nome <= 0) {
        const erroValor = document.querySelector("[erro-nome]")
        erroValor.className = "hide"
        console.log("valor inválido")
    }
}
const escolhido = () => {
    let res = '';
    const items = document.getElementsByName('cores');
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            res = items[i].value
            break;
        }
    }
    return res;
}
const validaIdentificador = () => {
    const res = escolhido();
    if (res === '') {
        const erroValor = document.querySelector("[erro-identificador]")
        erroValor.className = "hide"
        console.log("valor inválido")
        return false;
    }
    console.log('O item selecionado foi ' + res);
    return true;
}

const erroValor = document.querySelector("[erro-valor]")
const erroNome = document.querySelector("[erro-nome]")
const erroIdentificador = document.querySelector("[erro-id]")


export const validaCampos = {
    validaToken, validaValor, validaNome, validaIdentificador,escolhido
}