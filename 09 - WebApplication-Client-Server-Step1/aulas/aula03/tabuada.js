function calcularTabuada(){
    var input = document.querySelector("#numero");
    var numero = input.value;
    var result = document.querySelector(".result");
    result.innerHTML = "";
    numero = Number(numero);
    
    if (Number.isNaN(numero)){
        alert("Digite um número")
    } else {
        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            var div = document.createElement("div");
            div.innerHTML = numero+" x "+i+" = "+ resultado;
            result.appendChild(div);           
        }
    }
}