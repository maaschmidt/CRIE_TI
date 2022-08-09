var numero1, numero2
primeiro()
function primeiro(){
    numero1 = Number.parseInt(prompt("Primeiro número: "))
    valida(numero1)
    segundo()
}
function segundo(){
    numero2 = Number.parseInt(prompt("Segundo número: "))
    valida(numero2)
    imprime(numero1, numero2)
}
function valida(numero){
    if (Number.isNaN(numero)){
        alert("Digite apenas números")
        primeiro()
        segundo()
    }
}

function imprime(primeiro, segundo){
    if (primeiro < segundo) {
        for (let i = primeiro; i <= segundo; i++) {
            console.log(i)            
        }
    } else if (segundo < primeiro){
        for (let i = primeiro; i >= segundo; i--) {
            console.log(i)            
        }
    } else {
        alert("Os números são iguais")
    }
}