export function playerBank() {
  const flag = localStorage.getItem("flag")
  console.log(flag)
  if (flag == 1) {
    const banco = document.querySelector(".bank")
    banco.style.display = "block"


    const ativa = document.querySelector("[ativa]")
    ativa.addEventListener("click", () => {
      const main = document.querySelector("main")
      const icon = document.querySelector("#banco")
      const bancoTrans = document.querySelector("#bancoTras")
      // console.log("fui ativado")
      if (ativa.checked) {

        icon.style.display = "block"
        main.classList = "banco"
        bancoTrans.style.display = "none"
        localStorage.setItem("banco", 1)
        return true
      } else {
        icon.style.display = "none"
        main.classList = "off"
        bancoTrans.style.display = "block"
        localStorage.setItem("banco", 0)

        return false
      }
    })
  }
  // if()
}


// banco 0
