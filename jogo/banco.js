
export const flag = localStorage.getItem("flag")



export function playerBank() {

  if (flag == 1) {
    const banco = document.querySelector(".bank")
    banco.style.display = "block"


    const ativa = document.querySelector("[ativa]")
    ativa.addEventListener("click", () => {

      const icon = document.querySelector("[banco-icone]")
      const iconePlayer = document.querySelector("#icone")

      const nomePlayer = document.querySelector("[nome]")
      const nomeBanco = document.querySelector(".nome-banco")

      const bancoTrans = document.querySelector("#bancoTras")
      const jogador = document.querySelector(".transfere-jogadorP")



     
      if (ativa.checked) {
        
        icon.style.display = "none"
        iconePlayer.style.display = "block"

        nomeBanco.style.display = "none"
        nomePlayer.style.display = "block"

        bancoTrans.style.display = "block"

        jogador.style.display = "none"

        localStorage.setItem("banco", 0)

        
        return true

      } else {

        icon.style.display = "block"
        iconePlayer.style.display = "none"
       

        nomeBanco.style.display = "block"
        nomePlayer.style.display = "none"
        
        bancoTrans.style.display = "none"

        jogador.style.display = "block"
        localStorage.setItem("banco", 1)

        return false
      }

      
    })
  }
  // if()
  
}


// banco 0







