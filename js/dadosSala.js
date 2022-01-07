const urlDados = "https://ffgames134.herokuapp.com/dadosSala/?keyRoom="
const urlSafe = "https://ffgames134.herokuapp.com/"
const token = window.localStorage.getItem('token')

const dados = () => {
    return fetch(urlDados + token)
        .then(resposta => {
            return resposta.json()
        })
      

}
const criarSala = (keyRoom, valorInicial, identificador, namePlayer) => {
    return fetch(urlSafe + "SaveRoomPlayer/", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            keyRoom: keyRoom,
            valorInicial:valorInicial,
            identificador:identificador,
            namePlayer:namePlayer
        })
    })
        .then(resposta => {
        return resposta.body
    })

} 

export const dadosSala = {
    dados, criarSala
}