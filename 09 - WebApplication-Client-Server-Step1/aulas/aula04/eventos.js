ativarCaixas()

function ativarCaixas(){
    let caixas = document.querySelectorAll(".caixa");
    console.log(caixas);
    for (let i = 0; i < caixas.length; i++) {
        var caixa = caixas[i];
        console.log(caixa);
        caixa.addEventListener("mouseover", entrarCaixa);
        caixa.addEventListener("mouseout", sairCaixa);
    }
}

function entrarCaixa(){
    this.classList.add("onmouseover");
}

function sairCaixa(){
    this.classList.remove("onmouseover");
}