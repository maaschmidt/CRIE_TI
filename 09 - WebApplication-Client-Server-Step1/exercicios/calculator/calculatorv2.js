var result = document.querySelector("#result");

function digito(tecla){
    var div = document.createElement("div");
    div.innerHTML = tecla;
    result.appendChild(div);
}

function limpar(){
    result.innerHTML = "";
}

function deletaUltimo(){
    result.removeChild(result.lastChild);
}

function igualA(){
    let resultado = eval(result.textContent);
    result.innerHTML = resultado;
}