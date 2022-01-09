const token = localStorage.getItem('token')

// dados da sala
const dados = () => {
    return fetch(`https://ffgames134.herokuapp.com/dadosSala/?keyRoom=${token}`)
        .then(resposta => {
            return resposta.json()
        })
}


// criando sala 
const criarSala = (keyRoom, valorInicial, identificador, namePlayer) => {
    return fetch(`https://ffgames134.herokuapp.com/SaveRoomPlayer/`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            keyRoom: keyRoom,
            valorInicial: valorInicial,
            identificador: identificador,
            namePlayer: namePlayer
        })
    })
        .then(resposta => {
            return resposta.body
        })

}

// colocando player na sala


const criarJogadorPlayer = (identificador, namePlayer) => {
    return fetch(`https://ffgames134.herokuapp.com/createPlayer/?keyRoom=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identificador:identificador,
            namePlayer:namePlayer
        })
    })
        .then(resposta => {
        return resposta.body
    })
}



export const dadosSala = {
    dados, criarSala, criarJogadorPlayer
}
