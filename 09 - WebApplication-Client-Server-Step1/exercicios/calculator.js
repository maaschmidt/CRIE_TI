var result = document.querySelector("#result");
function numeroDigitado(numero){
    var div = document.createElement("div");
    div.innerHTML = numero;
    result.appendChild(div);
}