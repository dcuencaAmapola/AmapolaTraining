/*Calcular el promedio de notas de dos estudiantes de los cuales se quiere saber el nombre, cédula y
carrera. Verificar quien esta reprobado y aprobado y quien es el que tiene el promedio mayor*/
//creacion del div padre, titulo e instruccion general
var parent = document.getElementById("parentDiv");
var title = document.createElement("h1");
var instruccion = document.createElement('small');
var notas = document.createElement('small');
//creacion de los campos para saber la cantidad de alumnos a crear
var cant = document.createElement('input');
var btnIngresarCant = document.createElement('button');
var campoNotasInput = document.createElement('input');
var btnIngresarCantNotas = document.createElement('button');
var cNotasInput = document.createElement('input');
var btnIngresarNotas = document.createElement('button');
var btnIngresarDatos = document.createElement('button');
var btnCalcular = document.createElement('button');
var btnSiguienteEs = document.createElement('button');
//creacion de titulos y campos 
var estudiate;
var nombre;
var nombreInput;
var cedula;
var cedulaInput;
var carrera;
var carreraInput;

//creacion de un espacio blanco para uso general
var espacio = document.createElement('small');
//variables generales de uso
var n;
var not;
var estudiantes = new Array();
var i;
var bool = false;
var suma;
var promedio;
//Establecimiento del titulo, instruccion y boton a mostrar en pantalla
title.innerHTML = "Promedio de Alumnos";
instruccion.innerHTML = "Ingrese la cantidad de estudiantes: ";
btnIngresarCant.textContent = "Ingresar";
espacio.innerHTML = "</br>";
notas.innerHTML = "Ingrese la cantidad de notas por cada estudiante: ";
btnIngresarCantNotas.textContent = "Ingresar";
btnIngresarNotas.textContent = "Ingresar";
btnSiguienteEs.textContent = "Siguiente";
btnIngresarDatos.textContent = "Ingresar Datos";
btnCalcular.textContent = "Calcular";
//llamada a la creacion de los campos en el div padre
parent.appendChild(title);
parent.appendChild(instruccion);
parent.appendChild(cant);
parent.appendChild(btnIngresarCant);
parent.appendChild(espacio);
parent.appendChild(notas);
parent.appendChild(campoNotasInput);
parent.appendChild(btnIngresarCantNotas);

btnIngresarCant.addEventListener("click", function(){
    n = parseFloat(cant.value);
    i=0;
});
var e = new Array();

btnDatos();

function btnDatos(){
    btnIngresarCantNotas.addEventListener("click", function(){
        datos();
    });
};


var notas = new Array();
promedio = 0;
suma = 0;
btnIngresarNotas.addEventListener("click", function() {    
    console.log(e); 
    if(bool == false){
        notas.push(cNotasInput.value);
        console.log(notas);
        suma = parseFloat(cNotasInput.value) + suma;
    }
    if(notas.length==not){
        bool = true;
        parent.appendChild(btnSiguienteEs);
    }
});

btnSiguienteEs.addEventListener("click", function() {
    nombreInput.value = "";
    cedulaInput.value = "";
    carreraInput.value = "";
    console.log(nombreInput.value);
    e = new Array();
    notas = new Array();
    btnDatos();
});

btnIngresarDatos.addEventListener("click", function(){
    e.push(nombreInput.value);
    e.push(cedulaInput.value);
    e.push(carreraInput.value);
    estudiantes.push(e);
    console.log(estudiantes);
    parent.appendChild(btnCalcular);
});

btnCalcular.addEventListener("click", function(){
    promedio = suma/not;
    console.log(suma);
    console.log(promedio);
    estudiantes.push(promedio);
});

function datos (){
    not = parseFloat(campoNotasInput.value);
    if(isNum(n) && n > 0){
        if(i<n){
            estudiate = document.createElement('h3');
            nombreInput = document.createElement('input');
            cedulaInput = document.createElement('input');
            carreraInput = document.createElement('input');
            nombre = document.createElement('small');
            nombre.innerHTML = "Nombre: ";
            cedula = document.createElement('small');
            cedula.innerHTML = "</br>Cedula: ";
            carrera = document.createElement('small');
            carrera.innerHTML = "</br>Carrera: ";

            estudiate.innerHTML = "Ingrese los datos del Estudiante N " + (i+1);
            
            parent.appendChild(estudiate);
            parent.appendChild(espacio);
            parent.appendChild(nombre);
            parent.appendChild(espacio);
            parent.appendChild(nombreInput);
            parent.appendChild(espacio);
            parent.appendChild(cedula);
            parent.appendChild(espacio);
            parent.appendChild(cedulaInput);
            parent.appendChild(espacio);
            parent.appendChild(carrera);
            parent.appendChild(espacio);
            parent.appendChild(carreraInput);
            parent.appendChild(espacio);
            parent.appendChild(cNotasInput);
            parent.appendChild(btnIngresarDatos);
            parent.appendChild(btnIngresarNotas);
            
            incremento();
            console.log(i);
        }
    }else{
        alert("Ingrese un digito valido o mayor a cero.");
    }
}

function incremento(){
    return i++;
}

function isNum(val){
    return !isNaN(val)
}

