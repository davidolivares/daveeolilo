var buscarParejas = function(array) {
    var arrayNuevo = [];

    for(var i=0; i < array.length; i++) {
        var primerElemento = array[i];
        var sumaNumeros = 0;

        for(var j=0; j < array.length; j++) {
            var segundoElemento = array[j];
            sumaNumeros = primerElemento + segundoElemento;
            if(sumaNumeros == 0) {
                if(arrayNuevo.indexOf(j+","+i) == -1) {
                    arrayNuevo.push(i+","+j);
                }                  
            }   
        }   
    }   

    return arrayNuevo;
}
var miArray = [2, -5, 10, 5, 4, -10, 0, -5];
console.log(buscarParejas(miArray));