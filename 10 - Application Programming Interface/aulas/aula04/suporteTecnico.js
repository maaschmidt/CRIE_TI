//Problema: televisão estragada


const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const ligarParaSuporte = (callback) => {
  console.log('Ligando para o suporte técnico...');
  console.log('Alguém atendeu!');
  console.log('Explicar o problema.');
  console.log('Técnico tenta resolver  problema.');
  console.log('Abrir chamado para visita técnica.');
  
  //Simulação: tempo de demora para o ticket ser atendido.
  //O prazo é entre 1 a 3 dias corridos.
  setTimeout(() => { // setTimeout(function() {. . .}, 1000);
    callback();
  }, random(1000, 3000));
}
  
const visitaTecnica = () => {
  console.log('Visita técnica.');
  console.log('Problema resolvido.');
  console.log('Televisão voltou a funcionar.');
}

ligarParaSuporte(() =>{
  visitaTecnica();
});

console.log('Continuar vivendo..')