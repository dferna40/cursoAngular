//21. Definición de una clase básica en TypeScript
class Avenger {
    nombreAvenger:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombreAvenger:string, equipo:string, nombreReal:string){
        console.log("Se ejecuto el constructor");
        this.nombreAvenger = nombreAvenger;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman:Avenger = new Avenger("Antman", "cap", "Scott Lang");

console.log(antman);