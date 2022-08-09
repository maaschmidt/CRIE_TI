var partes = []

var parte1 = {
    nome : "Parte Principal"
}
parte1.mesa = criarMesa(30, "P")

var parte2 = {
    nome : "Parte Vergonha" 
}
parte2.mesa = criarMesa(30, "P")

var parte3 = {
    nome : "Parte Grupo" 
}
parte3.mesa = criarMesa(6, "M")

partes.push(parte1)
partes.push(parte2)
partes.push(parte3)
console.log(partes)

function criarMesa(quantidade, tamanho){
    var mesas = []
    for (let i = 1; i <= quantidade; i++) {
        var mesa = {posicao : i}
        mesas.push(mesa)
    }
    return mesas
}