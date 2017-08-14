function vaciarPapelera(array) {
   
    var newArray = [];
    array.forEach(function(elemento) {
        if(elemento != '*') {
            newArray.push(elemento);
        }    
    });

    return newArray;
}

function agruparElementos(array) {
    return array.sort();
}

function ponerBonitasLasLetras(array) {
    var arrayVocales = ['A','E','I','O','U'];
    
    for(var i = 0; i < array.length; i++ ) {
        var elemento = array[i];
        if(typeof(elemento) == 'string') {
            if(arrayVocales.indexOf(elemento.toString().toUpperCase()) != -1) {
                array.splice(i,1,elemento.toUpperCase());
            } else {
                array.splice(i,1,elemento.toLowerCase());    
            }
        }       
    }    

    return array;
}

function ponerBonitosLosNumeros(array) {   
    for(var i=0; i < array.length; i++) {
        var elemento = array[i];
        if(typeof(elemento) == 'number') {
            if(elemento.length != 1) {
                var total = elemento;
                var caracteres = 0;  
                while(caracteres != 1) {
                    var totalLocal = 0;
                    var numeros = total.toString().split("");
                    numeros.forEach(function(num) {
                        totalLocal += parseInt(num);
                    });
                    caracteres = total.toString().length;
                    total = totalLocal;
                }        
                array.splice(i,1,total);
            }    
        }   
    }        

    return array;
}

function arrayToString(array) {
     var string = "";
     array.forEach(function(elemento) {
        string += elemento+""; 
     });
     return string;
}

function arrayCompleto(array) {
    array = vaciarPapelera(array);
    array = agruparElementos(array);
    array = ponerBonitasLasLetras(array);
    array = ponerBonitosLosNumeros(array);
    array = arrayToString(array);

    return array;
}
console.log(arrayCompleto(["a", 6, "B", "F", "*", 8, 78, "J"]) === "668bfjA");
console.log(arrayCompleto(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y"]) === "48668AcfjAbjqry");