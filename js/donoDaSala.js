let url = "http://127.0.0.1:5500/donoDaSala.html"


const sala = fetch("https://ffgames134.herokuapp.com/createRoom/")
    .then(function (sala)
    {
        return sala.json()
    })

    .then(function (sala)
    {
        
        let link =  sala.keyRoom
        
        console.log(link)

        let newUrl = url + link 
        document.getElementById("link").innerHTML = newUrl;
       
    })

// let url = new URL()

console.log (new URL ("http://127.0.0.1:5500/donoDaSala.html"+ link))
