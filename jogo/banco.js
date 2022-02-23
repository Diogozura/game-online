export function playerBank() {
    const flag = localStorage.getItem("flag")
    console.log(flag)
    if (flag == 1) {
      const banco = document.querySelector(".bank")
      banco.style.display = "block"
  
  
      const ativa = document.querySelector("[ativa]")
      ativa.addEventListener("click", () => {
        // console.log("fui ativado")
        if (ativa.checked) {
            const main = document.querySelector("main")
            const icon = document.querySelector("#banco")
            icon.style.display = "block"
          main.classList = "banco"
        } else {
            const main = document.querySelector("main")
            const icon = document.querySelector("#banco")
            icon.style.display = "none"
          main.classList = "off"
        }
      })
    }
    // if()
  }
