var num = document.getElementById('num');
var btnCalcular = document.getElementById('btnCalcular');
var calculo = document.getElementById('calculo');
var hectareas;
var cantArboles;
btnCalcular.addEventListener('click', function(){
    calculo.innerHTML = "La cantidad de arboles necesarios es: " + calcular(num);
});

function calcular(numero){
    var n = parseFloat(numero.value);
    hectareas = n *10000;
    cantArboles = hectareas * 3;
    return cantArboles;
}