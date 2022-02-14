const sair = document.querySelector("[sair]")

sair.addEventListener("click", function () {
    console.log("sair")
    localStorage.clear()
    location.href = '../index.html'
})

