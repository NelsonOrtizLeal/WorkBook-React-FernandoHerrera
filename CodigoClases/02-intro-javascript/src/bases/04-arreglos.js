// Arreglos en JS

// #1 Declarando un arreglo vacio
const arreglo = new Array(); // Declarando un arreglo vacio
console.log({ arreglo });

// #2 Declarando un arreglo con 10 posiciones
const arreglo2 = new Array(10); // A diferencia con otros lenguajes, se te permite agregar mas elementos
arreglo2.push(11); // Agregando otro elemento al arreglo, ahora tiene 11 espacios
console.log({ arreglo2 });

// #3 Declarando un arreglo con notacion literal -> forma mas estandarizada
const arreglo3 = [];
console.log({ arreglo3 });

// #4 Declarando un arreglo con notacipon literal y asignando un tamaño
const arreglo4 = [1, 2, 3, 4, 5];
console.log({ arreglo4 });

// === Operaciones con arreglos ===
let arregloNuevo = arreglo4; // Al igual que los objeto literales, estamos asignando la refernecia del arreglo y no haciendo una copia.
arregloNuevo.push(6);

//console.log({arreglo4});
console.log({ arregloNuevo });

// #5 Guardar un arreglo dentro de otro arreglo
//        indice [    0       , 1, 2, 3, 4 ] => 5 elementos
const arreglo5 = [arregloNuevo, 7, 8, 9, 10];
console.log(arreglo5);

// #6 Copiar cada elemento de un arreglo en otro arreglo
const arreglo6 = [...arregloNuevo, 7, 8, 9, 10];
console.log(arreglo6);

// #7 Función MAP, Array.Prototype.map(CallBack())
// Una función callBack, es una función que se ejecuta despues de un metodo.
// Map es un metodo que te devuelve un nuevo arreglo pero cada valor sera procesado por una funcipon(callBack)
// Se almacena el nuevo arreglo en arreglo7 en donde cada valor esta elevado al cuadrado.
const arreglo7 = arreglo6.map(function (value) {
  // El cuadrado de cada elemento dentro del arreglo
  return value * value;
});
console.log(arreglo7);
