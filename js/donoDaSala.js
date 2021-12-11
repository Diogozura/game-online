const sala = fetch("https://ffgames134.herokuapp.com/createRoom/")
    .then(function (sala)
    {
        return sala.json()
    })

    .then(function (sala)
    {
        
        let link = location.hash + '/' + sala.keyRoom
        document.getElementById("link").innerHTML = link;
        console.log(link)
       
    })

// let url = new URL()


