let nome : string = "Marcel";
let idade : number = 25;
let criado : Date = new Date();
let situacao : boolean = false;
let nomes : string[] = ["Nome1", "Nome2", "Nome3"]

console.log(`Nome = ${nome} e Idade = ${idade}`);
console.log(`Criado = ${criado.toLocaleString()}`)
console.log(`Situação = ${situacao}`)

for (const nome of nomes) {
  console.log(nome);
}