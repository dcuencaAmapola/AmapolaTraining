var body = document.getElementById('body2');
var titulo = document.createElement('h1');
var campo = document.createElement('input');
var btn = document.createElement('button');
var result = document.createElement('small');
var cont;

titulo.innerHTML = 'Letra a en la frase ingresada';
btn.textContent = 'Ingresar';

body.appendChild(titulo);
body.appendChild(campo);
body.appendChild(btn);
body.appendChild(result);

btn.addEventListener('click', function(){
    var frase = campo.value;
    cont = 0;
    for(var i=0; i<frase.length; i++){
        if(frase.substr(i,1) == "a"){
            cont++;
        }
    }
    result.innerHTML = '<br>' + cont;
});