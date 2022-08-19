let menorIdade= {"id": 0,
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

async function confereIdades() {
  await dados.forEach(element => {
    if (menorIdade.idade == 0){
      menorIdade = element;
    } else if (element.idade < menorIdade.idade){
     menorIdade = element;
    }
  });
}
confereIdades();

console.log(`${menorIdade.nome} = ${menorIdade.nome.split("").reverse().join("")}`);