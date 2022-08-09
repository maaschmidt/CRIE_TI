// 1. Escrever um algoritmo que leia o nome de 5 produtos, as quantidades de cada produto e os valores.
// Exibir ao final, o valor total a ser pago pelo cliente.

var valorTotal = 0;
for (let i = 0; i < 5; i++) {
    var quantidade = Number(prompt("Quantidade do produto"))
    var valor = Number(prompt("Valor unitário"))
    valorTotal += quantidade * valor;
}
console.log(valorTotal);