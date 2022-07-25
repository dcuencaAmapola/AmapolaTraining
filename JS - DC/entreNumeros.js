var num = document.getElementById("num4");
var num2 = document.getElementById("num5");
var btnEntre = document.getElementById("btnEntre");
var listaNum = document.getElementById("listaNum");
var cont = 0;

btnEntre.addEventListener("click", function(){
    listaNum.innerHTML = "Lista: ";
    for(var n = parseInt(num.value); n <= parseInt(num2.value); n++){
        listaNum.innerHTML += n + " "; 
        cont ++;
    }
});