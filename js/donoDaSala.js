let url = "http://127.0.0.1:5500/jogogame.html"



const sala = fetch("https://ffgames134.herokuapp.com/createRoom/")
    .then(function (sala)
    {
        return sala.json()
    })

    .then(function (sala)
    {
        
        let link =  sala.keyRoom
        
        console.log(link)

        let newUrl = url + "?room" + link 
        document.getElementById("link").innerHTML = newUrl;
       
    })



// let url = new URL()
const iniciar = document.querySelector("#iniciar") 
iniciar.addEventListener("click", function () {
    console.log("ain")
})
