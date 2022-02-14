const token = localStorage.getItem("token")
const url = "https://ffgames134.herokuapp.com/"
// dados da sala
const dados = () => {
    return fetch(`${url}dadosSala/?keyRoom=${token}`)

        .then(resposta => {
            console.log(resposta.status)
            if (resposta.status != 200) {
                location.reload()
            }
            return resposta.json()
        })
}
const visao = (idPlayer) => {
    return fetch(`${url}dadosSala/?keyRoom=${token}`, {
        method: 'GET',
        headers: {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-type":"application/json;charset=utf-8"
        },
        body: JSON.stringify({
            idPlayer: idPlayer
        })
    })
    .then(function(response) {
        return response.text();
      }).then(function(data) {
        console.log(data);
      })

}



const temCor = () => {
    return fetch(`${url}api/coresRestantes?keyRoom=${token}`)
        .then(resposta => {
            return resposta.json()
        })
}

// criando sala 
const criarSala = (keyRoom, valorInicial, identificador, namePlayer) => {
    return fetch(`${url}SaveRoomPlayer/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            keyRoom: keyRoom,
            valorInicial: valorInicial,
            identificador: identificador,
            namePlayer: namePlayer
        })
    })
        .then(resposta => {
            return resposta.json()
        })

}

// colocando player na sala


const criarJogadorPlayer = (identificador, namePlayer, playerBank) => {
    return fetch(`${url}createPlayer/?keyRoom=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identificador: identificador,
            namePlayer: namePlayer,
            playerBank: playerBank
        })
    })
        .then(resposta => {
            return resposta.json()
        })
}

// const trasfereJogador = (identificador, namePlayer, idPlayer) => {
//     return fetch(`${url}`)
// }

// trasfere 
const trafereDinheiroParaOsAmigos = (flagPlayerBank, dPlayerDe, idPlayerPara, valor) => {
    return fetch(`${url}api/transferencia/?keyRoom=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            flagPlayerBank: flagPlayerBank,
            idPlayerDe: dPlayerDe,
            idPlayerPara: idPlayerPara,
            valor: valor,
        })
    })
        .then(resposta => {
            return resposta.body
        })
}


export const dadosSala = {
    dados,visao,  criarSala, temCor, criarJogadorPlayer, trafereDinheiroParaOsAmigos
}
