ativarCaixas()
var body = document.querySelector("#body");
function ativarCaixas(){
    var caixas = document.querySelectorAll(".caixa:not(.ativada)");
    console.log(caixas);
    for (let i = 0; i < caixas.length; i++) {
        var caixa = caixas[i];
        caixa.classList.add("ativada")
        caixa.id = "caixa-"+(i+1);
        caixa.addEventListener("click", clickCaixa);
        caixa.addEventListener("mouseover", entrarCaixa);
        caixa.addEventListener("mouseout", sairCaixa);
        caixa.addEventListener('dblclick', apagarCaixa);
    }
}

function entrarCaixa(){
    this.classList.add("mouseSobre");
    this.innerHTML = "Mouse Sobre";
}

function sairCaixa(){
    this.classList.remove("mouseSobre");
    this.classList.remove("clicado");
    this.innerHTML = "";
}

function clickCaixa(){
    this.classList.add("clicado");
    this.innerHTML = "Clicado";
}

function apagarCaixa(){
    this.remove();
}

function addCaixa(){ 
    var caixa = document.createElement('div');
    caixa.classList.add('caixa');
    document.body.appendChild(caixa);
    ativarCaixas()
}