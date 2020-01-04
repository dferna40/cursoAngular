"use strict";
//Con  let el ambito mas global es el que prevalece
let mensaje = "Hola";
if (true) {
    let mensaje = "adios";
}
console.log(mensaje);
let nombre = "David";
let apellido = "Fernández";
let edad = 33;
let cualquiera = "Cualquier valor";
function getNombre() {
    return "Pepe";
}
let texto = `${getNombre}`;
//Objeto, en el momento que se crea el objeto se definen las propiedades que tendra al igual que en java cuando se crea la clase
let spiderman = {
    nombre: "Peter",
    edad: 20
};
//Muestro valor de variables
console.log(`Variables ${nombre} ${apellido}
${edad}`);
//Muestro valor de objeto
console.log(`Objeto Spiderman 
${spiderman.nombre}
${spiderman.edad}`);
//Muestro valor mediante una funcion
console.log(`Nombre mediante la funcion ${texto}`);
//15. Funciones: Parámetros opcionales, obligatorios
//y por defecto
//Los parametros obligatorios van al principio
//Primer parametro obligatorio,
//Segundo parametro valor predefinido
//Tercer parametro opcional con ?
function activar(quien, objeto = "batseñal", momento) {
    let mensaje;
    if (momento) {
        mensaje = `${quien} activo la ${objeto} por la ${momento}`;
    }
    else {
        mensaje = `${quien} activo la ${objeto}`;
    }
    console.log(mensaje);
}
activar("David", "batseñal");
activar("David", "batseñal", "noche");
//16. Funciones de Flecha
//Funcion normal
let miFuncion = function (a) {
    return a;
};
//La primera a es el parametro y la segunda es lo que devuelve
let miFuncionFlecha = a => a;
//Enviando mas de un parametro a la funcion flecha
//Funcion normal
let miFuncion2 = function (a, b) {
    return a + b;
};
//Funcion de flecha
let miFuncionFlecha2 = (a, b) => a + b;
//Funcion de flecha con logica en su interior
//Funcion normal
let miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//Funcion de flecha
let miFuncionFlecha3 = (nombre) => {
    nombre = nombre.toUpperCase();
    return nombre;
};
let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(() => console.log(this.nombre + " smash!!"), 1500);
    }
};
hulk.smash();
console.log(miFuncion("Normal"));
console.log(miFuncionFlecha("Flecha"));
//17. Destructuración de Objetos y Arreglos
//Objetos
let vengadores = {
    nombreVengador: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
//Forma normal
//let nombreVengador = vengadores.nombreVengador;
//let clave = vengadores.clave;
//let poder = vengadores.poder;
//Forma con destructuración de Objetos
//Si se pone let {nombreVengador:string,clave,poder}
//nombreVengador:string string se considera un alias
let { nombreVengador, clave, poder } = vengadores;
console.log(nombreVengador, clave, poder);
//Array
let vengadoresArray = ["Thor", "Steve", "Tony"];
let [thor, capi, ironman] = vengadoresArray;
//Imprimir todas las posiciones del array
console.log(thor, capi, ironman);
//Imprimir una posicion en concreto del array
//Dejar en blanco las posiciones que no se quieran imprimir
//let [,,ironman] = vengadoresArray;
//console.log(ironman);
//18. Promesas en ES6 (ejecutar procesos asincronos)
let promesa1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promesa terminada");
        //Termina bien
        resolve();
        //Termina mal
        //reject();
    }, 2000);
});
console.log("Paso 1");
promesa1.then(function () {
    console.log("Ejecutarme cuando se termine bien!");
}, function () {
    console.error("Ejecutarme si algo salio mal");
});
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
;
let wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
