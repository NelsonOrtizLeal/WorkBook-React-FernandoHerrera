// Objetos literales -> Diccionario

// En un objeto puedes guardar todo tipo de dato:
/*!SECTION
    string
    int
    decimal
    Objetos -> {}
    arreglo
*/
const persona = {
  nombre: "Nelson",
  apellido: "Ortiz Leal",
  edad: 26,
  direccion: {
    ciudad: "México",
    zip: 123456,
    lat: 12.4234,
    lgn: 53.1231,
  },
};

// Mostrar el objeto
console.log(persona);
console.table(persona);

// Forma incorrecta de hacer una copia de un objeto
const persona2 = persona; // Se esta asignando la referencia de memoria del objeto NO CREANDO UNO NUEVO.
persona2.nombre = "Alexa";

console.log(persona);
console.log(persona2);

// Para crear un nuevo objeto puedes hacerlo de la siguiente forma:
// Usando las llaves y declarando todas las propiedades de nuevo.
const persona3 = {
  nombre: "Persona 3",
};
// Sin enbargo esta forma tomaria mucho tiempo
console.log(persona3);

// Existe otra forma creada por EC6 llamada - SPREAD
const persona4 = { ...persona }; // De esta forma copio todas las propiedades(Claves) que tenga el objeto
persona4.nombre = "SPREAD";
console.log(persona4);
