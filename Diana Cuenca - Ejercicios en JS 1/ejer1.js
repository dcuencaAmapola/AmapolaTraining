var num = document.getElementById("num");
var btnIngresar = document.getElementById("btnIngresar");
var btnResultado = document.getElementById("btnResultado");
var resultados = document.getElementById('resultados');
var resultadosRestas = document.getElementById('resultadosRestas');
var arreglo = new Array();
var a = new Array();

btnIngresar.addEventListener("click", function(){
    n = parseFloat(num.value);
    if(isNum(n)){    
        arreglo.push(n);
        resultados.innerHTML = arreglo;
    } else {
        alert("Ingrese datos validos");
        document.location.reload();
    }
});

btnResultado.addEventListener("click", function(){
    arreglo = arreglo.sort(function(a, b){
        return a -b;
    });
    var m1;
    var m2;
    var men;
    //encontrar los valores medios cuando es par la cantidad de elementos
    if(arreglo.length % 2 == 0){
        var mid = arreglo.length / 2;
        //primera mitad del arreglo
        var o = arreglo.slice(0, mid);
        //segunda mitad del arreglo
        var p = arreglo.slice(mid, arreglo.length);
        m1 = o[o.length -1];
        m2 = p[0];
        men = "y " + m2;
    }else{
        var mid = parseInt(arreglo.length / 2) + 1;
        var o = arreglo.slice(0, mid);
        m1 = o[o.length -1];
        men = '';
    }

    resultados.innerHTML = arreglo + "</br>Menor: " 
                        + arreglo[0] + "</br>Mayor: " 
                        + arreglo[arreglo.length -1] 
                        + "</br> Mitad: " + m1 + " "+ men;
    
    for(var i = 0; i < arreglo.length; i++){
        var y = i+1;
        var l = arreglo.length;
        if(!(y == l)){
            var t = parseFloat(arreglo[i+1]) - parseFloat(arreglo[i]);
            a.push(t);
            
        }
    }
    resultadosRestas.innerText = "\nRestas entre ellos: " + a;
    
});

function isNum(val){
    return !isNaN(val)
}