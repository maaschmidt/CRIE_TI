function contar(){
    var numero = Number(document.querySelector("#numero").value);
    var option = document.querySelector("#option").value;
    var result = document.querySelector(".result");
    result.innerHTML = "";
    var soma = 0;

    if (Number.isNaN(numero)){
        alert("Numero inválido!")
    } else if (option == "null"){
        alert("Opção inválida")
    } else {
        imprime(numero, option)
    }

    function imprime(numero, option){
        if (option == "par") {
            for (let i = 2; i <= numero; i=i+2) {
                escreverLinha(i);
                soma += i;
            }
        } else if (option == "impar") {
            for (let i = 1; i <= numero; i=i+2) {
                escreverLinha(i);
                soma += i;
            }
        }
    }
    function escreverLinha(numero){
        var div = document.createElement("div");
        div.innerHTML = numero;
        result.appendChild(div);
    }
    escreverLinha("-----");
    escreverLinha(soma);
}