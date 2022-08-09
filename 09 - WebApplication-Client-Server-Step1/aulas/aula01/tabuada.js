numero()
function numero(){
    var numero = Number(prompt("Qual tabuada você quer saber?"))
    valida(numero)
}

function valida(valor){
    if (Number.isNaN(valor)){
        alert("Digite um número válido")
        numero()
    } else {
        imprime(valor)
    }
}

function imprime(valor){
    for (var i = 1; i <= 10; i++) {
            console.log(valor +" x "+ i +" = "+i * valor)            
    }
}