console.log("Hello world", "Santiago");

const nombre = "Santiago";

// nombre = "Juan";

let apellido = "Jurado";
console.log(apellido);

apellido = "Rodriguez";
console.log(apellido);

const edad = 25.0;
console.log("Mi edad es: ", edad);

const esMayorDeEdad = true;
console.log("Es mayor de edad", esMayorDeEdad);

const notaA = 5;
const notaB = 4;

const promedio = (notaA+notaB)/2;

console.log("El promedio es: ", promedio);

const nombreCompleto = nombre + " " + apellido;
console.log("Mi nombre completo es: ", nombreCompleto);

const tipoDeDAto = typeof nombreCompleto;
console.log(tipoDeDAto);

const numero = parseInt("5");
console.log(numero, typeof numero);

const edadPorConsola = prompt("Ingrese su edad");
console.log(edadPorConsola, typeof edadPorConsola);

const Name = prompt("Type your name");
console.log(Name);

const LastName = prompt("Type your last name");
console.log(LastName);

let BirthYear = prompt("Type year of birth"); 
BirthYear = parseInt(BirthYear);

console.log(BirthYear, typeof BirthYear);