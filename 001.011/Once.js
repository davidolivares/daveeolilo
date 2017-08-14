/*
Haciendo uso del zoo que definimos en el ejercicio anterior,
vamos a añadirle funcionalidad:
1) Haz una función que añada un visitante nuevo:
    Si el zoo está lleno no podrá entrar.
    Para entrar deberá pagar la entrada que dependerá de:
        Niños <14 años: gratis
        Personas mayores >65 gratis
        Resto: 5$
        Estudiantes: 3$
    Este importe deberá ser restado del dinero del visitante y añadido a la caja del zoo
    El visitante irá a un área y una recinto aleatoria,
    si esta está llena, deberá buscar otro lugar
2) Crea una función que se llame ejecutarCiclo() que simule el paso de 1 hora en el zoo, deberá:
    - Añadir visitantes al parque y también los retire del parque
    - Deberá quedar reflejado que ha pasado un ciclo en el importe de las personas (tendrán menos dinero) y en la caja del parque (habrá ganado dinero)
    (El ciclo simula ser una hora del parque, pero lo ejecutamos cada 3seg)
3) Crea una funcionalidad que simule el paso de un ciclo en un animal:
    - Su salud se verá afectada disminuyendo o aumentando 10 (de forma aleatoria).
    - Si la salud del animal descience por debajo de 50, este debéra ir a la enfermería.
    - También el animal tendrá más hambre cada hora que pase (+10) cuando llegue a 100 deberá ser alimentado y pasará a tener hambre 0.
4) Asocia la funcionalidad anterior a la función de ejecutarCiclo() de manera que los animales vayan variando su salud y su hambre.
De vez en cuando algunos animales deberán ir a la enfermería (salud menor de 50) donde recuperarán 10 de salud hasta llegar a 100. 
Al llegar a 100 deberán volver a su recinto.
BONUS:
Haz que en cada ciclo una persona tenga una probabilidad del 15% de comprar un prodcuto de la tienda.
Añade una propiedad tienda en ZOO que tenga un array de artículos de regalo (añade 20 artículos).
Un artículo de regalo tendrá un nombre y un precio.
Las personas que deseen comprar eligirán un artículo aleatorio y se lo llevarán (ya no estará en la tienda)
2)  Crear función cerrar zoo, encargada de:
- Parar el intervalo
- Sacar a todas las personas del zoo
3) Cuando el hambre de un animale llegue a 100 el animal estará muy hambriento y deberá ser alimentado.
Al alimentar un animal su hambre pasa a 0 y al zoo le cuesta 1000$
4) Si el zoo no tiene dinero para alimentar a los animales, no podrá hacerlo.
Cuando un animal tenga más de 150 de hambre, se comerá a un visitante.
El zoo se quedará con su cartera.
5) Realiza una función imprimirEstadoZoo() que muestre por consola el estado del zoo.
Deberán mostrarse:
- las áreas:
    - los recintos de ese área:
        - los animales de ese recinto
        - el número de visitantes de ese recinto
- la enfermería:
    - los animales dentro de la enfermería
- la tienda
    - el número de productos de la tienda
- la caja del zoo
6) Si el hambre del animal supera 300, se comerá otro animal de su recinto.
*/
// Funciones auxiliares
function generarNumeroAleatorioEntre(minimo, maximo){
    var anchoFranjaNumerica = (maximo-minimo) + 1;
    var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

    return numero;
}

function generarNombreAleatorio(){
    var nombresNegados = ["Chava", "Karen","Lydda" ,"Rosa", "Paula", "Ale", "Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran", "Bruce", "Jordana", "Roberto", "Jorge"];
    var indice = generarNumeroAleatorioEntre(0, nombresNegados.length-1);

    return nombresNegados[indice];
}

function generarNombreArticuloAleatorio(){
    var nombresNegados = ["Gorro", "Polo", "Pelota", "Vasos", "Posters", "Fotos", "Gaseosas", "Comida", "Helados", "Boletos", "Mochila"];
    var indice = generarNumeroAleatorioEntre(0, nombresNegados.length-1);

    return nombresNegados[indice];
}

function dameRecintoAleatorio(){
    var recinto = null;
    var recintosEnMiZoo = [];

    for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
        var area = zoo.areas[indiceArea];
        for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
            var recinto = area.recintos[indiceRecintos];
            recintosEnMiZoo.push(recinto);
        }
    }

    var indiceAleatorio = generarNumeroAleatorioEntre(0, recintosEnMiZoo.length-1);
    recinto = recintosEnMiZoo[indiceAleatorio];

    return recinto;
}

function dameAnimalAleatorio(){
    var animal = null;
    var animalesEnMiZoo = [];

    for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
        var area = zoo.areas[indiceArea];
        for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
            var recinto = area.recintos[indiceRecintos];
            for(var indiceAnimales=0; indiceAnimales<recinto.animales.length; indiceAnimales++){
                var animal = recinto.animales[indiceAnimales];
                animalesEnMiZoo.push(animal);
            }
        }
    }

    var indiceAleatorio = generarNumeroAleatorioEntre(0, animalesEnMiZoo.length-1);
    animal = animalesEnMiZoo[indiceAleatorio];

    return animal;
}

function damePersonaAleatorio(){
    var persona = null;
    var personasEnMiZoo = [];

    for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
        var area = zoo.areas[indiceArea];
        for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
            var recinto = area.recintos[indiceRecintos];
            for(var indicePersonas=0; indicePersonas<recinto.personas.length; indicePersonas++){
                var persona = recinto.personas[indicePersonas];
                personasEnMiZoo.push(persona);
            }
        }
    }

    var indiceAleatorio = generarNumeroAleatorioEntre(0, personasEnMiZoo.length-1);
    persona = personasEnMiZoo[indiceAleatorio];

    return persona;
}

function dameArticuloAleatorio(){
    var articulo = null;
    var articulosEnMiZoo = [];

    for(var indiceArea=0; indiceArea<zoo.articulos.length; indiceArea++){
        var articulo = zoo.articulos[indiceArea];
        articulosEnMiZoo.push(articulo);
    }

    var indiceAleatorio = generarNumeroAleatorioEntre(0, articulosEnMiZoo.length-1);
    articulo = articulosEnMiZoo[indiceAleatorio];

    return articulo;
}

// Añade personas de forma aleatoria
function insertarPersonasAleatoriamente(numeroPersonas,zoo){
    for(var i=0; i<numeroPersonas; i++){
        var persona = crearPersonaAleatoria();
        var recintoAleatorio = dameRecintoAleatorio();

        if(recintoAleatorio.aforoMaximoPersonas>recintoAleatorio.personas.length){
           recintoAleatorio.personas.push(persona);

        } else {
            console.error(persona.nombre + " no cabe en el recinto " + recintoAleatorio.nombre);
        }
    }
}

// Añado los recintos a las áreas
function addRecintoToArea(recinto, area, zoo) {
    area.recintos.push(recinto);
    area.aforoMaximo = area.aforoMaximo + recinto.aforoMaximoPersonas;
    if(zoo.areas.indexOf(area)!= -1) {
        zoo.aforo = zoo.aforo + area.aforoMaximo;
    }   
}

// Añado las areas al zoo
function addAreaToZoo(area, zoo) {
    zoo.areas.push(area);
    zoo.aforo = zoo.aforo + area.aforoMaximo;
}
//EJERCICIO 11
function ejecutarCicloGeneral() {
    ejecutarCicloVisitanteNuevo(zoo);
    ejecutarCicloAnimal();
    ejecutarCicloEnfermeria();
    comprarArticulosPersonas();
    detenerEjecucionInterval();
    numeroEjecucionesIntervalos++;
    console.log("CANTIDAD DE EJECUCIONES: " + numeroEjecucionesIntervalos);
}    

function ejecutarCicloVisitanteNuevo(zoo) {
    //console.log("Ingresando visitante...")
    var persona = crearPersonaAleatoria();

    loop:
    for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
        var area = zoo.areas[indiceArea];
        for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
            var recintoAleatorio = area.recintos[indiceRecintos];
            if(recintoAleatorio.aforoMaximoPersonas>recintoAleatorio.personas.length){
                if(persona.edad >= 14 && persona.edad <= 65) {
                    if(persona.estudiante) {
                        persona.dinero = persona.dinero - 3;
                    } else {
                        persona.dinero = persona.dinero - 5;
                    }
                    //añadiendo dinero a caja
                    zoo.caja += (persona.estudiante) ? 3 : 5;      
                } 
                recintoAleatorio.personas.push(persona);
                break loop;

            } else {
                console.error(persona.nombre + " no cabe en el recinto " + recintoAleatorio.nombre);
            }
        }
    }
}

function ejecutarCicloAnimal() {
    for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
        var area = zoo.areas[indiceArea];
        for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
            var recinto = area.recintos[indiceRecintos];

            for(var indiceAnimales=0; indiceAnimales<recinto.animales.length; indiceAnimales++){
                var animal = recinto.animales[indiceAnimales];
                var objetoEnfermeriaBuscar = {
                    animal: animal,
                    recinto: recinto        
                }  

                if(!estaContenidoEnEnfermeria(objetoEnfermeriaBuscar)) {
                    animal.hambre += 10;
                    if(animal.hambre >= 100) {
                        if(zoo.caja >= 1000) {
                            //Si el ZOO tiene dinero alimentará al animal
                            animal.hambre = 0;
                            zoo.caja -= 1000;

                        } else if(animal.hambre >= 150 && animal.hambre < 300 ) {
                            //Se comera a un visitante
                            var cantidadVisitantesRecinto = recinto.personas.length;
                            if(cantidadVisitantesRecinto > 0) {
                                var dineroPersona = recinto.personas[0].dinero;
                                zoo.caja += dineroPersona;
                                console.log("--- EL ANIMAL " + animal.nombre + " se comio a " + recinto.personas[0].nombre);
                                recinto.personas.splice(0,1);
                                animal.hambre = 0;
                                
                            }
                        } else if(animal.hambre > 300){
                            //Si tiene hambre mayor a 300 se come a otro animal
                            for(var indiceAnimalesOther=0; indiceAnimalesOther<recinto.animales.length; indiceAnimalesOther++){
                                if(indiceAnimalesOther != indiceAnimales) {
                                    console.log("--- EL ANIMAL " + animal.nombre + " se comio a " + recinto.animales[indiceAnimalesOther].nombre);
                                    recinto.animales.splice(indiceAnimalesOther,1);
                                    animal.hambre = 0;
                                    break;
                                }
                            }
                        }                        
                    }

                    animal.salud += (Math.random() < 0.5 ? 10 : -10);
                    if(animal.salud < 50) {
                        var objetoEnfermeria = {
                            animal: animal,
                            recinto: recinto        
                        }  
                        recinto.animales.splice(indiceAnimales,1);
                        zoo.enfermeria.push(objetoEnfermeria);

                    } else if(animal.salud >= 100){
                        animal.salud = 100;
                    } 
                }
            }
        }
    }
} 

function ejecutarCicloEnfermeria() {
    var arrayIndicesEliminar = [];
    for(var indiceEnfermeria = 0; indiceEnfermeria < zoo.enfermeria.length; indiceEnfermeria ++) {
        var objetoEnfermeria = zoo.enfermeria[indiceEnfermeria];
        objetoEnfermeria.animal.salud += 10;
        if(objetoEnfermeria.animal.salud >= 100) {
            arrayIndicesEliminar.push(indiceEnfermeria);
        }    
    }

    for(var indice=0; indice<arrayIndicesEliminar.length; indice++ ) {
        var animal = zoo.enfermeria[indice].animal;
        var recintoBuscar = zoo.enfermeria[indice].recinto;
        for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
            var area = zoo.areas[indiceArea];
            for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
                var recinto = area.recintos[indiceRecintos];
                if(recinto == recintoBuscar) {
                    recinto.animales.push(animal);
                    zoo.enfermeria.splice(indice,1);        
                }
            }
        }
    }
}   

function estaContenidoEnEnfermeria(objetoEnfermeria) {
    for(var i=0; i<zoo.enfermeria.length; i++) {
        var enfermeria = zoo.enfermeria[i];
        if(objetoEnfermeria.animal == enfermeria.animal && objetoEnfermeria.recinto == enfermeria.recinto) {
            return true;
        }    
    }        
    return false;
}

function comprarArticulosPersonas() {
    var totalPersonas = 0;
    for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
        var area = zoo.areas[indiceArea];
        for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
            var recinto = area.recintos[indiceRecintos];
            totalPersonas += recinto.personas.length;
        }
    }

    var cantidadCompradores = parseInt(totalPersonas * 0.15);
    for(var indiceComprar=0; indiceComprar<cantidadCompradores; indiceComprar++) {
        var persona = damePersonaAleatorio();
        var articulo = dameArticuloAleatorio();    
        if(articulo != undefined) {
            persona.dinero -= articulo.precio;
            persona.articulosComprados.push(articulo);

            quitarArticuloZoo(articulo);        
        }    
    }    
}   

function quitarArticuloZoo(articuloComprado) {
    for(var indiceArticulo=0; indiceArticulo<zoo.articulos.length; indiceArticulo++){
        var articulo = zoo.articulos[indiceArticulo];
        if(articuloComprado == articulo) {
            zoo.articulos.splice(indiceArticulo,1);        
        }    
    }
}  

function detenerEjecucionInterval() {
    if(numeroEjecucionesIntervalos > 100000 ) {
        clearInterval(intervalID);
        for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
            var area = zoo.areas[indiceArea];
            for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
                var recinto = area.recintos[indiceRecintos];
                for(var indicePersonas=recinto.personas.length; indicePersonas>= 0; indicePersonas--){
                    console.log("quitando personas");
                    var persona = recinto.personas[indicePersonas];
                    recinto.personas.splice(indicePersonas,1);
                }
            }
        }
    }
}   

function imprimirEstadoZoo() {
    console.log("*** ESTADO DE LOS ANIMALES Y PERSONAS ***");
    for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
        var area = zoo.areas[indiceArea];
        console.log("-> AREA: " + area.nombre);
        for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
            var recinto = area.recintos[indiceRecintos];
            console.log("- RECINTO: " + recinto.nombre);
            console.log("- Cantidad de personas en el recinto: " + recinto.personas.length);
            console.log("- Animales en el recinto: ");
            for(var indiceAnimales=0; indiceAnimales<recinto.animales.length; indiceAnimales++){
                var animal = recinto.animales[indiceAnimales];
                console.log(" * " + animal.nombre);
            }
        }
    }

    console.log("");
    console.log("ESTADO DE LOS ANIMALES EN ENFERMERIA");
    for(var indiceEnfermeria = 0; indiceEnfermeria < zoo.enfermeria.length; indiceEnfermeria ++) {
        var objetoEnfermeria = zoo.enfermeria[indiceEnfermeria];
        console.log("- " + objetoEnfermeria.animal.nombre); 
    }

    console.log("");
    console.log("ESTADO DE LA TIENDA DEL ZOO");
    for(var indiceArea=0; indiceArea<zoo.articulos.length; indiceArea++){
        var articulo = zoo.articulos[indiceArea];
        console.log("- " + articulo.nombre); 
    }

    console.log("");
    console.log("ESTADO DE LA CAJA DEL ZOO: " + zoo.caja);

}

var zoo = {
    nombre: "El último zoológico",
    ubicacion: {},
    areas: [],
    aforo: 0,
    caja: 0,
    enfermeria: [],
    articulos: []
};

var ubicacion = {
    direccion: "Calle de los animalitos 123",
    ciudad: "Ciudad de México",
    pais: "México",
    telefono: 999888777
}

// Seteamos la ubicacion
zoo.ubicacion = ubicacion;

function crearArea(nombre){
    var area = {
        nombre: nombre,
        aforoMaximo: 0,
        recintos: [],
    };

    return area;
}

function crearRecinto(nombre, aforoMaximoPersonas, aforoMaximoAnimales, detalle){
    return {
        nombre: nombre,
        animales: [],
        personas: [],
        aforoMaximoPersonas: aforoMaximoPersonas,
        aforoMaximoAnimales: aforoMaximoAnimales,
        detalle: detalle
    };
}

function crearAnimal(nombre, especie, salud, hambre, pais){
    return {
        nombre: nombre,
        especie: especie,
        salud: salud,
        hambre: hambre,
        pais: pais
    };
}

function crearPersonaAleatoria(){
    return {
        nombre: generarNombreAleatorio(),
        edad: generarNumeroAleatorioEntre(1, 90),
        dinero: generarNumeroAleatorioEntre(0, 1000),
        estudiante: generarNumeroAleatorioEntre(0,1),
        articulosComprados: []
    }
}

function crearArticulo() {
    return {
        nombre: generarNombreArticuloAleatorio(),
        precio: generarNumeroAleatorioEntre(1, 90)
    }
}

function cargarArticulos() { 
    for(var indice = 0; indice < 11; indice++) {
        var articulo = crearArticulo();
        zoo.articulos.push(articulo);
    }    
}

// Creo animales
var tigreBlanco = crearAnimal("Tigre Blanco", "Panthera tigris", 10, 100, "India");
var tigreBengala = crearAnimal("Tigre de Bengala", "Panthera tigris", 97, 68, "Bangladesh");
var aguilaReal = crearAnimal("Aguila Real", "Aquila Chrysaetos", 100, 100, "México");
var halconGerifalte = crearAnimal("Halcón Gerifalte", "Falco Rusticolus", 99, 50, "Inglaterra");
var cocodrilo = crearAnimal("Cocodrilo", "Crocodylidae", 65, 80, "Australia");
var caiman = crearAnimal("Caiman", "Caiman Wannlangstoni", 89, 10, "Perú");
var jirafa = crearAnimal("Jirafa", "Giraffa Camelopardalis", 78, 20, "África");
var hipopotamo = crearAnimal("Hipopótamo", "Hippopotamus Amphibius", 100, 100, "África");
var chupacabras = crearAnimal("Chupi", "Chupacabras mamonus", 90, 100, "Cd. Juarez");
var momosaurio = crearAnimal("Momazo", "Memes Momazos", 100, 100, "Cdmx");

// Creo recintos 
var recintoTigres = crearRecinto("Jaula de tigres", 50, 30, "Jaula super reforzada con Adamantium anti-wolverine");
var recintoAves = crearRecinto("Jaula para aves voladoras", 100, 80, "Aves cazadoras");
var recintoAnfibios = crearRecinto("Lago para cocodrilos", 60, 40, "Lago con piedras gigantes");
var recintoMamiferos = crearRecinto("Lago y pradera", 105, 80, "Especies sensibles");
var recintoCreepy = crearRecinto("Lugar mágico", 105, 80, "Especies extraordinarias");

// Creo areas
var areaMamiferos = crearArea("Mamíferos");
var areaAves = crearArea("Aves");
var areaAnfibios = crearArea("Anfibios");
var areaFelinos = crearArea("Felinos");
var areaCreepy = crearArea("Creepy");

// Añado los animales a los recintos
recintoTigres.animales.push(tigreBlanco, tigreBengala);
recintoAves.animales.push(aguilaReal, halconGerifalte);
recintoMamiferos.animales.push(jirafa, hipopotamo);
recintoAnfibios.animales.push(cocodrilo, caiman);
recintoCreepy.animales.push(chupacabras, momosaurio);


addRecintoToArea(recintoTigres,areaFelinos, zoo);
addRecintoToArea(recintoAves, areaAves, zoo);
addRecintoToArea(recintoAnfibios, areaAnfibios, zoo);
addRecintoToArea(recintoMamiferos, areaMamiferos, zoo);
addRecintoToArea(recintoCreepy, areaCreepy, zoo);

addAreaToZoo(areaAnfibios, zoo);
addAreaToZoo(areaFelinos, zoo);
addAreaToZoo(areaMamiferos, zoo);
addAreaToZoo(areaFelinos, zoo);
addAreaToZoo(areaCreepy, zoo);

cargarArticulos();

// Añado 100 personas
//insertarPersonasAleatoriamente(20);

var intervalID;
var numeroEjecucionesIntervalos = 0;
function ejecutarCiclo() {
    intervalID = window.setInterval(ejecutarCicloGeneral, 3000);
}

ejecutarCiclo();

console.log(zoo);
