// 2. Número da Sorte! 
// O sistema consiste em “chutar” números aleatoriamente até encontrar o número certo cadastrado no sistema.
// A cada chute o sistema informa se o palpite do usuário está ACIMA ou ABAIXO do número da sorte. 
// Ao acertar o número, é informada a quantidade de erros até a descoberta do número. 
// O intervalo de valores é definido no sistema, sendo aceitos números entre 0 e 1000.

var numeroSorte = 313;
var numero = 0;
var erros = -1;

while(numero != numeroSorte){
    numero = Number(prompt("Digite um número"))
    if (numero > 1000 || numero < 0){
        numero = Number(prompt("Digite um número entre 0 e 1000"))
    } else if (numero < numeroSorte) {
        alert("Abaixo")
        erros++;
    } else if (numero > numeroSorte) {
        alert("Acima")
        erros++;
    }
}
alert("Acertoooou")
console.log(erros);