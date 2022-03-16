const valor = document.getElementById("valor")

valor.addEventListener("onChange", () => {
    
    console.log(valor)
    const valorReal = valor.toFixed(2)
})
