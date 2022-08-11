new Promise((resolve, reject) => {
});

const obterDados = () => {
  return new Promise((resolve, reject) => {
    //Conectar com o BD
    //Fazer consulta
    //Retornar pessoa consultada
      resolve({
        nome : "Marcel",
        sobrenome : "Schmidt",
        idade : "25" 
      });
  });
}

const imprime = (dados) => {
      console.log(`Nome: ${dados.nome} ${dados.sobrenome}`);
      console.log(`Idade: ${dados.idade}`);
}

obterDados()
  .then((dados) => {
    imprime(dados);
  })
  .catch((error) => {
    console.log(error);
  });