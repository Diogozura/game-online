const criarJogador = (identificador, namePlayer) => {
    return fetch(`https://ffgames134.herokuapp.com/createPlayer?keyRoom=27W6R3ZKXE`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            identificador: identificador,
            namePlayer: namePlayer
        })
    })
        .then(resposta => {
            return resposta.body
        })

}

export const criePlayer = {
    criarJogador
}