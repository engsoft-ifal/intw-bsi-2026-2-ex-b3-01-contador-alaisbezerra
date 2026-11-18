const valorAtual = document.querySelector("#total")
const BtnSomar = document.querySelector("#somar")
const BtnZerar = document.querySelector("#zerar")
let valor = 0

valorAtual.textContent = valor;

BtnSomar.addEventListener("click", function(){
    valor = valor + 1;
    valorAtual.textContent = valor;
})

BtnZerar.addEventListener("click", function(){
    valor = 0;
    valorAtual.textContent = valor;
})
