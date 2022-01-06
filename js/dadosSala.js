const url = "https://ffgames134.herokuapp.com/"

const dados = () => {
    return fetch(url + "dadosSala/?keyRoom=G0cjVXJ5bIq4yNELM98F")
        .then(resposta => {
            return resposta.json()
        })
      

}
const criarSala = (keyRoom, valorInicial, identificador, namePlayer) => {
    return fetch(url + "SaveRoomPlayer/", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            token: keyRoom,
            valor:valorInicial,
            id:identificador,
            nome:namePlayer
        })
    })
        .then(resposta => {
        return resposta.body
    })

} 

export const dadosSala = {
    dados, criarSala
}