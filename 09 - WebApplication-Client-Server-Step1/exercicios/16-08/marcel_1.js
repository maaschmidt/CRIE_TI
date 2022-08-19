let maiorIdade= {"id": 0,
"nome": "",
"idade": 0
}
// fonte de dados
const dados = [{
  "id": 1,
  "nome": "Mariane Benedita Cristiane Pires",
  "idade": 55
},
{
  "id": 2,
  "nome": "Renato Rodrigo Arthur Rocha",
  "idade": 23
},
{
  "id": 3,
  "nome": "Paul Jarvis",
  "idade": 80
},
{
  "id": 4,
  "nome": "Brian Young",
  "idade": 83
},
{
  "id": 5,
  "nome": "Lukas Budimaier",
  "idade": 18
}];

dados.forEach(element => {
  if (element.idade > maiorIdade.idade){
   maiorIdade = element;
  }
});

console.log(`Contraditório, mas a pessoa mais VELHA do array é ${maiorIdade.nome} com ${maiorIdade.idade} anos`)