let menos50= [];
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
  if(element.idade < 50){
    element.nome = `${element.nome} - menos de 50`;
    menos50.push(element);
  }
});

console.table(menos50);