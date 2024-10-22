// Temmplate String
const nombre = 'Nelson';
const apellido = 'Ortiz';

// Forma larga y anterior de hacer la concatenacion
const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Forma corta y moderna usando template string
const nombreCompletoTemplate = `${nombre} ${apellido}`;
console.log(nombreCompletoTemplate)

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)