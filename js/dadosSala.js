const token = localStorage.getItem('token')
const url = "https://ffgames134.herokuapp.com/"
// dados da sala
const dados = () => {
    return fetch(`${url}dadosSala/?keyRoom=${token}`)
        .then(resposta => {
            return resposta.json()
        })
}

const temCor = () => {
    return fetch(`${url}api/coresRestantes?keyroom=${token}`)
        .then(resposta => {
            return resposta.json()
        })
}

// criando sala 
const criarSala = (keyRoom, valorInicial, identificador, namePlayer) => {
    return fetch(`${url}SaveRoomPlayer/`, {
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
    return fetch(`${url}api/coresRestantes?keyroom=${token}`, {
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

// const trasfereJogador = (identificador, namePlayer, idPlayer) => {
//     return fetch(`${url}`)
// }

// trasfere 
const trafereDinheiroParaOsAmigos = () => {
    return fetch(`${url}api/transferencia`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            flagPlayerBank,
            dPlayerDe,
            idPlayerPara,
            valor,
            keyRoom,
        })
            .then(resposta => {
            return resposta.body
        })
})
}


export const dadosSala = {
    dados, criarSala,temCor, criarJogadorPlayer, trafereDinheiroParaOsAmigos
}
