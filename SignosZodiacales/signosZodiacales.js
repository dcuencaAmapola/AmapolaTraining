let meses = document.getElementById('meses');
let dias = document.getElementById('dias');
let btnCalcular = document.getElementById('btnCalcular');
let mostrar = document.getElementById('mostrar');
let signo;
let dia;
let mes;

let arraySignos2 = [{signo: 'Aries', mesInicio: '3', diaInicio: 21},
                    {signo: 'Tauro', mesInicio: '4', diaInicio: 21},
                    {signo: 'Geminis', mesInicio: '5', diaInicio: 21},
                    {signo: 'Cancer', mesInicio: '6', diaInicio: 22},
                    {signo: 'Leo', mesInicio: '7', diaInicio: 23},
                    {signo: 'Virgo', mesInicio: '8', diaInicio: 24},
                    {signo: 'Libra',mesInicio: '9', diaInicio: 23},
                    {signo: 'Escorpio', mesInicio: '10', diaInicio: 23},
                    {signo: 'Sagitario', mesInicio: '11', diaInicio: 23},
                    {signo: 'Capricornio', mesInicio: '12', diaInicio: 22},
                    {signo: 'Acuario', mesInicio: '1', diaInicio: 21},
                    {signo: 'Piscis', mesInicio: '2', diaInicio: 20}];


btnCalcular.addEventListener('click', function(){
    dia = parseInt(dias.value);
    mes = parseInt(meses.value);
    signo = arraySignos2.find(item => item.mesInicio==mes);
    posicion = arraySignos2.findIndex(item => item.mesInicio == mes);

    let impresionSigno = signo.signo;

    if(signo.mesInicio == 3){
        if(dia > signo.diaInicio){
            mostrar.innerHTML = impresionSigno;
        }else{
            signo = arraySignos2.find(item => item.mesInicio==(mes-1));
        }
        
    }else if(dia < signo.diaInicio){
        signo = arraySignos2.find(item => item.mesInicio==(mes-1));
    }

    impresionSigno = signo.signo
    mostrar.innerHTML = impresionSigno;
});
