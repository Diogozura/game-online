const dados = () => {
    return fetch("https://ffgames134.herokuapp.com/dadosSala/?keyRoom=G0cjVXJ5bIq4yNELM98F")
        .then(resposta => {
            return resposta.json()
        })
      

}

export const dadosSala = {
    dados
}