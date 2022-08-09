alert('PAR ou IMPAR')
var numero = Number(prompt("Até que número você quer saber?"))

if (Number.isNaN(numero)){
    alert("Digite um número")
} else {
    var opcao = prompt("Digite P para números pares e I para números impares")
    if (!(opcao === 'P' ||opcao === 'p'||opcao === 'I'||opcao === 'i')) {
        alert("Apenas 'P' ou 'I'")
    } else {
        var soma = 0
        if (opcao === 'P' || opcao === 'p') {
            for (let i = 2; i <= numero; i+=2) {
                console.log(i)       
                soma += i
            }
        } else if (opcao === 'I' || opcao === 'i'){
            for (let i = 1; i <= numero; i+=2) {
                console.log(i)       
                soma += i
            }
        }
        console.log("Soma = "+ soma)
    }
}