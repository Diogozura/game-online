const validaToken = () => {
    const tokenUSer = document.querySelector("#link").value
    if (tokenUSer.length == 10) {
        return true
    } else {
        console.log("não aprovado")
    }

}


  const erros = []  



const validaValor = () => {
    const valor = document.querySelector("#valor").value
    if (valor <= 0) {
      erros.push
    }
}
const validaNome = () => {
    const nome = document.querySelector("#nickNome").value
    if (nome <= 0) {
        erros.push
    }
}
const escolhido=()=> {
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
        erros.push
      return false;
    }
    console.log('O item selecionado foi ' + res);
    return true;
}




export const validaCampos = {
    validaToken, validaValor, validaNome, validaIdentificador, erros
}