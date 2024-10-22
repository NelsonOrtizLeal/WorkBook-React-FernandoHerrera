// Const y Let
const nombre = 'Nelson';
const apellido = 'Ortiz';

let valorDado = 1;
valorDado = 3;

console.log(nombre, apellido, valorDado);

// Var => ya no se debe utilizar
// Dentro de las llaves, es un SCOPE diferente
if(true){
    const nombre = 'Alexa';
    console.log(nombre);
}

console.log(valorDado);