alert('Hello World!');
document.write('Hello World'+ '<br/>');
document.write('3 + 5 = '+ (3+5));

var name = prompt('Ingresa tu nombre', 'Diana');
document.write('<br/>' +'Hola' + ' '+ name);

var n1 = prompt('Ingresa un numero', '');
var n2 = prompt('Ingresa otro numero', '');
document.write('<br/>' +'La suma de  '+ n1 + ' y '+ n2 + ' es ' + (parseInt(n1)+parseInt(n2)));

var n3 = prompt('Ingresa un numero', '');
var n4 = prompt('Ingresa otro numero', '');
var mensaje = (parseInt(n3)>parseInt(n4)) ? n3 : n4; 
document.write('<br/>' +'El mayor entre '+ n3 + ' y '+ n4 + ' es ' + mensaje);

var n5 = prompt('Ingresa un numero', '');
var n6 = prompt('Ingresa otro numero', '');
var n7 = prompt('Ingresa otro numero', '');
var mensaje;
if(parseInt(n5) > parseInt(n6) && parseInt(n5) > parseInt(n7)){
    mensaje = n5;
}else if(parseInt(n6) > parseInt(n7)){
    mensaje = n6;
}else{
    mensaje = n7;
}
document.write('<br/>' +'El mayor entre '+ n5 + ', '+ n6 +' y '+ n7 + ' es ' + mensaje);


