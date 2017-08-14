var resultados = [];
var arrayDePrueba1 = ["Richie", "Joanie", "Greg", "Marcia", "Bobby"];
var arrayDePrueba2 = ["Audi", "Mercedes", "Mazda", "Toyota"];
var arrayDePrueba3 = ["Red", "Blue", "Green"];
var arrayDePrueba4 = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];

function calculoLongitudMasLargo(array) {
	var mayor = 0;

	array.forEach(function(elemento) {
		if(typeof(elemento) == "string") {
			var mayorActual = elemento.toString().length;
			if(mayorActual > mayor) {
				mayor = mayorActual;	
			}
		} else {
			console.error (elemento + " No es valor string");
		}
	});

	resultados.push(mayor);
}

calculoLongitudMasLargo(arrayDePrueba1);
calculoLongitudMasLargo(arrayDePrueba2);
calculoLongitudMasLargo(arrayDePrueba3);
calculoLongitudMasLargo(arrayDePrueba4);

console.log(resultados);

function calcularMedia(array) {
	var total = 0;
	array.forEach(function(elemento) {
		total += elemento;
	});	

	return total / array.length;
}	

console.log(calcularMedia(resultados));
