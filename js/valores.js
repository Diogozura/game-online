// const valor = document.getElementById("valor")

// valor.addEventListener("onChange", () => {
    
//     console.log(valor)
//     const valorReal = valor.toFixed(2)
// })

String.prototype.Moeda = function() {
    var v = this;
    v = v.replace(/\D/g,'')
    v = v.replace(/(\d{1})(\d{1,2})$/, "$1,$2")
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    v = v.replace(/^(\d)/g,"R$ $1")
    return v;
}


   const valor = document.getElementById("#valor").value
    
    valor.addEventListener("keyup", () => {
   
    })
   
  



