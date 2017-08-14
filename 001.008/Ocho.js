
var stringDeNumeros = '80:70:90:100';
var stringDeNumeros = '80:70:90:100:100:100:100';
function obtenerMedia(cadenaNumeros) {
    var arrayNumeros = cadenaNumeros.split(":");
    var sumaNumeros = 0; 
    var objeto = {};

    for(var i=0; i< arrayNumeros.length; i++) {
        var elemento = arrayNumeros[i];
        if(!objeto[elemento]) {
            objeto[elemento] = elemento;
            sumaNumeros += parseInt(elemento);
        }         
    }

    return sumaNumeros / Object.getOwnPropertyNames(objeto).length;
}
console.log(obtenerMedia('80:70:90:100'));
console.log(obtenerMedia('80:70:90:100:100:100:100')); 