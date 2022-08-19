let mediaIdades= {
  idades: 0,
  media: 0,
  count: 0
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

async function coletaIdades() {
  await dados.forEach(element => {
    mediaIdades.idades += element.idade;
    mediaIdades.count++;
  })
}
coletaIdades();

mediaIdades.media = mediaIdades.idades / mediaIdades.count;

console.log(`Média das idades é ${mediaIdades.media}`);