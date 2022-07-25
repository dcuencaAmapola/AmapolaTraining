var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btnSaber = document.getElementById("btnSaber");
var mostrar = document.getElementById('mostrar');

var a;
var b;
var z;
var x;

btnSaber.addEventListener("click", function(){
    n = parseFloat(num1.value);
    n2 = parseFloat(num2.value);
    if(isNum(n) && isNum(n2) && n > 0 && n2 > 0){
        if(n % 2 == 0 && n2 % 2 == 0){
            z = n + " y " + n2 + " son pares.";
            if(n % 3 == 0){
                x = n + " es multiplo de 3.";
            } else if(n2 % 3 == 0){
                x = n2 + " es multiplo de 3.";
            } else if(n % 5 == 0){
                x = n + " es multiplo de 5.";
            } else if(n2 % 5 == 0){
                x = n2 + " es multiplo de 5.";
            } else {
                x = "ninguno es multiplo 3 o 5."
            }
            a = '';
            b = '';
        }else{
            a = (n % 2 == 0) ? n + " es par." : n + " es impar.";
            b = (n2 % 2 == 0) ? n2 + " es par." : n2 + " es impar.";
            z = '';
            x = '';
        }
        mostrar.innerHTML = a +"</br>"+ b +"</br>"+ z +"</br>"+ x;
    }else{
        alert("Ingrese numeros positivos y validos.");
        document.location.reload();
    }
});

function isNum(val){
    return !isNaN(val)
}