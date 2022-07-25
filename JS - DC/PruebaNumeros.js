var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btnVerificar = document.getElementById("btnVerificar");
var verificacion = document.getElementById("verificacion");

btnVerificar.addEventListener('click', function () {
    if(isNum(num1.value) && isNum(num2.value) && num1.value != 0 && num2.value != 0) {
        var n = num1.value;
        var n2 = num2.value;
        if(parseFloat(n) > parseFloat(n2)) {
            verificacion.innerHTML = num1.value + " si es mayor a " + num2.value;
        } else if(parseFloat(n) < parseFloat(n2)){
            verificacion.innerHTML = num1.value + " no es mayor a " + num2.value;
        } else {
            verificacion.innerHTML = num1.value + " es igual a " + num2.value;
        }
    }
    else
    {
        alert("Datos no validos, vuelva a ingresar.");
        document.location.reload();
    }
    
});

function isNumber(numero){
    if (typeof numero === 'number' || numero instanceof number){
        return true;
    }else{
        return false;
    }
}

function isNum(val){
    return !isNaN(val)
}
