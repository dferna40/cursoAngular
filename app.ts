//Con  let el ambito mas global es el que prevalece
let mensaje = "Hola";

if(true){
    let mensaje = "adios"
}

console.log(mensaje);

let nombre:string = "David";
let apellido:string = "Fernández";
let edad:number = 33;
let cualquiera:any = "Cualquier valor";


function getNombre(){
    return "Pepe";
}

let texto:string = `${getNombre}`;

//Objeto, en el momento que se crea el objeto se definen las propiedades que tendra al igual que en java cuando se crea la clase
let spiderman = {
 nombre: "Peter",
 edad: 20
}

//Muestro valor de variables
console.log(`Variables ${nombre} ${apellido}
${edad}`);

//Muestro valor de objeto
console.log(`Objeto Spiderman 
${spiderman.nombre}
${spiderman.edad}`);

//Muestro valor mediante una funcion
console.log(`Nombre mediante la funcion ${texto}`);