var body = document.getElementById('body4');
var titulo = document.createElement('h1');
var campo = document.createElement('input');
var btn = document.createElement('button');
var result = document.createElement('small');
var cont;
var vocales = new Array();

titulo.innerHTML = 'Impresion de vocales de la frase ingresada';
btn.textContent = 'Ingresar';

body.appendChild(titulo);
body.appendChild(campo);
body.appendChild(btn);
body.appendChild(result);

btn.addEventListener('click', function(){
    var frase = campo.value;
    cont = 0;
    var letra;
    for(var i=0; i<frase.length; i++){
        letra = frase.substr(i,1);
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
            cont++;
            vocales.push(letra);
        }
    }
    result.innerHTML = '<br>Hay ' + cont + ' vocales. Son las siguientes : '+ vocales;
});