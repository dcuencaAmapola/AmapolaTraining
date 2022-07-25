var body = document.getElementById('body5');
var titulo = document.createElement('h1');
var campo = document.createElement('input');
var btn = document.createElement('button');
var result = document.createElement('small');
var contA;
var contE;
var contI;
var contO;
var contU;


titulo.innerHTML = 'Impresion de vocales de la frase ingresada';
btn.textContent = 'Ingresar';

body.appendChild(titulo);
body.appendChild(campo);
body.appendChild(btn);
body.appendChild(result);

btn.addEventListener('click', function(){
    var frase = campo.value;
    contA = 0;
    contE = 0;
    contI = 0;
    contO = 0;
    contU = 0;
    var letra;
    for(var i=0; i<frase.length; i++){
        letra = frase.substr(i,1);
        if(letra == "a"){
            contA++;
        } else if(letra == "e"){
            contE++;
        }else if(letra == "i"){
            contI++;
        }else if(letra == "o"){
            contO++;
        }else if(letra == "u"){
            contU++;
        }
    }
    result.innerHTML = '<br>Hay ' + contA + ' vocales a, '+ contE + ' vocales e, '+ contI + ' vocales i, ' + contO + ' vocales o, '+ contU + ' vocales u.';
});