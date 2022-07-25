var body = document.getElementById('body');
var titulo = document.createElement('h1');
var campo = document.createElement('input');
var btn = document.createElement('button');
var result = document.createElement('small');

titulo.innerHTML = '¿Es divisible para 2?';
btn.textContent = 'Ingresar';

body.appendChild(titulo);
body.appendChild(campo);
body.appendChild(btn);
body.appendChild(result);

btn.addEventListener('click', function(){
    var n = campo.value;
    var mensaje = (parseInt(n) % 2 == 0) ? 'Si es divisible para 2' : 'No es divisible para 2';
    result.innerHTML = mensaje;
});


