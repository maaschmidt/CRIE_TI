let result = document.querySelector("#result");
let dark = true;

function digit(key){
    var div = document.createElement("div");
    div.innerHTML = key;
    result.appendChild(div);
}

function erase(){
    result.innerHTML = "";
    
}
function delete_last(){
    result.removeChild(result.lastChild);
}

function equal(){
    result.innerHTML = eval(result.textContent);
}

function turn_mode(){
    let body = document.querySelector("#body");
    let display = document.querySelector("#display");
    let crie = document.querySelector("#crie");
    let light_mode = document.querySelector("#light_mode");
    let delete_last = document.querySelector("#delete_single_num");
    let clear = document.querySelector("#clear");
    let equal = document.querySelector("#equalTo");
    let zero_btn = document.querySelectorAll("#zero_btn");
    let normal_btn = document.querySelectorAll("#normal_btn");
    console.log(dark)
    if (dark){
        body.classList.add("light");
        result.classList.add("light");
        display.classList.add("light")
        crie.classList.add("light");
        light_mode.classList.add("light")
        delete_last.classList.add("light");
        clear.classList.add("light");
        equal.classList.add("light");
        zero_btn.forEach(element => {
            element.classList.add("light");
        });
        normal_btn.forEach(element => {
            element.classList.add("light");
        });
        dark = false;
    } else {
        body.classList.remove("light");
        result.classList.remove("light");
        display.classList.remove("light")
        crie.classList.remove("light");
        light_mode.classList.remove("light");
        delete_last.classList.remove("light");
        clear.classList.remove("light");
        equal.classList.remove("light");
        zero_btn.forEach(element => {
            element.classList.remove("light");
        });
        normal_btn.forEach(element => {
            element.classList.remove("light");
        });
        dark = true;
    }
}

