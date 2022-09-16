class Usuario{
  nome: string = "";
  idade: number = 0;
}

let marcel = new Usuario();
marcel.nome = "Marcel";
marcel.idade = 25;

let ariele = new Usuario();
ariele.nome = "Ariele";
ariele.idade = 24;

let usuarios = new Array<Usuario>();
usuarios.push(marcel);
usuarios.push(ariele);

console.log(usuarios);