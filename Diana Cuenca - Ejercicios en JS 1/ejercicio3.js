var nombre = document.getElementById('nombre');
var cedula = document.getElementById('cedula');
var carrera = document.getElementById('carrera');
var notas = document.getElementById('notas');

var nombre1 = document.getElementById('nombre1');
var cedula1 = document.getElementById('cedula1');
var carrera1 = document.getElementById('carrera1');
var notas1 = document.getElementById('notas1');

var btnIngresar = document.getElementById('btnIngresar');
var btnIngresar1 = document.getElementById('btnIngresar1');

var calculoNotas = document.getElementById('calculoNotas');

var btnCalcularNotas = document.getElementById('btnCalcularNotas');

var suma = 0;
var promedio = 0;
var cantidad = 0;
var suma1 = 0;
var promedio1 = 0;
var cantidad1 = 0;

btnIngresar.addEventListener('click', function(){
    var num = notas.value;
    console.log(num);
    if(isNum(num) && num > -1 && num !== null){
        suma = suma + parseFloat(num);
        cantidad ++;
        num = '';
    }else{
        alert("Ingrese un numero valido");
        num = '';
    }
});

btnIngresar1.addEventListener('click', function(){
    var num = notas1.value;
    console.log(num);
    if(isNum(num) && num > -1 && num !== null){
        suma1 = suma1 + parseFloat(num);
        cantidad1 ++;
        num = '';
    }else{
        alert("Ingrese un numero valido");
        num = '';
    }
});

btnCalcularNotas.addEventListener('click', function(){
    promedio = suma / cantidad;
    promedio1 = suma1 / cantidad1;

    if(promedio > promedio1){
        calculoNotas.innerHTML = "El estudiante " + nombre.value + " con cedula "+ cedula.value + " y de la carrera de "+ carrera.value + " tiene el mayor promedio de " + promedio + ".";
    }else if (promedio == promedio1){
        calculoNotas.innerHTML = "Los estudiantes " + nombre.value+ " y " + nombre1.value + " tienen el mismo promedio de " + promedio + ".";        
    }else{
        calculoNotas.innerHTML = "El estudiante " + nombre1.value + " con cedula "+ cedula1.value + " y de la carrera de "+ carrera1.value + " tiene el mayor promedio de " + promedio1 + ".";
    }
});

function isNum(val){
    return !isNaN(val)
}