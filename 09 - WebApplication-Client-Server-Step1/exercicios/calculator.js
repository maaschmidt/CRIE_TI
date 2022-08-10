var result = document.querySelector("#result");
var num1 = 0;
var num2 = 0;
var funcao = '';

function numeroDigitado(numero){
    if(num1 != 0){
        this.num2 = numero;
        // console.log(num2);
    }
    var div = document.createElement("div");
    div.innerHTML = numero;
    result.appendChild(div);
}

function operacao(funcao){
    this.num1 = result.textContent;
    let div = document.createElement("div");
    div.innerHTML = funcao;
    result.appendChild(div);
    this.funcao = funcao;
}

function numeroDecimal(ponto){
    let div = document.createElement("div");
    div.innerHTML = ponto;
    result.appendChild(div);
}

function limpar(){
    result.innerHTML = "";
    num1 = 0;
    num2 = 0;
    funcao = '';
}

function deletaUltimo(){
    result.removeChild(result.lastChild);
}

function igualA(){
    let resultado;
    if (funcao == "/"){
        resultado = num1/num2;
    } else if (funcao == "*"){
        resultado = num1*num2;
    } else if (funcao == "-"){
        resultado = num1-num2;
    } else if (funcao == "+"){
        resultado = num1+num2;
    }
    result.innerHTML = resultado;
}