const flag = localStorage.getItem("flag")

export function sair() {
    const sair = document.querySelector("[sair]")

    sair.addEventListener("click", function () {

        if (flag == 1) {
            
        } else {
            console.log("sair")
            localStorage.clear()
            location.href = '../index.html'
        }
       

      
    })

  
}

