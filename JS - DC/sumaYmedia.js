var num = document.getElementById("num3");
var btnAniadir = document.getElementById("btnAniadir");
var btnCalcular = document.getElementById("btnCalcular");
var calcularCSM = document.getElementById("calcularCSM");

var suma = 0;
var promedio = 0;
var cantidad = 0;

btnAniadir.addEventListener("click", function(){
    if(isNum(num.value) && num.value > -1 && num.value !== null){
            suma = suma + parseFloat(num.value);
            cantidad ++;
            num.value = '';
    }else{
        alert("Ingrese un numero valido");
        num.value = '';
    }
});

btnCalcular.addEventListener("click", function(){
    if(isNum(num.value) && num.value > -1 && num.value !== null){
        promedio = suma/cantidad;
        calcularCSM.innerHTML = "<br/>Cantidad de elementos: " + cantidad + "<br/>Suma: " + suma + "<br/>Promedio: " + promedio;
    }else{
        alert("Ingrese un numero valido");
        num.value = '';
    }
    
});

function isNum(val){
    return !isNaN(val)
}
