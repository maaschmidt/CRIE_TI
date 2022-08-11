var result = document.querySelector("#result");

function digit(key){
    var div = document.createElement("div");
    div.innerHTML = key;
    result.appendChild(div);
}

function erase(){
    result.innerHTML = "";
}

function deleteLast(){
    result.removeChild(result.lastChild);
}

function equal(){
    let resulted = eval(result.textContent);
    result.innerHTML = resulted;
}