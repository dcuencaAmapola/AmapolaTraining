var body = document.getElementById('body7');
var titulo = document.createElement('h1');
var campo = document.createElement('input');
var btn = document.createElement('button');
var result = document.createElement('small');
var cont;
var num = new Array();

titulo.innerHTML = '¿Es primo?';
btn.textContent = 'Ingresar';

body.appendChild(titulo);
body.appendChild(campo);
body.appendChild(btn);
body.appendChild(result);

btn.addEventListener('click', function(){
    var n = campo.value;
    var mensaje = (esPrimo(n)) ? 'es Primo' : 'no es primo';
    result.innerHTML = '<br>' + n + ' ' + mensaje;
    num = new Array();
});

function esPrimo(n) 
{
    if (n<=1) return false;
    for (var i = 2; i <= n-1; i++)
        if (n % i == 0) return false;
    return true;
}