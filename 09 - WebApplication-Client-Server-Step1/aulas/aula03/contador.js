function contar(){
    const numero1 = Number(document.querySelector("#num1").value);
    const numero2 = Number(document.querySelector("#num2").value);
    const result = document.querySelector(".result");
    result.innerHTML = "";

    if (Number.isNaN(numero1)){
        alert("Primeiro numero inválido!")
    } else if (Number.isNaN(numero2)){
        alert("Segundo numero inválido!")
    } else {
        imprime(numero1, numero2);
    }

    function imprime(primeiro, segundo){
        if (primeiro < segundo) {
            for (let i = primeiro; i <= segundo; i++) {
                escreverLinha(i);
            }
        } else if (segundo < primeiro){
            for (let i = primeiro; i >= segundo; i--) {
                escreverLinha(i);
            }
        } else {
            alert("Os números são iguais")
        }
    }
    function escreverLinha(numero){
        const div = document.createElement("div");
        div.innerHTML = numero;
        result.appendChild(div);
    }
}