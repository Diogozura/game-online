const flag = localStorage.getItem("flag")

export function sair() {
    const sair = document.querySelector("[sair]")

    sair.addEventListener("click", function () {

        if (flag == 1) {
            alert("você não pode sair, para de ser gayyyy")
        } else {
            console.log("sair")
            localStorage.clear()
            location.href = '../index.html'
        }
       

      
    })

  
}

