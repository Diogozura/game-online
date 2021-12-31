const sala = () => {
    return fetch("https://ffgames134.herokuapp.com/createRoom/")
        .then(function (sala) {
            
            return sala.json()
        })

}

export const linkSala = {
    sala
}