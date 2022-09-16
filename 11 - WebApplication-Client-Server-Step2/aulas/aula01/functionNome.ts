function montaNome(nome: string, sobrenome: string, nomeMeio?: string){
  console.log(`Oi, ${nome.toUpperCase()} ${nomeMeio?.toUpperCase()} ${sobrenome.toUpperCase()}`);
}

montaNome('Marcel', 'Schmidt', 'Augusto');