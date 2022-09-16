function flipCoin(){
  return Math.random() * 0.5;
}

//flipCoin(); ------ Erro de função, nenhuma variavel é atribuida

const result = flipCoin();

console.log(result);