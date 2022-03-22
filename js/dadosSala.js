const token = localStorage.getItem("token")
const url = "https://ffgames134.herokuapp.com/"
const idPlayer = localStorage.getItem("idPlayer")
// dados da sala
const dados = () => {
    return fetch(`${url}api/dadosSala/?keyRoom=${token}`)

        .then(resposta => {
            // console.log(resposta.status)
            if (resposta.status != 200) {
                location.reload()
            }
            return resposta.json()
        })
}
const visao = () => {
    return fetch(`${url}dadosSala/?keyRoom=${token}&idPlayer=${idPlayer}`)

        .then(resposta => {
            // console.log(resposta.status)
            return resposta.json()
        })

}

const trocaBanco = (idPlayerDe, idPlayerPara) => {
    return fetch(`${url}api/troca_player_banc?keyRoom=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idPlayerDe: idPlayerDe,
            idPlayerPara: idPlayerPara
        })
    })
        .then(resposta => {
            if (resposta.status == 201) {
                localStorage.clear()
                location.href = '../index.html'
            } else {
                console.log("não saiu")
            }

            return resposta.json()
        })

}

const sair = () => {
    return fetch(`${url}/api/quitPlayer?keyRoom=${token}&idPlayer=${idPlayer}`, {
        method: 'DELETE',
    })
    
}


const extrato = () => {
    return fetch(`${url}api/extrato/?keyRoom=${token}`)
        .then(resposta => {
            // console.log(resposta.status)
            return resposta.json()
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
    return fetch(`${url}api/SaveRoomPlayer/`, {
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
            if (resposta.status == 201) {
                window.location.href = '../jogo/game.html'
            } else {
                console.log("não passou")
            }

            return resposta.json()
        })

}

// colocando player na sala


const criarJogadorPlayer = (identificador, namePlayer) => {
    return fetch(`${url}api/createPlayer/?keyRoom=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identificador: identificador,
            namePlayer: namePlayer,
        })
    })
        .then(resposta => {
            if (resposta.status == 201) {
                // console.log("que cheiro de pika")
                window.location.href = '../jogo/game.html'
            } else {

                console.log("não passou")
            }
            return resposta.json()
        })
}

// const trasfereJogador = (identificador, namePlayer, idPlayer) => {
//     return fetch(`${url}`)
// }

// trasfere 
const trafereDinheiroParaOsAmigos = (idPlayerDe, idPlayerPara, valor) => {
    return fetch(`${url}api/transferencia/?keyRoom=${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // flagPlayerBank: flagPlayerBank,
            idPlayerDe: idPlayerDe,
            idPlayerPara: idPlayerPara,
            valor: valor,
        })
    })
        .then(resposta => {
            if (resposta.status == 200) {
                alert("transferncia aprovada")
            } else {
                console.log("transferencia não aprovada")
            }
            return resposta.body
        })
}


export const dadosSala = {
    dados, visao, extrato, criarSala, temCor, criarJogadorPlayer, trafereDinheiroParaOsAmigos, trocaBanco,sair
}
