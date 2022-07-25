var body = document.getElementById('body6');
var titulo = document.createElement('h1');
var campo = document.createElement('input');
var btn = document.createElement('button');
var result = document.createElement('small');
var cont;
var num = new Array();

titulo.innerHTML = 'Divisible para 2, 3, 5, 7';
btn.textContent = 'Ingresar';

body.appendChild(titulo);
body.appendChild(campo);
body.appendChild(btn);
body.appendChild(result);

btn.addEventListener('click', function(){
    var n = campo.value;
    var mensaje;
    if(parseInt(n) % 2 == 0 || parseInt(n) % 3 == 0 || parseInt(n) % 5 == 0 || parseInt(n) % 7 == 0){
        if(parseInt(n) % 2 == 0){
            num.push(2);
        }
        if(parseInt(n) % 3 == 0 ){
            num.push(3);
        }
        if(parseInt(n) % 5 == 0){
            num.push(5);
        }
        if(parseInt(n) % 7 == 0){
            num.push(7);
        }
        mensaje = n + ' es divisible para ' + num;
    }else{
        mensaje = 'No es divisible para ninguno de los numeros'
    }
    
    result.innerHTML = '<br>' + mensaje;
    num = new Array();
});