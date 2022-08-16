// 3. Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
// a. Qual é a média de idade do grupo
// b. Quantas pessoas tem mais de 18 anos
// c. Quantas pessoas tem menos de 5 anos
// d. Qual foi a maior idade lida

var media = 0;
var maiores = 0;
var menos5 = 0;
var maisVelho = 0;

for (let i = 1; i <= 10; i++) {
    var idade = Number(prompt("Idade"));
    
    media += idade;
    if (idade >= 18){
        maiores++;
    } else if (idade < 5){
        menos5++;
    }

    if (idade > maisVelho){
        maisVelho = idade;
    }
}
media = media/10;

console.log("Média das idades: "+ media);
console.log("Maiores de 18: " + maiores);
console.log("Menores de 5: " + menos5);
console.log("Mais velho: " + maisVelho);