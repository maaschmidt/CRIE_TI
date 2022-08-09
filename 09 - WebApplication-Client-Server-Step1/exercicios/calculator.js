var result = document.querySelector("#result");
var num1 = 0;
var num2 = 0;
var funcao;
function numeroDigitado(numero){
    var div = document.createElement("div");
    div.innerHTML = numero;
    result.appendChild(div);
}

function operacao(funcao){
    console.log(funcao)
    this.funcao = funcao;
    result.appendChild(funcao);
}