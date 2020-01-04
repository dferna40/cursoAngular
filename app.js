"use strict";
//Con  let el ambito mas global es el que prevalece
var mensaje = "Hola";
if (true) {
    var mensaje_1 = "adios";
}
console.log(mensaje);
var nombre = "David";
var apellido = "Fernández";
var edad = 33;
var cualquiera = "Cualquier valor";
function getNombre() {
    return "Pepe";
}
var texto = "" + getNombre;
//Objeto, en el momento que se crea el objeto se definen las propiedades que tendra al igual que en java cuando se crea la clase
var spiderman = {
    nombre: "Peter",
    edad: 20
};
//Muestro valor de variables
console.log("Variables " + nombre + " " + apellido + "\n" + edad);
//Muestro valor de objeto
console.log("Objeto Spiderman \n" + spiderman.nombre + "\n" + spiderman.edad);
//Muestro valor mediante una funcion
console.log("Nombre mediante la funcion " + texto);
