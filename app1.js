"use strict";
//21. Definición de una clase básica en TypeScript
class Avenger {
    constructor(nombreAvenger, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        console.log("Se ejecuto el constructor");
        this.nombreAvenger = nombreAvenger;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}
let antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
